function createField(color, colNumber) {
    var field = document.createElement("div");
    field.classList.add("field", color); //dodanie klasy ydo dokumentu
    field.setAttribute("col", colNumber);

    var fieldInside = document.createElement("div");
    fieldInside.classList.add("field-inside");

    field.appendChild(fieldInside); //doczepia diva wew pierwszego

    return field;
}

function createRow (rowNum){
    
    var row = document.createElement("div");
    row.classList.add("row");

    row.setAttribute("row",rowNum); //dla jednego rowa jeden atrybut

    for(var i = 1; i < 9; i++){ //zmienilismy z 0 i 8 na 1 9 , aby iterowac od 1 czyli jesem na pou 1 2 a nie 0 1;
        var color = (i + (rowNum % 2))% 2  ? "white" : "black"; //robi naprzemiennie kolor ,ale nalezy w field dodatc parametr color oraz row
        var field= createField(color, i); //nr petli

        row.appendChild(field); // dorzuca na koniec wszystkich dzieci

    }
    
    return row;
}

function drawChessBoard(){
    var board = document.getElementById("board"); //"trzymamy w ręku"

    for(var i = 8; i>0; i--){ //od 1 dlatego, ze zaczniemy od jasnego koloru ( i 8 i >0 i-- wiec tu zaczynamy od 8 na górze i zamieniamy black and white)
        var row = createRow(i);
        board.appendChild(row); //nie potrzebny return
    }

} //do tego momentu nie widac tablicy

function createFigure(animalName){ //dodalismy zwierzątka do boardu
    var figure = document.createElement("div");
    figure.classList.add("figure", animalName);
    return figure;
}

//pon funkcja ktora znajdudje pole

function findField(col,row) {
   /* var row = document.querySelector(`[row =" ${row}"]`);  //$zmienna powinnam zmienic nazwe zmiennej 
    //szukamy fielda
    var field =row.querySelector (`[col =" ${col}"]`); //ale tutaj zawęzamy do row row.query...*/
    var field = document.querySelector(`[row ="${row}"] [col ="${col}"]`);

    return field;
}

//tworzy figure i ją ustawia na planszy

function placeFigure(figureName, col,row){
    var field = findField(col,row);
    var figure = createFigure(figureName);
    field.firstChild.appendChild(figure);
}

