/***************************** EXAMPLES ******************************/
//OBJECT EXAMPLE
// var epicodusStudent = {
//   firstName: "Charlie",
//   lastName: "Bucket",
//   level: 1,
//   track: ["PHP","JavaScript","Drupal"],
//   enrollmentStatus: true
// };


// CONSTRUCTOR EXAMPLE
// var dog1 = new Dog("Falcor", ["black"], 4);


///////////////// Constructors to be used in chess game /********************/
// Player, Space, Board, and Game





/***************************** BACK END ******************************/
//OBJECT

//THIS IS AN ARRAY
var boardArray = [
  ['x','x','x'],
  ['1','2','3'],
  ['j','k','f']
];

//THIS IS AN OBJECT
var gameBoard = {
  board: boardArray
};


var winner;//to be used for the loop results

//checking rows
for (var col = 0; col < 3; col++) {
    for (var row = 0; row < 3; row++) {

        if (boardArray[row][0] === 'x' && boardArray[row][1] === 'x' && boardArray[row][2] === 'x') {
            winner = "Player X";
        } else {
            winner = "fjdksalfj";
        }

        if (boardArray[row][col] === 'o' && boardArray[row][col] === 'o' && boardArray[row][col] === 'o') {
            winner = "Player O";
        }
    }
}
/*******************  FRONT END (USER INTERFACE) *********************/
