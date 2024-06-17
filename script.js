let buttonOne = document.querySelector(".button-one");
let commentOne = document.querySelector(".comment-one");
let commentTwo = document.querySelector('.comment-two');
let commentThree = document.querySelector('.comment-three');


buttonOne.addEventListener("click", function() {
    // 1. Declare a variable named spidyCaption.
    //  - Store the value of the input with a class of "comment-one".
    let spidyCaption = commentOne.value;

    // 2. Display the variable spidyCaption to captionOne
    
    document.querySelector('.caption-one').innerHTML = spidyCaption;

});

// 3. Repeat the previous steps for the second meme.
//  - Be sure to store variables for the button and caption.
let buttonTwo = document.querySelector('.button-two');

buttonTwo.addEventListener("click", function () {
    let kermitCaption = commentTwo.value;

    document.querySelector(".caption-two").innerHTML = kermitCaption;
})