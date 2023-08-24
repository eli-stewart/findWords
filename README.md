# Find English Words

This repository solves the following problem statement:

_Please write a function that accepts a single string as input, and that returns a list of English words that can be created using some combination of the letters in the input string._

```
Example input: "oogd"

Example output: ["good", "god", "dog", "goo", "do", "go"]
```

_You can assume you'll be given an array of strings that enumerates all valid English words. To determine whether a word is a valid word, you can simply check for its presence in the array (e.g., `WORDS.includes(word)`)_

# How to test

Prerequisites: Install node and typescript

1) Open terminal in project directory
2) `tsc testFindWords.ts && node testFindWords.js`

# Files

**findWords.ts**: Contains the solution in exported function findWords.

**testFindWords.ts**: Runs tests on findWords. 

**data.ts**: Contains all input/output data and WORDS for testing

**data.ts**: Utility functions. Only 1 currently
