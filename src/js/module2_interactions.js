function setEventListeners(){
    var figures = document.querySelectorAll(".figure");

for(var item of figures){
    item.addEventListener("click", showPossibleMoves)
}

document.addEventListener("click", function(event){ //znikamy zielone pola jak klikniemy obok

   if(event.target.closest(".possible_move")){ //w tego ifa wchodzimy tyko jak jestesmy na zielonym

    var row = +event.target.closest(".row").getAttribute("row");
    var col = +event.target.closest(".field").getAttribute("col");
    moveFigure(event.target.closest(".possible_move"));
    //robimy move

   } else {
        hideAllPossibleMove();
   }

});

}

function moveFigure(moveToField){
var fromCol = moveToField.dataset.fromCol;
var fromRow = moveToField.dataset.fromRow;
var figure = findField(fromCol, fromRow).querySelector(".figure");

moveToField.firstChild.appendChild(figure);
hideAllPossibleMove();

}

function hideAllPossibleMove(){
    var items = document.querySelectorAll(".possible_move");
    for (var item of items){
        item.classList.remove("possible_move");
    }
}

function showPossibleMoves(event){
    event.stopPropagation(); //event sie zatrzymuje

    var clickedFigure = event.target;
    var col = +clickedFigure.closest(".field").getAttribute("col"); //plus z przodu click zamienia na liczbę, a !! nie zaprzecza eg. !! "false" return true , bo zwraaca odp na to czy jest czy nie jest pusty string
    var row = +clickedFigure.closest(".row").getAttribute("row");

    //najbizszy przodek pola  ktory ma .figure
    //sprawdzamy czy sheep czy wolf -sheep mze tylko do gory , woldf w dol. target sprawdzaczy owca czy wilk . ma klase

    //wyliczamy row

    var newrow = clickedFigure.classList.contains("wolf") ? row-1: row+1; 
    var col_left = col-1;
    var col_right = col+1;

    //sprawdzamy czy nie wychodzi poza zakres
    if(newrow < 1 || newrow > 8){
        return;

    }

    //wyliczamy nowe pole

    if (col_left > 0 && col_left < 9) { //sprawdzamy czy iesci sie w planszy

        if(isFieldEmpty(col_left, newrow)){
            var field = findField(col_left, newrow);
            field.classList.add("possible_move");
            field.dataset.fromCol = col;
            field.dataset.fromRow = row;
            
        }

      
    }

    if(col_right > 0 && col_right < 9){
        if(isFieldEmpty(col_right, newrow)){
            var field = findField(col_right, newrow);
            field.classList.add("possible_move");
            field.dataset.fromCol = col;
            field.dataset.fromRow = row;
        }


    }
}

function isFieldEmpty(col,row) {
    return !findField(col,row).querySelector(".figure");

};