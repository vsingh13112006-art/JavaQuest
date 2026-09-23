import { Router } from "express";
import { prisma } from "@javaquets/database";
import { getLearnerId, requireLearner } from "../../common/auth/learnerContext.js";
import { NotFoundError } from "../../common/errors/AppError.js";

export const practiceRouter = Router();
practiceRouter.use(requireLearner);

practiceRouter.get("/problems", async (req, res, next) => {
  try {
    const userId = getLearnerId(req);
    const problems = await prisma.dsaProblem.findMany({
      where: { published: true },
      orderBy: [{ displayOrder: "asc" }, { title: "asc" }],
      include: { solvedBy: { where: { userId }, select: { userId: true } } },
    });
    res.json({ items: problems.map(({ solvedBy, ...problem }) => ({
      slug: problem.slug, title: problem.title, topic: problem.topic,
      difficulty: problem.difficulty, hackerRankUrl: problem.hackerRankUrl,
      solved: solvedBy.length > 0,
    })) });
  } catch (error) { next(error); }
});

practiceRouter.put("/problems/:slug/solved", async (req, res, next) => {
  try {
    const problem = await prisma.dsaProblem.findFirst({ where: { slug: req.params.slug, published: true }, select: { id: true } });
    if (!problem) throw new NotFoundError("DSA_PROBLEM_NOT_FOUND", "Problem not found");
    await prisma.dsaSolved.upsert({
      where: { userId_problemId: { userId: getLearnerId(req), problemId: problem.id } },
      update: {}, create: { userId: getLearnerId(req), problemId: problem.id },
    });
    res.json({ solved: true });
  } catch (error) { next(error); }
});

practiceRouter.delete("/problems/:slug/solved", async (req, res, next) => {
  try {
    const problem = await prisma.dsaProblem.findFirst({ where: { slug: req.params.slug, published: true }, select: { id: true } });
    if (!problem) throw new NotFoundError("DSA_PROBLEM_NOT_FOUND", "Problem not found");
    await prisma.dsaSolved.deleteMany({ where: { userId: getLearnerId(req), problemId: problem.id } });
    res.json({ solved: false });
  } catch (error) { next(error); }
});
