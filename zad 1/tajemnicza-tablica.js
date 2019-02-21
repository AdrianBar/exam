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
            else 
            {
                cell.style.color = "white";
                cell.style.backgroundColor = "white";  
            }
        }
    }
}

function lastFunction() {
    let table = document.getElementById("myTable");
    let newtable;
    let word = "";
    for (let row of table.rows) {
        for (let cell of row.cells) {
            console.log(cell.style.color);
            console.log(cell.style.backgroundColor);
            if (cell.style.color === cell.style.backgroundColor) {
                cell.style.color = "white";
                cell.style.backgroundColor = "black";
                newtable.push(cell);
            }
            else 
            {
                cell.hidden = true;
            }
        }
    }
    table.parentNode.removeChild(table);
    console.log(newtable);
    document.getElementById("myTable") = newtable;
}
