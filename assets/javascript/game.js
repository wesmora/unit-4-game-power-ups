var randomNum =[];
var losses = [];
var wins = [];
var starNum = [];
var mushroomNum = [];
var flowerNum = [];
var coinNum = [];
var totalScore = 0;


$(document).ready(function() {

    randomNum = Math.floor((Math.random() * 100) + 20);
    $("#score-card").text(randomNum);
    
    starNum = Math.floor((Math.random() * 12) +1)
    mushroomNum = Math.floor((Math.random() * 12) +1)
    flowerNum = Math.floor((Math.random() *12) +1)
    starNum = Math.floor((Math.random() * 12) +1)
    console.log(randomNum);

    function ifElse() {
        if (totalScore === randomNum) {
        wins++;
        $("#wins").text("wins: " + wins);
        } else if (totalScore > randomNum) {
        losses++;
        $("#losses").text("losses: " + losses);
    
    }




    

    
    function reset(){     
        randomNum = Math.floor((Math.random() * 100) + 20);
        $("#score-card").text(randomNum);
        starNum = Math.floor((Math.random() * 12) + 1)
        mushroomNum = Math.floor((Math.random() * 12) + 1)
        flowerNum = Math.floor((Math.random() * 12) + 1)
        starNum = Math.floor((Math.random() * 12) + 1)
        console.log(randomNum);
    }

    $("#powerImage1").click(function() {
        totalScore = starNum + totalScore;
        $("#score").text("Score Counter: " + totalScore);
        ifElse();
        console.log(totalScore);
        
        });


    $("#powerImage2").on("click", function() {
        totalScore = mushroomNum + totalScore;
        $("#score").text("Score Counter: " + totalScore);
        ifElse();
        console.log("powerImage2")
        });


    $("#powerImage3").click(function() {
        totalScore = flowerNum + totalScore;
        $("#score").text("Score Counter: " + totalScore);
        ifElse();
        console.log("powerImage3")
        });
    

    $("#powerImage4").click(function() {
        totalScore = coinNum + totalScore;
        $("#score").text("Score Counter: " + totalScore);
        ifElse();
        console.log("powerImage4")
        });

    }
});

//game will have 4 power ups and random results
//every powerup needs to have a random number asigned to it.
// number needs to be generated every time player wins or losses to each power up
// when clicking a power up it should add the total of all power ups clicked 
    // untill player either wins or losses
//then game starts all over
//game score increments either a point to win or point to lose
