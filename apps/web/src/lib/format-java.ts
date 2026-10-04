/** Parse before printing: invalid/incomplete Java rejects without editing the model. */
export async function formatJava(source: string): Promise<string> {
  const [prettier, java] = await Promise.all([
    import("prettier/standalone"),
    import("prettier-plugin-java"),
  ]);
  return prettier.format(source, {
    parser: "java",
    plugins: [java.default],
    tabWidth: 4,
    printWidth: 100,
  });
}
