import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import type { QuestDetail } from "@javaquets/shared";
import { QuestWorkspace } from "./quest-workspace";

const mocks = vi.hoisted(() => ({
  submit: vi.fn(),
  progress: {
    questSlug: "quest",
    status: "IN_PROGRESS",
    completedExercises: 0,
    totalExercises: 2,
    completedExerciseSlugs: [],
    startedAt: null,
    completedAt: null,
  },
}));
vi.mock("next/navigation", () => ({ useRouter: () => ({ push: vi.fn() }) }));
vi.mock("next/dynamic", () => ({
  default:
    () => (props: { code: string; onChange: (value: string) => void }) => (
      <textarea
        aria-label="Mock Java editor"
        value={props.code}
        onChange={(e) => props.onChange(e.target.value)}
      />
    ),
}));
vi.mock("@/services/learner", () => ({
  startQuest: async () => mocks.progress,
  getQuestProgress: async () => mocks.progress,
  completeExercise: vi.fn(),
}));
vi.mock("@/services/submissions", () => ({ submitJava: mocks.submit }));
const quest: QuestDetail = {
  slug: "quest",
  title: "Test quest",
  description: "",
  difficulty: "BEGINNER",
  position: 1,
  estimatedMinutes: 10,
  module: { slug: "m", title: "Module", courseSlug: "course" },
  lessons: [],
  exercises: [
    {
      slug: "a",
      title: "First exercise",
      kind: "CODE",
      prompt: "first",
      difficulty: "BEGINNER",
      position: 1,
      starterCode: "class First {}",
    },
    {
      slug: "b",
      title: "Second exercise",
      kind: "CODE",
      prompt: "second",
      difficulty: "BEGINNER",
      position: 2,
      starterCode: "class Second {}",
    },
  ],
};
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});
describe("coding exercise state", () => {
  it("isolates drafts and preserves edits across rerenders and exercise navigation", async () => {
    Element.prototype.scrollIntoView = vi.fn();
    const view = render(<QuestWorkspace quest={quest} nextQuestSlug={null} />);
    await waitFor(() => expect(screen.getByText("0/2")).toBeTruthy());
    fireEvent.change(screen.getByLabelText("Mock Java editor"), {
      target: { value: "edited" },
    });
    view.rerender(<QuestWorkspace quest={{ ...quest }} nextQuestSlug={null} />);
    expect(
      (screen.getByLabelText("Mock Java editor") as HTMLTextAreaElement).value,
    ).toBe("edited");
    fireEvent.click(screen.getByRole("button", { name: /Second exercise/ }));
    expect(
      (screen.getByLabelText("Mock Java editor") as HTMLTextAreaElement).value,
    ).toBe("class Second {}");
    fireEvent.click(screen.getByRole("button", { name: /First exercise/ }));
    expect(
      (screen.getByLabelText("Mock Java editor") as HTMLTextAreaElement).value,
    ).toBe("edited");
  });
  it("confirms reset and submits the current edited code through the existing API", async () => {
    mocks.submit.mockResolvedValue({
      status: "COMPILE_ERROR",
      errorText: "javac error",
      tests: [],
      score: 0,
      runtimeMs: 0,
    });
    render(<QuestWorkspace quest={quest} nextQuestSlug={null} />);
    await waitFor(() => expect(screen.getByText("0/2")).toBeTruthy());
    const confirm = vi.spyOn(window, "confirm").mockReturnValue(false);
    fireEvent.change(screen.getByLabelText("Mock Java editor"), {
      target: { value: "edited" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Reset code" }));
    expect(
      (screen.getByLabelText("Mock Java editor") as HTMLTextAreaElement).value,
    ).toBe("edited");
    fireEvent.click(screen.getByRole("button", { name: "Run & submit" }));
    await waitFor(() =>
      expect(mocks.submit).toHaveBeenCalledWith("quest", "a", "edited"),
    );
    await screen.findByText("javac error");
    confirm.mockReturnValue(true);
    fireEvent.click(screen.getByRole("button", { name: "Reset code" }));
    expect(
      (screen.getByLabelText("Mock Java editor") as HTMLTextAreaElement).value,
    ).toBe("class First {}");
    expect(mocks.submit).toHaveBeenCalledOnce();
  });
});
