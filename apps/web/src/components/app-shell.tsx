"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/features/auth/auth-context";
export function AppShell({ children }: { children: React.ReactNode }) {
  const { user, logout } = useAuth();
  const router = useRouter();
  const path = usePathname();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  async function signOut() {
    setBusy(true);
    setError("");
    try {
      await logout();
      router.replace("/login");
    } catch (e) {
      setError(
        e instanceof Error ? e.message : "Could not log out. Try again.",
      );
    } finally {
      setBusy(false);
    }
  }
  return (
    <div className="learner-shell min-h-screen">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <header className="sticky top-0 z-20 border-b border-slate-800 bg-[#070b16]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 py-3 sm:px-5">
          <Link href="/dashboard" className="text-xl font-black">
            <span className="text-amber-400">Java</span>Quets
          </Link>
          <nav
            aria-label="Main navigation"
            className="order-3 flex w-full gap-2 md:order-none md:w-auto"
          >
            {[
              {
                href: "/dashboard",
                label: "Overview",
                active: path === "/dashboard",
              },
              {
                href: "/courses",
                label: "Courses",
                active:
                  path.startsWith("/courses") || path.startsWith("/quests"),
              },
            ].map(({ href, label, active }) => (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`inline-flex min-h-11 flex-1 items-center justify-center rounded-lg px-4 text-sm font-semibold md:flex-none ${active ? "bg-amber-400/10 text-amber-300" : "text-slate-400 hover:bg-slate-800 hover:text-white"}`}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex min-w-0 items-center gap-3">
            <span
              className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-xs font-bold text-slate-300 sm:hidden"
              aria-label={`Signed in as ${user?.displayName ?? user?.email ?? "learner"}`}
              title={user?.displayName ?? user?.email}
            >
              {(user?.displayName ?? user?.email ?? "L")
                .slice(0, 1)
                .toUpperCase()}
            </span>
            <span className="hidden max-w-48 break-words text-sm text-slate-400 sm:block">
              {user?.displayName ?? user?.email}
            </span>
            <button
              type="button"
              className="btn-secondary !px-3 text-sm"
              disabled={busy}
              onClick={signOut}
            >
              {busy ? "Logging out…" : "Log out"}
            </button>
          </div>
        </div>
        {error && (
          <p
            role="alert"
            className="mx-auto max-w-7xl px-5 pb-3 text-sm text-red-300"
          >
            {error}
          </p>
        )}
      </header>
      <main
        id="main-content"
        tabIndex={-1}
        className="mx-auto max-w-7xl px-4 py-6 sm:px-5 sm:py-8"
      >
        {children}
      </main>
    </div>
  );
}
