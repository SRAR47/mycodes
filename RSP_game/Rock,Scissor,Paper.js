alert("The Rock, Scissor, Paper game is Starting!");
let score_of_usr = 0
let score_of_bot = 0
let replay = true;


while (replay === true) {
    let cont = 1;
    while (cont <= 3) {
        let num = Math.ceil(Math.random() * 30);
        let bot;

        if (num < 11) {
            bot = "R";
        }
        else if (num < 21) {
            bot = "S";
        }
        else {
            bot = "P";
        }

        let usr = prompt("Enter R,S or P").toUpperCase();
        if (usr !== 'S' && usr !== 'R' && usr !== 'P') {
            alert(" Invalid input! You lose!")
            score_of_bot++;
        }
        else if (usr === bot) {
            alert(`Draw   You:${usr}|bot:${bot}`)
        }
        else if (usr === 'R' && bot === 'P') {
            alert("You lose   You:R|bot:P")
            score_of_bot++;
        }
        else if (usr === 'R' && bot === 'S') {
            alert("You win   You:R|bot:S")
            score_of_usr++;
        }
        else if (usr === 'S' && bot === 'R') {
            alert("You lose   You:S|bot:R")
            score_of_bot++;
        }
        else if (usr === 'S' && bot === 'P') {
            alert("You Win   You:S|bot:P")
            score_of_usr++;
        }
        else if (usr === 'P' && bot === 'R') {
            alert("You Lose  You:P|bot:R")
            score_of_bot++;
        }
        else if (usr === 'P' && bot === 'S') {
            alert("You Lose  You:P|bot:S")
            score_of_bot++;
        }
        cont++;
    }


    if (score_of_bot > score_of_usr) {
        alert(`You Lose!     You:${score_of_usr}|bot:${score_of_bot}`)
    }
    else if (score_of_bot < score_of_usr) {
        alert(`You Win!      You:${score_of_usr}|bot:${score_of_bot}`)
    }
    else {
        alert(`Draw!      You:${score_of_usr}|bot:${score_of_bot}`)
    }


    replay = confirm("Do you want to play again?");
    if (replay === true) {
        score_of_bot = 0;
        score_of_usr = 0;
    }
}