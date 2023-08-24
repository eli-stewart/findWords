import { findWords } from "./findWords";
import { inputs, outputs } from "./data";
import { eqSet } from "./utils";

function testFindWords(
  input: string,
  expected: string[],
  disableTrie?: boolean
) {
  console.time(input);
  const foundWords = findWords(input, disableTrie);
  console.timeEnd(input);
  if (eqSet(new Set(foundWords), new Set(expected))) {
    console.log("PASS");
  } else {
    console.log("FAIL");
    console.log("Found Words:", foundWords.sort());
    console.log("Expected Words:", expected.sort());
  }
  console.log();
}

function runTests() {
  for (var i = 0; i < inputs.length; i++) {
    console.log(`TEST ${i} - with Trie`);
    testFindWords(inputs[i], outputs[i]);
    if (inputs[i].length < 15) {
      console.log(`TEST ${i} - without Trie`);
      testFindWords(inputs[i], outputs[i], true);
    }
  }
}

runTests();
