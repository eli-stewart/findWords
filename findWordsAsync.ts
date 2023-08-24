import { WORDS } from "./testFindWords";

export async function findWordsAsync(input: string): Promise<string[]> {
  const wordSet = new Set(WORDS);
  const solvedSubproblemCache: { [substring: string]: Set<string> } = {};

  async function unfurlPermutations(permutation: string, input: string) {
    const subProblem = solvedSubproblemCache[permutation];
    if (subProblem) return subProblem;

    solvedSubproblemCache[permutation] = new Set();

    const branches: Promise<void>[] = [];
    for (var i = 0; i < input.length; i++) {
      const evaluateThisBranch = async () => {
        const nextChar = input[i];
        const nextPermutation = permutation + nextChar;

        if (wordSet.has(nextPermutation))
          solvedSubproblemCache[permutation].add(nextPermutation);

        const nextInput = input.slice(0, i) + input.slice(i + 1);
        const thisBranchWords = await unfurlPermutations(
          nextPermutation,
          nextInput
        );
        thisBranchWords.forEach((childWord) => {
          solvedSubproblemCache[permutation].add(childWord);
        });
      };
      branches.push(evaluateThisBranch());
    }
    Promise.all(branches);
    return solvedSubproblemCache[permutation];
  }

  const foundWords = Array.from(await unfurlPermutations("", input));

  return foundWords;
}
