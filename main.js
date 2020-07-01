var planets = [ //makes an array, planets, and adds planet names along with gravity modifier
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
];

console.log("Hello world"); //Shows the code is working properly if you see this in console

planets.forEach(dropDown);
//Populates the dropdown menu with planets in the regular order
//Calls the dropDown function for each element of the planets array

// for(var i = planets.length - 1; i >= 0; i--) {
//     dropDown(planets[i], i);
// } 
//If you want to reverse the dropdown menu for the BONUS CHALLENGE
//planets[i] is the current element
//i is the index

function dropDown(element, _index){
    var plan = planets[_index][0] //Assigns the planet name to variable plan
    var select = document.getElementById("planets"); //assigns planets dropdown element to select
    var option = document.createElement("option"); //creates new option element
    option.value = plan; //gives the option element a value of the planet name
    option.textContent = plan; //allows option element to display planet name
    select.appendChild(option); //appends the value and text of each option element to the dropdown menu
}


function calculateWeight(weight, planetName) {
    var result = 0; //Just in case. If it prints 0, something is wrong
    for(var i = 0; i < planets.length; i++) { //Goes through the planets array from 0 to array length
        if(planetName == planets[i][0]) { //if the array element matches the chosen planet from dropdown
            result = weight * planets[i][1];//then calculate the weight, userweight * planet gravity modifier
        }
    }
    return result; //returns the calculated weight
}

var button = document.getElementById("calculate-button"); //assigns the "calculate-button" button to var button

button.onclick = function handleClickEvent(e) { //when you click the calculate button, execute this function
    var result = 0; //just in case. If it prints 0, something is wrong
    var userWeight = document.getElementById("user-weight").value; //assigns the user input value to userWeight
    var planetName = document.getElementById("planets").value; //assigns the user's chosen planet to planetName
    result = calculateWeight(userWeight, planetName); //calculates the new user weight on planet and assigns to result
    var message = "If you were on " + planetName + ", you would weigh " + result + "lbs!"; //stores the display message to variable message
    document.getElementById("output").innerHTML = message; //finds the element with id "output" in html page and displays message within that element
    console.log(result); //just displays result in console for some feedback to developer
}




// 8. Make it look nice by attaching  a style.css file to your index.html and writing some basic styling,
// feel free to add classes and id's to the HTML elements as you need,
// import.a google font and use it for some or all of the text on your page.