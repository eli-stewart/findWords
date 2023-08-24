"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findWords = exports.findWordsBasic = void 0;
var data_1 = require("./data");
/*
Root of prefix tree
Declaring root as a global variable means that we only need to build the prefix tree once
This improves performance over multiple calls to findWords
*/
var root;
function findWordsBasic(input) {
    var wordSet = new Set(data_1.WORDS);
    var solvedSubproblemCache = {};
    function unfurlPermutations(permutation, input) {
        // console.log(permutation);
        var subProblem = solvedSubproblemCache[permutation];
        if (subProblem)
            return subProblem;
        solvedSubproblemCache[permutation] = new Set();
        for (var i = 0; i < input.length; i++) {
            var nextChar = input[i];
            var nextPermutation = permutation + nextChar;
            if (wordSet.has(nextPermutation))
                solvedSubproblemCache[permutation].add(nextPermutation);
            var nextInput = input.slice(0, i) + input.slice(i + 1);
            var thisBranchWords = unfurlPermutations(nextPermutation, nextInput);
            thisBranchWords.forEach(function (childWord) {
                solvedSubproblemCache[permutation].add(childWord);
            });
        }
        return solvedSubproblemCache[permutation];
    }
    var foundWords = Array.from(unfurlPermutations("", input));
    return foundWords;
}
exports.findWordsBasic = findWordsBasic;
function findWords(input, disableTrie) {
    /*
    Initialize the prefix tree of our dictionary if it hasn't been already
    This optimization could potentially reduce performace when WORDS dictionary is very large and input is short
    Added optional disableTrie parameter for such cases
    */
    if (!root && !disableTrie)
        buildTrie();
    var wordSet;
    if (disableTrie) {
        wordSet = new Set(data_1.WORDS);
    }
    /*
    Invariant: subproblemsInProgress will contain permutations of characters
    that unfurlPermutations has already encountered in some part of the recursive tree
    Warning: Running findWords without prefix tree on large inputs can cause this Set to exceed maximum size
    */
    var subproblemsInProgress = new Set();
    //Results array of valid english words
    var foundWords = [];
    //Recursive helper function to enumerate all possible permutations and evaluate their validity
    function unfurlPermutations(permutation, input, node) {
        var _a;
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
        If we are using prefix tree it is an O(1) lookup to see if word is valid
        Otherwise it is an O(n) lookup.
        We could optimize this case to O(1) by creating a Set out of words at the beginning of findWords
        */
        if ((!node && (wordSet === null || wordSet === void 0 ? void 0 : wordSet.has(permutation))) || (node === null || node === void 0 ? void 0 : node.isEndOfWord)) {
            foundWords.push(permutation);
        }
        //Explore all possible 1 character additions to this permutation
        for (var i = 0; i < input.length; i++) {
            //Prepare inputs for recursive call
            var nextChar = input[i];
            var nextPermutation = permutation + nextChar;
            var nextInput = input.slice(0, i) + input.slice(i + 1);
            var nextNode = (_a = node === null || node === void 0 ? void 0 : node.children) === null || _a === void 0 ? void 0 : _a.get(nextChar);
            //Make recursive call if it's possible that nextPermutation will lead to more found words
            if (nextNode || disableTrie)
                unfurlPermutations(nextPermutation, nextInput, nextNode);
        }
    }
    //Kick off the recursion and fill foundWords
    unfurlPermutations("", input, disableTrie ? undefined : root);
    return foundWords;
}
exports.findWords = findWords;
//Prefix tree node
var TrieNode = /** @class */ (function () {
    function TrieNode() {
        this.children = new Map();
        this.isEndOfWord = false;
    }
    return TrieNode;
}());
/*
Creates prefix tree of all valid words so dead-end permutations can be pruned out of algorithm
*/
function buildTrie() {
    root = new TrieNode();
    for (var _i = 0, WORDS_1 = data_1.WORDS; _i < WORDS_1.length; _i++) {
        var word = WORDS_1[_i];
        var currentNode = root;
        for (var _a = 0, word_1 = word; _a < word_1.length; _a++) {
            var char = word_1[_a];
            if (!currentNode.children.has(char)) {
                currentNode.children.set(char, new TrieNode());
            }
            currentNode = currentNode.children.get(char);
        }
        currentNode.isEndOfWord = true;
    }
}
