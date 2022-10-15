"use strict";

// edit the container
let divContainer = document.querySelector("#container");

let rowCount = 16;
let colCount = 16;

let btnSelect = document.querySelector("#btnSelect");

// generate a random color
// function changeColor () {
//     let r = rndBetween(0, 255);
//     let g = rndBetween(0, 255);    
//     let b = rndBetween(0, 255);
//     this.style.backgroundColor = `rgb(${r},${g},${b})`;
// }

// increase blackness (opacity) by 10%
function changeColor () {
    this.style.backgroundColor = "black";
    let op = parseFloat(this.style.opacity);
    if (isNaN(op)) {
        op = 0.0;
    }
    op += 0.1;
    this.style.opacity = op.toFixed(1);
}

function rndBetween (min, max) {
    let i = Math.floor(Math.random()*(max-min+1));
    return i;
}

function selectDim () {
    do {
        rowCount = prompt("Please enter a number of rows");
        if (rowCount === null) {
            return;
        }
        rowCount = parseInt(rowCount);
    } while (rowCount > 100 || typeof rowCount !== "number");
    do {
        colCount = prompt("Please enter the number of boxes in a row");
        if (colCount === null) {
            return;
        }
        colCount = parseInt(colCount);
    } while (colCount > 100 || typeof colCount !== "number");
    divContainer.innerHTML = "";
    for (let r = 1; r <= rowCount; r++) {
        let divRow = document.createElement("div");
        divRow.style.cssText = "display: flex; flex-flow: row nowrap";
        divRow.style.outline = "1px solid black";
        divRow.style.height = "50px";
        divRow.style.flex = "1 1 auto";
        divContainer.appendChild(divRow);
        for (let i = 1; i <= colCount; i++) {
            let divItem = document.createElement("div");
            divItem.style.cssText = "flex: 1 1 auto";
            divItem.style.outline = "1px solid black";
            divItem.style.transition = "all 0.5s";
            divItem.addEventListener("mouseover", changeColor);
            divRow.appendChild(divItem);  
        }
        
    }
}

divContainer.style.cssText = "display: flex; flex-flow: column nowrap;";

btnSelect.addEventListener("click", selectDim);
