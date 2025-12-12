let txtFirstInput = document.querySelector('#txtFirstInput');
let txtSecondInput = document.querySelector('#txtSecondInput');
let btnFindWord = document.querySelector('#btnFindWord');
let txtOutput = document.querySelector('#txtOutput');

btnFindWord.addEventListener('click',function(){
    let inputStr = txtFirstInput.value.toLowerCase();
    let findWord = txtSecondInput.value.toLowerCase();
    let result = inputStr.search(findWord) !== -1 ? "Found" : "Not Found";
    txtOutput.innerText = result;
    console.log(result);
});