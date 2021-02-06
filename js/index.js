function computerPlay(){
    let lsRetval = "";
    let numeroAleatorio = Math.floor(Math.random() * 3); 
    switch (numeroAleatorio) {
        case 1:
            lsRetval = 'Rock';break;
        case 2:
            lsRetval = 'Paper';break;  
        case 3:
            lsRetval = 'Scissors';break;        
        default:
            break;
    }
    return lsRetval; 
}

function playRound(playerSelection, computerSelection) {
    // your code here!
    let lsretval = "";
     if(playerSelection===computerSelection){
        lsretval = "Nobody win because you select:"+playerSelection+" and computer select:"+computerSelection;
        return lsretval; 
    }
     switch (playerSelection) {
        case 'Rock':
             if('Paper'===computerSelection){
                lsretval = "Computer win because you select:"+playerSelection+" and computer select:"+computerSelection;
             }else if('Scissors'===computerSelection){
                lsretval = "Computer win because you select:"+playerSelection+" and computer select:"+computerSelection;
             }
             break;
        case 'Paper':
            if('Rock'===computerSelection){
                lsretval = "You win because you select:"+playerSelection+" and computer select:"+computerSelection;
             }else if('Scissors'===computerSelection){
                lsretval = "Computer win because you select:"+playerSelection+" and computer select:"+computerSelection;
             }
             break;
        case 'Scissors':
            if('Paper'===computerSelection){
                lsretval = "You win because you select:"+playerSelection+" and computer select:"+computerSelection;
             }else if('Rock'===computerSelection){
                lsretval = "Computer win because you select:"+playerSelection+" and computer select:"+computerSelection;
             }
             break;
         default:
             break;
     }
     return lsretval; 
}

const playerSelection = "";
const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));

function game(pPlayerSelection){
    console.log("Entra game");
    let lrplayRound =  playRound(pPlayerSelection, computerSelection);
    console.log(lrplayRound);
    alert(lrplayRound);
    console.log("Sale game");
}

let liPaper = document.getElementById("paper");
let liRock = document.getElementById("rock");
let liScissor = document.getElementById("scissor");

