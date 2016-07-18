/*****************************************************************************
** Filename: script.js
** Author: Christopher Capps
** Date: July 16th, 2016
** Description: A JavaScript file that will create the content of index.html 
** and append it to the body. The script also gives functionality to some 
** buttons to change the highlighting of certain table cells.
*****************************************************************************/

var selectTableCell = function(cell) {
	document.getElementById(cell).className = "selected";
} 

var removeSelectedTableCell = function(cell) {
	document.getElementById(cell).className = "";
}

var getSelectedCell = function() {
	var selectedCell = document.getElementsByClassName("selected");
	return Number(selectedCell[0].id);
}

var moveUp = function() {
	var cell = getSelectedCell();
	if (cell === 1 || cell === 2 || cell === 3 || cell === 4) {
		// do nothing
		console.log("You are already at the top.");
	} else {
		removeSelectedTableCell(cell);
		cell -= 4;
		selectTableCell(cell);
	} 
}

var moveDown = function() {
	var cell = getSelectedCell();
	if (cell === 13 || cell === 14 || cell === 15 || cell === 16) {
		// do nothing
		console.log("You are already at the bottom.");
	} else {
		removeSelectedTableCell(cell);
		cell += 4;
		selectTableCell(cell);
	} 
}

var moveRight = function() {
	var cell = getSelectedCell();
	if (cell === 4 || cell === 8 || cell === 12 || cell === 16) {
		// do nothing
		console.log("You are already all the way right.");
	} else {
		removeSelectedTableCell(cell);
		cell += 1;
		selectTableCell(cell);
	} 
}

var moveLeft = function() {
	var cell = getSelectedCell();
	if (cell === 1 || cell === 5 || cell === 9 || cell === 13) {
		// do nothing
		console.log("You are already all the way left.");
	} else {
		removeSelectedTableCell(cell);
		cell -= 1;
		selectTableCell(cell);
	} 
}

var mark = function() {
	var highlight = document.getElementsByClassName("selected");
	
	highlight[0].style.backgroundColor = "yellow";
}

// add a 4x4 table
var newTable = document.createElement("table");

// 4 header cells reading Header 1, Header 2, ... Header 4
var tableHead = document.createElement("thead");

for (var i = 1; i < 5; i++) {
	var tableHeaderCells = document.createElement("th");
	var text = document.createTextNode("Header " + i);
	tableHeaderCells.appendChild(text);
	tableHead.appendChild(tableHeaderCells);
}

newTable.appendChild(tableHead);

var tableBody = document.createElement("tbody");

// non-header cells contain their position 1,1; 1,2; 2,1; etc...
var index = 1; 

for (var k = 1; k < 5; k++) {
	var tableRow = document.createElement("tr");
	
	for (var j = 1; j < 5; j++) {
		var tableCell = document.createElement("td");
		var tableText = document.createTextNode(j + "," + k);
		tableCell.appendChild(tableText);
		tableRow.appendChild(tableCell);
		tableRow.children[j - 1].id = index;
		index++; 
	}
	
	newTable.appendChild(tableRow);
}

newTable.appendChild(tableBody);

document.body.appendChild(newTable);

// Inserting a line break for better readability
var lineBreak = document.createElement("br");
document.body.appendChild(lineBreak);

// 4 directional buttons (up, down, left, and right)
var upButton = document.createElement("button");
upButton.textContent = "Up";
upButton.id = "upButton";
document.body.appendChild(upButton);

var downButton = document.createElement("button");
downButton.textContent = "Down";
downButton.id = "downButton";
document.body.appendChild(downButton);

var leftButton = document.createElement("button");
leftButton.textContent = "Left";
leftButton.id = "leftButton";
document.body.appendChild(leftButton);

var rightButton = document.createElement("button");
rightButton.textContent = "Right";
rightButton.id = "rightButton";
document.body.appendChild(rightButton);

// Inserting a double line break for better readability
var lineBreak2 = document.createElement("br");
document.body.appendChild(lineBreak2);
var lineBreak3 = document.createElement("br");
document.body.appendChild(lineBreak3);

// button labeled "Mark Cell"
var markCellButton = document.createElement("button");
markCellButton.textContent = "Mark Cell";
markCellButton.id = "markButton";
document.body.appendChild(markCellButton);

// when page is loaded upper left, non-header cell is selected (thicker border)
document.addEventListener("DOMContentLoaded", function() {
	selectTableCell("1");	
});

// pushing the directional buttons changes which cell is selected
document.getElementById("upButton").addEventListener("click", moveUp);
document.getElementById("downButton").addEventListener("click", moveDown);
document.getElementById("leftButton").addEventListener("click", moveLeft);
document.getElementById("rightButton").addEventListener("click", moveRight);
document.getElementById("markButton").addEventListener("click", mark);