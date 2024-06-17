let submitButton = document.querySelector(".submit");
let results = document.querySelector(".results");

submitButton.addEventListener("click", function() {
    results.style.display = "block";
    let myName = document.querySelector(".my-name").value;
    let mood = document.querySelector(".mood").value;
    let food = document.querySelector(".food-name").value;
    let birthYear = document.querySelector(".year").value;
    let age = 2023 - birthYear; // update to 2024, if necessary
    // 1. Declare a variable to save the value of the city the user is from.
    let fromCity = document.querySelector('.city').value;
    // 2. Below write your sentences!
    // - Have them show up in the div with class "results".
    // - Example paragraph: "My name is (myName). I'm feeling (mood) and I absolutely lovveeee eating (food) 😍..."
    // - Try placing your sentences into <p> or <li> tags.

    var p1 = "<p>Test</p>" + (myName) + " " + (mood) + (food) + (birthYear) + (age) + (fromCity);
    
    document.querySelector('.results').innerHTML = "Hello there! My name is " + myName + "And welcome to this world!" + "I hear your favorite foods are " + food + "Oh? You are feeling " + mood;


});