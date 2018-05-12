var randomNum =[];
var losts = [];
var wins = [];
var starNum = [];
var mushroomNum = [];
var flowerNum = [];
var starNum = [];
var totalScore = 0;



function ifElse() {
    if (totalScore ===randomNum) {
        wins++;
        $("#wins").text("wins: " + wins);
    } else if (totalScore > randomNum) {
        losts
    
}


$(document).ready(function(){

    // function reset() {

    randomNum =Math.floor((Math.random() * 100) + 20);
    $("#randNum").text(randomNum);
    console.log(randomNum);
    starNum = Math.floor((Math.random() * 12) +1)
    mushroomNum = Math.floor((Math.random() * 12) +1)
    flowerNum = Math.floor((Math.random() *12) +1)
    starNum = Math.floor((Math.random() * 12) +1)

     {
         randomNum =Math.floor((Math.random() * 100) + 20);
        $("#randNum").text(randomNum);
        console.log(randomNum);
        starNum = Math.floor((Math.random() * 12) +1)
        mushroomNum = Math.floor((Math.random() * 12) +1)
        flowerNum = Math.floor((Math.random() *12) +1)
        starNum = Math.floor((Math.random() * 12) +1)
    }

    




});

// for(var i = 0; i < 4; i++){
//     var random = Math.floor (Math.random() * 12)
//         console.log (random)
//     var mariopowerupcontai = $("<div>") 
//     mariopowerupcontaier.attr("class", ".powerImage1, .powerImage2, .powerImage3, .powerImage4"); 

//     $("mariopowerupcontaier").append(powerImage1, powerImage2, powerImage3, powerImage4):



//game will have 4 power ups and random results
//every powerup needs to have a random number asigned to it.
// number needs to be generated every time player wins or losses to each power up
// when clicking a power up it should add the total of all power ups clicked 
    // untill player either wins or losses
//then game starts all over
//game score increments either a point to win or point to lose

//Hello//
