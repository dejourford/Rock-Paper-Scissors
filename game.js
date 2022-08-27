let game_over = false;

// asking user if they want to play//
let user_play = prompt('Do you want to play a game of Rock,Paper,Scissors? Type "Yes" or "No"').toLowerCase()
if (user_play =="yes")
{
game_over == false;
} 
else  
{
game_over == true;   
}

while (!game_over)
{
    //list possible choices//
    let choices = ["Rock", "Paper", "Scissors"];

    //get cpu choice//
    let cpu_choice = choices[Math.floor(Math.random() * choices.length)].toLowerCase();

    //get user choice//
    let user_choice = prompt('Do you choose Paper, Rock, or Scissors?').toLowerCase()

    //tell user cpu choice and user choice//
    console.log(`The computer chose ${cpu_choice}.`)
    console.log(`You chose ${user_choice}.`)

    //compare both choices//
    //list the draw case//
    if (user_choice == cpu_choice)
    {
    console.log('It\'s a draw!')
    }

    //list ways user can win//
    else if (user_choice == "paper" && cpu_choice == "rock")
    {
        console.log('User Wins!')
    }
    else if (user_choice == "rock" && cpu_choice == "scissors")
    {
        console.log('User Wins!')
    }
    else if (user_choice == "scissors" && cpu_choice == "paper")
    {
        console.log('User Wins!')
    }

    //list ways cpu can win//
    else if (cpu_choice == "paper" && user_choice == "rock")
    {
        console.log('You Lose!')
    }
    else if (cpu_choice == "rock" && user_choice == "scissors")
    {
        console.log('You Lose!')
    }
    else if (cpu_choice == "scissors" && user_choice == "paper")
    {
        console.log('You Lose!')
    }


    //ask user if they want to play again//
    let play_again = prompt('Do you want to play again? Type "Yes" or "No".').toLowerCase()
    if (play_again == "yes")
    {
    game_over == false;
    }
    else 
    {
    game_over == true;  
    }
}