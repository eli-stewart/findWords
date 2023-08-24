"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WORDS = void 0;
var data_1 = require("./data");
var findWords_1 = require("./findWords");
// import { findWordsAsync } from "./findWordsAsync";
var inputs = ["oogd", "apple", "abcd", "edrcrxeiea", data_1.input6];
var outputs = [
    ["good", "god", "dog", "goo", "do", "go"],
    ["ale",
        "ape",
        "app",
        "appel",
        "apple",
        "el",
        "la",
        "lap",
        "lea",
        "leap",
        "pa",
        "pal",
        "pale",
        "palp",
        "pap",
        "pe",
        "pea",
        "peal",
        "pep",
        "plea",
    ],
    [
        "ab",
        "ad",
        "bad",
        "cab",
        "cad",
        "dab",
    ],
    ["ace",
        "aced",
        "acid",
        "acre",
        "acrid",
        "ad",
        "aerie",
        "aerier",
        "ai",
        "aid",
        "aide",
        "aider",
        "air",
        "aired",
        "airer",
        "ar",
        "arc",
        "arced",
        "are",
        "arid",
        "ax",
        "axe",
        "axed",
        "cad",
        "cadre",
        "car",
        "card",
        "carder",
        "care",
        "cared",
        "career",
        "careered",
        "carer",
        "carried",
        "cedar",
        "cede",
        "ceder",
        "cedi",
        "cee",
        "cere",
        "cered",
        "cider",
        "creed",
        "cried",
        "crier",
        "dare",
        "darer",
        "deair",
        "dear",
        "dearer",
        "dearie",
        "decare",
        "decree",
        "decreer",
        "decrier",
        "dee",
        "deer",
        "deice",
        "deicer",
        "dere",
        "dice",
        "dicer",
        "die",
        "dire",
        "direr",
        "drear",
        "drier",
        "ear",
        "eared",
        "eerie",
        "eerier",
        "eider",
        "era",
        "err",
        "erred",
        "ex",
        "exceed",
        "excide",
        "ice",
        "iced",
        "icer",
        "id",
        "ide",
        "idea",
        "ire",
        "ired",
        "race",
        "raced",
        "racer",
        "racier",
        "radix",
        "raid",
        "raider",
        "rare",
        "rax",
        "raxed",
        "re",
        "read",
        "reader",
        "readier",
        "rear",
        "reared",
        "recede",
        "red",
        "reed",
        "reedier",
        "reice",
        "reiced",
        "reread",
        "rice",
        "riced",
        "ricer",
        "rid",
        "ride",
        "rider",
        "xeric",
        "xi",
    ],
    data_1.output6
];
var validWords = [];
outputs.forEach(function (output) {
    validWords = __spreadArray(__spreadArray([], validWords, true), output, true);
});
exports.WORDS = validWords;
var eqSet = function (xs, ys) {
    return xs.size === ys.size &&
        __spreadArray([], xs, true).every(function (x) { return ys.has(x); });
};
function testFindWords(input, expected) {
    console.time(input);
    var foundWords = (0, findWords_1.findWords)(input);
    console.timeEnd(input);
    if (eqSet(new Set(foundWords), new Set(expected))) {
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
    for (var i = 0; i < inputs.length; i++) {
        console.log("TEST ".concat(i));
        testFindWords(inputs[i], outputs[i]);
    }
}
runTests();
//   testFindWords("oogd"); // Expected: ["good", "god", "dog", "goo", "do", "go"]
//   testFindWords("apple"); // Expected: ["a", "apple"]
//   testFindWords("abcd"); // Expected: ["a"]
//   testFindWords("edrcrxeiea"); // Expected: ["a", "air", "arc", "are", "car", "care", "ceria", "crar", "ear", "erica", "race", "rae", "rec", "rice"]
// Test case 1
var testInput1 = "qazwsxedcrfvtgbyhnujmikolp";
// Expected Output: ["car", "cat", "rat"]
// Test case 2
var testInput2 = "abcdefghijklmnopqrstuvwxyz";
// Expected Output: ["a", "an", "at", "bat", "can", "cat", "fan", "hat", "mat", "rat", "sat"]
// Test case 3
var testInput3 = "zyxwvutsrqponmlkjihgfedcba";
// Expected Output: ["a", "an", "at", "bat", "can", "cat", "fan", "hat", "mat", "rat", "sat", "z"]
// Test case 4
var testInput4 = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
// Expected Output: ["a", "an", "at", "bat", "can", "cat", "fan", "hat", "mat", "rat", "sat", "z"]
// Test case 5
var testInput5 = "etrsyauiofpwxcvnmdlkjghzbq";
// Expected Output: ["air", "any", "buy", "day", "dog", "egg", "eta", "hat", "high", "man", "mat", "men", "money", "part", "pay", "read", "sad", "sea", "sing", "song", "wear", "year"]
// Test case 6
var testInput6 = "bcoqzylgkmpiuwvexjrnadsthf";
// Expected Output: ["big", "bug", "bus", "buy", "dog", "dug", "fig", "fin", "fun", "gin", "god", "gun", "jug", "kin", "pig", "pin", "sin", "sun", "tin", "tug", "win"]
// Test case 7
var testInput7 = "epnsczgdakyrhmqvblftwxuijo";
// Expected Output: ["bad", "bag", "big", "bud", "bug", "buy", "cab", "cad", "can", "cap", "car", "cat", "dig", "dip", "fad", "fan", "fig", "fin", "fit", "had", "hat", "hug", "hut", "jab", "lap", "lid", "lip", "lit", "map", "mat", "nip", "pad", "pan", "pat", "pit", "pub", "pug", "put", "rap", "rat", "rip", "rub", "run", "tab", "tap", "tar", "tin", "tug"]
// Test case 8
var testInput8 = "lmxnpjqwuvzarsyfedbtghkoci";
// Expected Output: ["aid", "air", "bag", "bat", "bit", "boa", "bot", "box", "bud", "bug", "cab", "cad", "cat", "cod", "cog", "cot", "cub", "cud", "cut", "dad", "did", "dig", "dog", "dot", "dub", "dud", "fad", "fat", "fib", "fig", "fit", "fog", "fox", "fub", "fun", "fur", "gad", "gag", "gat", "gig", "god", "got", "gub", "gum", "gun", "gut", "had", "hat", "hit", "hog", "hot", "hug", "hut", "jab", "jog", "jot", "jug", "jut", "lad", "lag", "lid", "log", "lot", "mad", "mag", "mat", "mid", "mix", "mud", "mug", "nap", "nod", "not", "nub", "nut", "pad", "pat", "pit", "pod", "pot", "pub", "put", "rad", "rag", "rat", "rib", "rig", "rob", "rod", "rot", "rub", "rug", "run", "rut", "sad", "sag", "sat", "sob", "sod", "sot", "sub", "sun", "tab", "tag", "tar", "tax", "tub", "tug", "vat", "wig", "wit", "zag", "zig", "zip"]
