let humanScore = 0;
let computerScore = 0;

function getHumanChoice(){
    let choice1 = prompt("Rock, Paper, Scissors");
    choice1 = choice1.toLowerCase();
    return choice1;
}


function getComputerChoice(){
    let choice2 = Math.floor(Math.random() * 3);
     console.log(choice2);
     
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
        alert("Tie!");
    }   else if(humanChoice == "rock" && computerChoice =="paper"){
        alert("Computer Wins! +1 ");
        computerScore = computerScore + 1 ;
    }   else if(humanChoice == "rock" && computerChoice =="scissors"){
        alert("Human Wins! +1 ");
        humanScore = humanScore + 1 ;
    }   else if(humanChoice == "paper" && computerChoice =="rock"){
        alert("Human Wins! +1 ");
        humanScore = humanScore + 1 ;
    }   else if(humanChoice == "paper" && computerChoice =="scissors"){
        alert("Computer Wins! +1 ");
        computerScore = computerScore + 1 ;
    }   else if(humanChoice == "scissors" && computerChoice =="rock"){
        alert("Computer Wins! +1 ");
        computerScore = computerScore + 1 ;
    }   else if(humanChoice == "scissors" && computerChoice =="paper"){
        alert("Human Wins! +1 ");
        humanScore = humanScore + 1 ;
    }
    }


while (humanScore != 5 && computerScore != 5) {
    
let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

play(humanChoice, computerChoice);
alert("Score: Human: " + humanScore + "       Computer: " + computerScore + "       Next Round!");

}



if (humanScore>computerScore){
    alert("Human Wins!")

}else{
    alert("Computer Wins!")
}