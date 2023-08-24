"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findWords = void 0;
var testFindWords_1 = require("./testFindWords");
function findWords(input) {
    var wordSet = new Set(testFindWords_1.WORDS);
    var solvedSubproblemCache = {};
    function unfurlPermutations(permutation, input) {
        console.log(permutation);
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
exports.findWords = findWords;
