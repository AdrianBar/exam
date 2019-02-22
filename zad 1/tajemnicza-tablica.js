console.log("tajemnicza-tablica.js")
function myFunction() {

    let table = document.getElementById("myTable");

    let word = "";
    for (let row of table.rows) {
        for (let cell of row.cells) {
            console.log(cell.style.color);
            console.log(cell.style.backgroundColor);
            if (cell.style.color === cell.style.backgroundColor) {
                word += cell.innerText;
            }
        }
    }
    console.log(word);
    document.getElementById("result").innerText = word;
}

function newFunc() {

    let table = document.getElementById("myTable");

    let word = "";
    for (let row of table.rows) {
        for (let cell of row.cells) {
            console.log(cell.style.color);
            console.log(cell.style.backgroundColor);
            if (cell.style.color === cell.style.backgroundColor) {
                cell.style.color = "white";
                cell.style.backgroundColor = "black";
            }
            else {
                cell.style.color = "white";
                cell.style.backgroundColor = "white";
            }
        }
    }
}

function lastFunction() {
    let Maintable = document.getElementById("myTable");
    let newtable = [];
    for (let row of Maintable.rows) {
        for (let cell of row.cells) {
            if (cell.style.color === cell.style.backgroundColor) {
                console.log(cell);
                newtable.push(cell.innerText);
            }
            else {
            }
        }
    }
    while (Maintable.hasChildNodes()) {
        Maintable.removeChild(Maintable.lastChild);
    }

    var myTableDiv = document.getElementById("myTable");

    var table = document.createElement('TABLE');
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);

    var tr = document.createElement('TR');
    tableBody.appendChild(tr);

    for (var j = 0; j < newtable.length; j++) {
        var td = document.createElement('TD');
        td.style.color = 'white';
        td.style.backgroundColor = 'black';
        td.appendChild(document.createTextNode(newtable[j]));
        tr.appendChild(td);
    }
    myTableDiv.appendChild(table);
    document.getElementById("first").disabled = true; 
    document.getElementById("second").disabled = true; 

}

