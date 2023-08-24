import { WORDS } from "./testFindWords";

class TrieNode {
  children: { [char: string]: TrieNode };
  isEndOfWord: boolean;

  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

var root: TrieNode;

function initTrie() {
  root = new TrieNode();
  for (const word of WORDS) {
    let currentNode = root;
    for (const char of word) {
      if (!currentNode.children?.[char]) {
        currentNode.children[char] = new TrieNode();
      }
      currentNode = currentNode.children?.[char];
    }
    currentNode.isEndOfWord = true;
  }
}

export function findWords(input: string): string[] {
  if (!root) initTrie();

  const foundWords: string[] = [];

  function unfurlPermutations(
    node: TrieNode,
    permutation: string,
    input: string
  ) {
    if (node.isEndOfWord) {
      foundWords.push(permutation);
    }

    for (let i = 0; i < input.length; i++) {
      const nextChar = input[i];
      const nextPermutation = permutation + nextChar;
      const nextNode = node.children?.[nextChar];

      if (nextNode) {
        unfurlPermutations(
          nextNode,
          nextPermutation,
          input.slice(0, i) + input.slice(i + 1)
        );
      }
    }
  }

  unfurlPermutations(root, "", input);
  return foundWords;
}
