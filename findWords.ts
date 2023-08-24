import { WORDS } from "./testFindWords";

export function findWords(input: string): string[] {
  const wordSet = new Set(WORDS);
  const solvedSubproblemCache: { [substring: string]: Set<string> } = {};

  function unfurlPermutations(permutation: string, input: string) {
    console.log(permutation);
    const subProblem = solvedSubproblemCache[permutation];
    if (subProblem) return subProblem;

    solvedSubproblemCache[permutation] = new Set();

    for (var i = 0; i < input.length; i++) {
      const nextChar = input[i];
      const nextPermutation = permutation + nextChar;

      if (wordSet.has(nextPermutation))
        solvedSubproblemCache[permutation].add(nextPermutation);

      const nextInput = input.slice(0, i) + input.slice(i + 1);
      const thisBranchWords = unfurlPermutations(nextPermutation, nextInput);
      thisBranchWords.forEach((childWord) => {
        solvedSubproblemCache[permutation].add(childWord);
      });
    }
    return solvedSubproblemCache[permutation];
  }

  const foundWords = Array.from(unfurlPermutations("", input));

  return foundWords;
}
