"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
var findWords_1 = require("./findWords");
var utils_1 = require("./utils");
function testFindWords(input, expected, disableTrie) {
    console.time(input);
    var foundWords = (0, findWords_1.findWords)(input, disableTrie);
    console.timeEnd(input);
    if ((0, utils_1.eqSet)(new Set(foundWords), new Set(expected))) {
        console.log("PASS");
    }
    else {
        console.log("FAIL");
        console.log("Found Words:", foundWords.sort());
        console.log("Expected Words:", expected.sort());
    }
    console.log();
}
function runTests() {
    for (var i = 0; i < data_1.inputs.length; i++) {
        console.log("TEST ".concat(i, " - with Trie"));
        testFindWords(data_1.inputs[i], data_1.outputs[i]);
        if (data_1.inputs[i].length < 15) {
            console.log("TEST ".concat(i, " - without Trie"));
            testFindWords(data_1.inputs[i], data_1.outputs[i], true);
        }
    }
}
runTests();
