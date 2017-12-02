//make variables for each crystal with a random number between 1 and 12
var crystalRed = Math.floor(Math.random() *21)

var crystalBlue = Math.floor(Math.random() *21)

var crystalGreen = Math.floor(Math.random() *21)

var crystalYellow = Math.floor(Math.random() *21)

//make variable for random number and generate one

var randomNumber = Math.floor(Math.random() * 121)

//make the clicked crystals add together

var crystalTotal = crystalRed + crystalBlue + crystalGreen + crystalYellow 

//if crystalTotal equals randomNumber makes win

if ( crystalTotal === randomNumber );

//else if crystalTotal does not equal randomNumber lose

else if ( crystalTotal !=== randomNumber ); 

//reset score to zero
