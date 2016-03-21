// // // // // wait for DOM to load before running JS

 $(document).ready(function(){
     var turn = 2;
     var boxCells= ["#box-1","#box-2","#box-3","#box-4","#box-5","#box-6","#box-7","#box-8","#box-9"];
     var playerCell = 1;
     var playerOne = "X";
     var playerTwo = "O";

   if(playerCell === 1) {
     $(".box").on("click", function playerPlays(event){
       if(turn%2===0){
         if(!$(this).text()){
           $(this).text("X");
           turn += 1;
           playerCell += 1;
         }
       }
       else{
         if(!$(this).text()){
           $(this).text("O");
           turn+=1;
           playerCell+=1;
         }
       }
 });
 function checkForWinner(move){
   var result = false;
   if (checkRox(1,2,3, move) ||
       checkRow(4,5,6, move) ||
       checkRow(7,8,9, move) ||
       checkRow(1,4,7, move) ||
       checkRow(2,5,6, move) ||
       checkRow(3,6,9, move) ||
       checkRow(1,5,9, move) ||
       checkRow(3,5,7, move) ||
   }
     return result;
 }
 function checkRow(a, b, c, move) {
   var result= false;
   if(getBox(a) == move && getBox(b) == move && getBox(c) == move){
   }
   reutrn result();
 }
 function getBox(number) {
   reutrn document.getElementbyId(number).innerText(){
 }

  $boxes.on('click', function() {
    if($(this).text() === ""){

    }
  });

//  $(document).ready(function(){
//   // newGame();
//  var $boxes = $('.box');
//   var turn = "X";
//   var moves = 0;
//
//   function resetGame() {
//     $boxes.text("");
//     $boxes.removeClass("X");
//     $boxes.removeClass("O");
//
//   turn = "X";
//   moves = 0;
// }
//
// }
//   function switchTurn() {
//     if(turn === "X") {
//       turn = "O";
//     } else {
//       turn = "X";
//     }
//  }
//
// function allThree($box-1, $box-2, $box-3) {
//   var firstBoxOwner = $box1.text(), secondBoxOwner = $box2.text(), thirdBoxOwner = $box3.text();
//   if((firstBoxOwner === secondBoxOwner) && (secondBoxOwner === thirdBoxOwner)){
//     if (firstBoxOwner === "X") {
//       return "X";
//     } else if (firstBoxOwner === "O"){
//   }
// }
//   return null;
// }
// function diagonalWinner() {
//   var leftDownDiag = allThree($box.eq(1), $box.eq(5), $box.eq(9));
//   var rightUpDiag = allThree($box.eq(3), $box.eq(5), $box.eq(8));
//   return leftDownDiag || rightUpDiag;
// };
// function columnWinner() {
//   var leftCol = allThree($box.eq(1), $box.eq(4), $box.eq(7));
//   var middleCol = allThree($box.eq(2), $box.eq(5), $box.eq(8));
//   var rightCol = allThree($box.eq(3), $box.eq(6), $box.eq(9));
//   return leftCol || (middleCol || rightCol);
// }
// function rowWinner() {
//   var topRow = allThree($box.eq(1), $box.eq(2), $box.eq(3));
//   var middleRow = allThree($box.eq(4), $box.eq(5), $box.eq(6));
//   var bottomRow = allThree($box.eq(7), $box.eq(8), $box.eq(9));
//   return topRow || (middleRow || bottomRow);
// }
// function getWinner(){
//   return diagonalWinner() || (rowWinner() || columnWinner());
// }
// $('#reset').on('click', function()){
//   resetGame();
// }
// $boxes.on('click', function()){
//   if ($(this).text() === ""){
//   }
//
//   $(this).text(turn);
//   $(this).addClass(turn);
//   moves += 1;
//
//   var winner = getWinner();
//   if(winner) {
//   alert('Player' + winner + "won!");
//   resetGame();
//   } else if (moves < 9){
//     changeTurn();
//   }else{
//   alert("neither player won!");
//   }
//   }
//   });
