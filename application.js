document.addEventListener("DOMContentLoaded", ()=>
{
    let result

    const new_result = document.querySelector("#comp_coloumn")
    const choices = document.querySelectorAll(".selection")

    // score variable
    const user_score = document.querySelector("#user_score")
    const comp_score = document.querySelector("#comp_score")

    // all possibilites for rock-paper-scissors
    const SELECTIONS = [
        {
            name: 'rock',
            emoji: '✊',
            beats: 'scissiors' 
        },
        {
            name: 'paper',
            emoji: '🖐',
            beats: 'rock' 
        },
        {
            name: 'scissiors',
            emoji: '✌️',
            beats: 'paper' 
        }
    ]

    // Check which of the element in the choices have clicked by user 
    choices.forEach(choice => 
    {
        choice.addEventListener('click', () =>
        {
            // array.find() 
            // pass every element from the array into the function to check
            // 回傳第一個滿足所提供之測試函式的元素值。否則回傳 undefined
            result = SELECTIONS.find(value => value.name === choice.id)
            competition(result)
        })
    })

// function that check which choice is winner
function is_winner(choice1, choice2)
{
    return choice1.beats === choice2.name
}

// function for the game
function competition(result)
{   
    // array(SELECTIONS) for computer and user (rock/paper/scissors)
    const comp_choice = comp_random()
    const user_choice = result

    // assign boolean value for winner
    const user_winner = is_winner(user_choice, comp_choice)
    const comp_winner = is_winner(comp_choice, user_choice)

    game_result(comp_choice, comp_winner)
    game_result(user_choice, user_winner)

    if (user_winner)
        add_score(user_score)
    if (comp_winner)
        add_score(comp_score)
}

// add score for winner
function add_score(score)
{
    // take the text inside the html element and change to integer
    // then add 1 to it and then assign back to the html element
    score.innerText = parseInt(score.innerText) + 1
}

// add record for user and computer for each output
function game_result(choice, winner)
{
    const div = document.createElement('div')

    // access the text inside the div and assign the emoji for that choice into div
    div.innerText = choice.emoji
    if (winner)
        // add class for div element
        div.classList.add('result_selection_winner')
    else   
        div.classList.add('result_selectionr')

    // insert after the column
    new_result.after(div)
}

// random select computer choice
function comp_random()
{
    const random = Math.floor(Math.random() * 3)
    return SELECTIONS[random]
}

})