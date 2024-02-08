let user =0;
let computer =0;

const userScore = document.querySelector('#user');
const computerScore = document.querySelector('#computer');
const msg = document.querySelector('#message');

const choices = document.querySelectorAll('.imge')

const comChoice = () =>{
    const option = ["Paper" , "Rock" , "Sessore"];
    const randInd = Math.floor(Math.random()*3);
     return option[randInd];
}

choices.forEach((imge)=>{
    const userChoice = imge.getAttribute("id");
    imge.addEventListener("click",()=>{
        // console.log("User is Click " , userChoice);
        const computerChoice = comChoice();
        // console.log("Computer is Click " , computerChoice);

        if(userChoice === computerChoice)
        {
            // console.log("Game is Draw ");
            msg.innerText = " Game is Draw. Please Try Again ";
            msg.style.backgroundColor = "navy";
            msg.style.color = "white";
        }
        else
        {
            let userWin = true;
            if(userChoice === "Rock")
            {
                if(computerChoice==="Paper")
                {
                    // console.log("Computer is Win " , computerChoice);
                    userWin=false;
                    computer++;
                    computerScore.innerText = computer;
                }
                else
                {
                    // console.log("User is Win" , userChoice);
                    user++;
                    userScore.innerText = user;
                }
            }
            else if(userChoice === "Paper")
            {
                if(computerChoice === "Sessore")
                {
                    // console.log("Computer is Win " , computerChoice);
                    userWin = false;
                    computer++;
                    computerScore.innerText = computer;
                }
                else
                {
                    // console.log("User is Win " , userChoice);
                    user++;
                    userScore.innerText = user;
                }
            }
            else if(userChoice === "Sessore")
            {
                if(computerChoice === "Rock")
                {
                    // console.log("Computer is Win " , computerChoice);
                    userWin = false;
                    computer++;
                    computerScore.innerText = computer;
                }
                else
                {
                    // console.log("User is Win " , userChoice);
                    user++;
                    userScore.innerText = user;
                }
            }
            else
            {
                console.log("Invalid Choice");
            }
            if(userWin)
            {
                msg.innerText = `You Win ! ${userChoice} beates ${computerChoice}`;
                msg.style.backgroundColor = "green";
                msg.style.color = "white";
            }
            else
            {
                msg.innerText = `You Loss ! ${userChoice} beates ${computerChoice}`;
                msg.style.backgroundColor ="red";
                msg.style.color = "white";
            }

        }

        
    })
})