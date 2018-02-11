// GLOBAL VARIABLES
// *********************************************************************
// Arrays and Variables for hoding data
var targetNumber = 0;
var wins = 0;
var losses = 0;
var total = 0;

// FUNCTIONS (Reusable blocks of code that I will call upon when needed)
// *********************************************************************

var startGame = function () {
    
    // Makes sure crystals are empty before populated
    $(".crystals").empty();

    var images = [
        'assets/images/blue-gem.png',
        'assets/images/pink-gem.png',
        'assets/images/green-gem.png',
        'assets/images/purple-gem.png'
    ];

    // Generates random number between 19 - 120
    // the range is 101 (120-19 = 101), then add 1
    targetNumber = Math.floor(Math.random() * 101) + 19;

    $("#target-title").html('Target Number:');
    $("#target-number").html(targetNumber);

    // Generate the 4 crystal values using for loop 
    for (var i = 0; i < 4; i++) {

        // Generates random number between 1 - 12
        // the range is 11 (12-1 = 11), then add 1
        var crystalValue = Math.floor(Math.random() * 12) + 1;

        // creates each crystal
        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-crystal": crystalValue
            });
            crystal.prepend('<img id="theImg" src="' + images[i] + '" />');
        $(".crystals").append(crystal);

        // testing / debugging
        // console.log(i+1 + " crystal value: " +crystalValue)
    }

        // write the users total to the html
        $("#total-title").html("Your Total:");
        $("#total-number").html(total);
        $("#wins").html("Wins: " + wins);
        $("#losses").html("Losses: " + losses);

    
}

// MAIN PROCESS
// *********************************************************************

// Initialize Game
startGame();

// When user clicks on a crystal
$(document).on('click', ".crystal", function () {

    // Grab the number value of the crystal
    var choice = parseInt($(this).attr('data-crystal'));
    
    // set total equal to choice adding each new crystal clicked
    total += choice;

    // Determine if user won or lost
    // if user lost: update losses counter
    // write counter to html
    // reset total to zero
    // restart game
    if(total > targetNumber){
        losses++;
        $("#losses").html("Losses: " + losses);
        total = 0;
        startGame();

    // if user won: update wins counter
    // write counter to html
    // reset total to zero
    // restart game    
    } else if(total === targetNumber){
        wins++;
        $("#wins").html("Wins: " + wins);
        total = 0;
        startGame();
    }

    // write the users total to the html
    $("#total-title").html("Your Total:");
    $("#total-number").html(total);

});