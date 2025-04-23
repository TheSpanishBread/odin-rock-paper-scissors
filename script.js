//initialize starting scores
let humanScore = 0;
let computerScore = 0;
let humanChoice = "";
let computerChoice = "";
let gameover = false;
///hide table unless game is started
const table = document.querySelector("#table");
table.style.display = "none";
const confirmation = document.querySelector("#confirmation");
const start = document.querySelector("#start");
const hscore = document.querySelector("#human-score");
const cscore = document.querySelector("#computer-score");
const choice = document.querySelector("#choice");
const announcement = document.querySelector("#announcement");


start.addEventListener("click", function(){

    ///display hide unhide
    table.style.display = "flex";
    confirmation.style.display = "none";
    //display scores
    hscore.textContent = humanScore;
    cscore.textContent = computerScore;
    announcement.textContent = "START!";

    choice.addEventListener("click", (e) =>{

        let target = e.target;
        switch (target.id) {
            case "rock":
                humanChoice = "rock";
                break;
            case "paper":
                humanChoice = "paper";
            break;
            case "scissors":
                humanChoice = "scissors";
            break;
        
            default:
                break;
        }
        let computerChoice = getComputerChoice();
        play(humanChoice, computerChoice);
        ///update scores
        hscore.textContent = humanScore;
        cscore.textContent = computerScore;
        ////*Check who wins
        if (humanScore == 5){
            announcement.textContent = "Human Wins! No AI Take over in the near future! ";
            e.stopPropagation();
            humanScore = 0;
            computerScore = 0;
        
        }else if(computerScore == 5){ 
            announcement.textContent = "Computer Wins! AI has taken over the world! ";
            e.stopPropagation();
            humanScore = 0;
            computerScore = 0;
        }

    });

    
});


///////functions



function getComputerChoice(){
    let choice2 = Math.floor(Math.random() * 3);
        
    switch (choice2) {
        case 0:
            choice2 = "rock" ;
            return choice2;
        break;
        case 1:
            choice2 = "paper";
            return choice2;
        break;
        case 2:
            choice2 = "scissors"
            return choice2;
        break;
    
        default:
            break;
    }
}

function play(humanChoice, computerChoice){
    if (humanChoice == computerChoice){
        announcement.textContent = "TIE";
    }   else if(humanChoice == "rock" && computerChoice =="paper"){
        announcement.textContent = "Computer Wins! +1 ";
        computerScore = computerScore + 1 ;
    }   else if(humanChoice == "rock" && computerChoice =="scissors"){
        announcement.textContent = "Human Wins! +1 ";
        humanScore = humanScore + 1 ;
    }   else if(humanChoice == "paper" && computerChoice =="rock"){
        announcement.textContent = "Human Wins! +1 ";
        humanScore = humanScore + 1 ;
    }   else if(humanChoice == "paper" && computerChoice =="scissors"){
        announcement.textContent = "Computer Wins! +1 ";
        computerScore = computerScore + 1 ;
    }   else if(humanChoice == "scissors" && computerChoice =="rock"){
        announcement.textContent = "Computer Wins! +1 ";
        computerScore = computerScore + 1 ;
    }   else if(humanChoice == "scissors" && computerChoice =="paper"){
        announcement.textContent = "Human Wins! +1 ";
        humanScore = humanScore + 1 ;
    }
    }
