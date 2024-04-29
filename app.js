const text1 = document.querySelector("#text1");
const text2 = document.querySelector("#text2");
const result = document.querySelector("#result");
const calculateBtn = document.querySelector("#caculateBtn");

// *function to calculate similarity

let calculateSimilarity = (text1, text2) => {
    // *initial the input texts (split into the words)
    const initial1 = text1.split(" ");
    const initial2 = text2.split(" ");

    // *Create sets from the initial to remove duplicates
    const set1 = new Set(initial1);
    const set2 = new Set(initial2);

    // *Calculate the intersection of the sets
    const intersection = new Set([...set1].filter((word) => set2.has(word)));

    // *Calcuate the unioon
    const union = new Set([...set1, ...set2]);

    // *Calculate the Jaccard Similarity
    const similarity = (intersection.size / union.size) * 100;

    // *return result
    return similarity;
}

//* add to click calculate Btn
calculateBtn.addEventListener("click", () => {
    // *Get the values from input fields
    const text1Value = text1.value;
    const text2Value = text2.value;
    const resultAns = calculateSimilarity(text1Value, text2Value);
    result.innerHTML = resultAns.toFixed(2);
})