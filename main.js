function doSomething(){
    alert("doSomething");
}
function doSomethingElse(){
    alert("doSomethingElse")
}
function doOnMouseOver(){
    let element = document.getElementById("testButton");
    this.style.display='none'
}
function splitText(){
    let inputElement = document.getElementById("text");
    let content = inputElement.value;
    let words = content.split(" ");
    let outputElement = document.getElementById("output");
    outputElement.innerText = words;
}