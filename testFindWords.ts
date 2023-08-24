import { input5, input6, output5, output6 } from "./data";
import { findWords } from "./findWords";
import { findWordsAsync } from "./findWordsAsync";
// import { findWordsAsync } from "./findWordsAsync";

const inputs = ["oogd", "apple", "abcd", "edrcrxeiea", input6];

const outputs = [
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
  output6
];

var validWords: string[] = []

outputs.forEach((output)=>{
    validWords = [...validWords, ...output];
})

export const WORDS = validWords;

const eqSet = (xs, ys) =>
    xs.size === ys.size &&
    [...xs].every((x) => ys.has(x));

function testFindWords(input: string, expected: string[]) {
    console.time(input)
  const foundWords = findWords(input);
  console.timeEnd(input);
  if (eqSet(new Set(foundWords), new Set(expected))){
    console.log("PASS");
    
  } else {
    console.log("FAIL");
    console.log("Found Words:", foundWords.sort());
    console.log("Expected Words:", expected.sort());
  }
  

  console.log();
}



function runTests(){
    for (var i = 0; i<inputs.length; i++){
        console.log(`TEST ${i}`);
        testFindWords(inputs[i], outputs[i]);
        
    }
}

runTests()

//   testFindWords("oogd"); // Expected: ["good", "god", "dog", "goo", "do", "go"]
//   testFindWords("apple"); // Expected: ["a", "apple"]
//   testFindWords("abcd"); // Expected: ["a"]
//   testFindWords("edrcrxeiea"); // Expected: ["a", "air", "arc", "are", "car", "care", "ceria", "crar", "ear", "erica", "race", "rae", "rec", "rice"]



// Test case 1
const testInput1 = "qazwsxedcrfvtgbyhnujmikolp";
// Expected Output: ["car", "cat", "rat"]

// Test case 2
const testInput2 = "abcdefghijklmnopqrstuvwxyz";
// Expected Output: ["a", "an", "at", "bat", "can", "cat", "fan", "hat", "mat", "rat", "sat"]

// Test case 3
const testInput3 = "zyxwvutsrqponmlkjihgfedcba";
// Expected Output: ["a", "an", "at", "bat", "can", "cat", "fan", "hat", "mat", "rat", "sat", "z"]

// Test case 4
const testInput4 = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
// Expected Output: ["a", "an", "at", "bat", "can", "cat", "fan", "hat", "mat", "rat", "sat", "z"]

// Test case 5
const testInput5 = "etrsyauiofpwxcvnmdlkjghzbq";
// Expected Output: ["air", "any", "buy", "day", "dog", "egg", "eta", "hat", "high", "man", "mat", "men", "money", "part", "pay", "read", "sad", "sea", "sing", "song", "wear", "year"]

// Test case 6
const testInput6 = "bcoqzylgkmpiuwvexjrnadsthf";
// Expected Output: ["big", "bug", "bus", "buy", "dog", "dug", "fig", "fin", "fun", "gin", "god", "gun", "jug", "kin", "pig", "pin", "sin", "sun", "tin", "tug", "win"]

// Test case 7
const testInput7 = "epnsczgdakyrhmqvblftwxuijo";
// Expected Output: ["bad", "bag", "big", "bud", "bug", "buy", "cab", "cad", "can", "cap", "car", "cat", "dig", "dip", "fad", "fan", "fig", "fin", "fit", "had", "hat", "hug", "hut", "jab", "lap", "lid", "lip", "lit", "map", "mat", "nip", "pad", "pan", "pat", "pit", "pub", "pug", "put", "rap", "rat", "rip", "rub", "run", "tab", "tap", "tar", "tin", "tug"]

// Test case 8
const testInput8 = "lmxnpjqwuvzarsyfedbtghkoci";
// Expected Output: ["aid", "air", "bag", "bat", "bit", "boa", "bot", "box", "bud", "bug", "cab", "cad", "cat", "cod", "cog", "cot", "cub", "cud", "cut", "dad", "did", "dig", "dog", "dot", "dub", "dud", "fad", "fat", "fib", "fig", "fit", "fog", "fox", "fub", "fun", "fur", "gad", "gag", "gat", "gig", "god", "got", "gub", "gum", "gun", "gut", "had", "hat", "hit", "hog", "hot", "hug", "hut", "jab", "jog", "jot", "jug", "jut", "lad", "lag", "lid", "log", "lot", "mad", "mag", "mat", "mid", "mix", "mud", "mug", "nap", "nod", "not", "nub", "nut", "pad", "pat", "pit", "pod", "pot", "pub", "put", "rad", "rag", "rat", "rib", "rig", "rob", "rod", "rot", "rub", "rug", "run", "rut", "sad", "sag", "sat", "sob", "sod", "sot", "sub", "sun", "tab", "tag", "tar", "tax", "tub", "tug", "vat", "wig", "wit", "zag", "zig", "zip"]
