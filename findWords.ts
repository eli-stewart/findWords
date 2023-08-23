const WORDS = ["good", "god", "dog", "goo", "do", "go", "apple", "a", "air", "arc", "are", "car", "care", "ceria", "crar", "ear", "erica", "race", "rae", "rec", "rice"]; // an array of strings that enumerates all valid English words


function findWords(input: string): string[]{

    const wordSet = new Set(WORDS);
    const solvedSubproblemCache: { [substring: string] : Set<string>} = {};
    

    function unfurlPermutations(permutation: string, input: string){

        const subProblem = solvedSubproblemCache[permutation]
        if (subProblem) return subProblem;

        solvedSubproblemCache[permutation] = new Set();

        for (var i = 0; i < input.length; i++){
            const nextChar = input[i];
            const nextPermutation = permutation + nextChar;

            if (wordSet.has(nextPermutation)) solvedSubproblemCache[permutation].add(nextPermutation);
            
            const nextInput = input.slice(0, i) + input.slice(i + 1);
            const thisBranchWords = unfurlPermutations(nextPermutation, nextInput);
            thisBranchWords.forEach((childWord)=>{
                solvedSubproblemCache[permutation].add(childWord);
            })
            
        }
        return solvedSubproblemCache[permutation];
    }

    const foundWords = Array.from(unfurlPermutations('', input));
        
    return foundWords;
}


function testFindEnglishWords(input: string): void {
    const foundWords = findEnglishWords(input);
    console.log(`Input: "${input}"`);
    console.log("Found Words:", foundWords);
    console.log();
  }
  
  testFindEnglishWords("oogd"); // Expected: ["good", "god", "dog", "goo", "do", "go"]
  testFindEnglishWords("apple"); // Expected: ["a", "apple"]
  testFindEnglishWords("abcd"); // Expected: ["a"]
  testFindEnglishWords("edrcrxeiea"); // Expected: ["a", "air", "arc", "are", "car", "care", "ceria", "crar", "ear", "erica", "race", "rae", "rec", "rice"]