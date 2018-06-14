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


//checking rows
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < boardArray.length; j++) {

        if (boardArray[i][0] == 'x' && boardArray[i][1] == 'x' && boardArray[i][2] == 'x') {
            winner = "Player X";
        } else {
            winner = null;
        }

        if (boardArray[i][0] == 'o' && boardArray[i][1] == 'o' && boardArray[i][2] == 'o') {
            winner = "Player O";
        } else {
            winner = null;
        }
    }
}
/*******************  FRONT END (USER INTERFACE) *********************/
