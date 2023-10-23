var btnTranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");

console.log(txtInput);

btnTranslate.addEventListener("click",clickHandler)

function clickHandler(){
    console.log("clickkkkkked");
    console.log("input", txtInput.value);
}