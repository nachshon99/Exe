function showExe(){
    let firstNum = randomNum();
    let secondNum = randomNum();
    document.getElementById("firstNumber").innerText = firstNum.toString();
    document.getElementById("secondNumber").innerText = secondNum.toString();

}
function randomNum(){
    return Math.ceil(Math.random()*10);
}
function checkAnswer(){
    let firstNum = document.getElementById("firstNumber").innerText;
    let secondNum = document.getElementById("secondNumber").innerText;
    let actualResult = Number(firstNum) + Number(secondNum);
    let userInput = document.getElementById("userInput").value;
    let textScore = document.getElementById("score").innerText.split(" ");
    if (actualResult ==  userInput){
        document.getElementById("userInput").value = "";
        showExe();
        let score = Number(textScore[1]) + 1;
        document.getElementById("score").innerText = textScore[0] + " " + score;
    }
    else {
        alert("Wrong!")
        let score = Number(textScore[1]) - 5;
        document.getElementById("score").innerText = textScore[0] + " " + score;
    }

}