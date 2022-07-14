window.addEventListener("load" , init);

const randomWord = ["river" , "jack" , "cute" , "great" , "man" , "english" , "javascript" , "Baby" , "cool" , "discovered" , "sentence" , "someone" , "feeling"];
const input = document.querySelector("input");
const result = document.querySelector(".result");
const scoreDisplay = document.querySelector(".score");
const timeDisplay = document.querySelector(".time-left");
const word = document.querySelector(".word");

let message = "";
let time = 6;
let score = 0;
let isPlaying;

scoreDisplay.innerText = `Score: ${score}`;


function selectWord(words){
    let system = randomWord[Math.floor(Math.random() * randomWord.length)]
    word.innerText = system;
}
function timeD(){
    setInterval(() => {
        if(time > 0){
            time--;
            timeDisplay.innerHTML = `Time Left : ${time}`
            isPlaying = true;
        }else if(time === 0){
            isPlaying = false;
            result.innerText = "Game Over !!!"
        }
    } , 1000)
}
input.addEventListener("input" , matchFucntion);

function matchFucntion(){
    if(CheckIfCorrect()){
        isPlaying =true;
        time = 6;
        selectWord(randomWord);
        input.value = "";
        score++;
    }
    if(score === -1){
        scoreDisplay.innerHTML = `Score : 0`;
    }
    else{
        scoreDisplay.innerHTML = `Score : ${score}`;
    }
}
function CheckIfCorrect(){
    if(input.value === word.innerText){
        result.innerText = "Correct !!"
        return true;
    }else{
        result.innerText = "";
        return false;
    }
}
function CheckStatus(){
    if(!isPlaying && time === 0){
        result.innerHTML = "Game Over !!!"
        score = -1;
    }
}

function init(){
    //Select random word with system
    selectWord(randomWord);
    // time Decerise
    timeD()
    //CheckStatus
    CheckStatus();
    // Interval for calling the function
    setInterval(CheckStatus ,50);
}