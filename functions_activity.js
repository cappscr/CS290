/************************************************************
** Filename: functions_activity.js
** Author: Christopher Capps
** Date: July 3, 2016
** Class: CS 290
** Description: This short program demonstrates JavaScript's
** hoisting property as well as the ability to assign 
** functions to variables.
***********************************************************/

exampleFunction1();

function exampleFunction1() {
	console.log("This text is from example function 1");
}

exampleFunction2();

var exampleFunction2 = function() {
	console.log("This text is from example function 2");
}