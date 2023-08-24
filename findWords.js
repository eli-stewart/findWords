"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findWords = void 0;
var testFindWords_1 = require("./testFindWords");
var TrieNode = /** @class */ (function () {
    function TrieNode() {
        this.children = {};
        this.isEndOfWord = false;
    }
    return TrieNode;
}());
var root;
function initTrie() {
    var _a, _b;
    root = new TrieNode();
    for (var _i = 0, WORDS_1 = testFindWords_1.WORDS; _i < WORDS_1.length; _i++) {
        var word = WORDS_1[_i];
        var currentNode = root;
        for (var _c = 0, word_1 = word; _c < word_1.length; _c++) {
            var char = word_1[_c];
            if (!((_a = currentNode.children) === null || _a === void 0 ? void 0 : _a[char])) {
                currentNode.children[char] = new TrieNode();
            }
            currentNode = (_b = currentNode.children) === null || _b === void 0 ? void 0 : _b[char];
        }
        currentNode.isEndOfWord = true;
    }
}
function findWords(input) {
    if (!root)
        initTrie();
    var foundWords = [];
    function unfurlPermutations(node, permutation, input) {
        var _a;
        if (node.isEndOfWord) {
            foundWords.push(permutation);
        }
        for (var i = 0; i < input.length; i++) {
            var nextChar = input[i];
            var nextPermutation = permutation + nextChar;
            var nextNode = (_a = node.children) === null || _a === void 0 ? void 0 : _a[nextChar];
            if (nextNode) {
                unfurlPermutations(nextNode, nextPermutation, input.slice(0, i) + input.slice(i + 1));
            }
        }
    }
    unfurlPermutations(root, "", input);
    return foundWords;
}
exports.findWords = findWords;
