import { WORDS } from "./data";

/*
Declaring root and wordset as a global variable means that we only need to build the prefix tree or set once 
This improves performance over multiple calls to findWords 
*/
var root: TrieNode; // Root of prefix tree
var wordSet: Set<string>; //Set of all valid english words

export function findWords(input: string, disableTrie?: boolean): string[] {
  if (disableTrie) {
    //If prefix tree is disabled, create set from WORDS for faster lookups
    if (!wordSet) wordSet = new Set(WORDS);
  } else if (!root) {
    /*
    Initialize the prefix tree of our dictionary if it hasn't been already
    This optimization could potentially reduce performace when WORDS dictionary is very large and input is short
    Added optional disableTrie parameter for such cases
    */
    buildTrie();
  }

  /*
  Invariant: subproblemsInProgress will contain permutations of characters 
  that unfurlPermutations has already encountered in some part of the recursive tree
  Warning: Running findWords without prefix tree on large inputs can cause this Set to exceed maximum size
  */
  const subproblemsInProgress: Set<string> = new Set();

  //Results array of valid english words
  const foundWords: string[] = [];

  //Recursive helper function to enumerate all possible permutations and evaluate their validity
  function unfurlPermutations(
    permutation: string,
    input: string,
    node?: TrieNode
  ) {
    /*
    We want to avoid duplicating work on subproblems. 
    If some branch of the recursive tree has already started (or finished) 
    working on the subproblem associated with this permutation, we abort.
    This check also prevents us from adding duplicates to our output.
    */
    if (subproblemsInProgress.has(permutation)) {
      return;
    }
    subproblemsInProgress.add(permutation);

    /*
    If node is defined we are using prefix tree, otherwise we do direct lookup in WORDS
    If we are using prefix tree or wordSet it is an O(1) lookup to see if word is valid
    */
    if (node?.isEndOfWord || (disableTrie && wordSet?.has(permutation))) {
      foundWords.push(permutation);
    }

    //Explore all possible 1 character additions to this permutation
    for (let i = 0; i < input.length; i++) {
      //Prepare inputs for recursive call
      const nextChar = input[i];
      const nextPermutation = permutation + nextChar;
      const nextInput = input.slice(0, i) + input.slice(i + 1);
      const nextNode = node?.children?.get(nextChar);

      //Make recursive call if it's possible that nextPermutation will lead to more found words
      if (nextNode || disableTrie)
        unfurlPermutations(nextPermutation, nextInput, nextNode);
    }
  }

  //Kick off the recursion and fill foundWords
  unfurlPermutations("", input, disableTrie ? undefined : root);
  return foundWords;
}

//Prefix tree node
class TrieNode {
  children: Map<string, TrieNode>;
  isEndOfWord: boolean;

  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

/*
Creates prefix tree of all valid words so dead-end permutations can be pruned out of algorithm
*/
function buildTrie() {
  root = new TrieNode();
  for (const word of WORDS) {
    let currentNode = root;
    for (const char of word) {
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new TrieNode());
      }
      currentNode = currentNode.children.get(char)!;
    }
    currentNode.isEndOfWord = true;
  }
}
