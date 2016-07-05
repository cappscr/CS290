/************************************************************
** Filename: deepComparison.js
** Author: Christopher Capps
** Date: July 3, 2016
** Class: CS 290
** Description: This function implements a deep comparison 
** of objects using a recursive algorithm.
***********************************************************/

function deepEqual(a, b) {
	
	// make sure that both passed parameters are true objects
	// if not then return a === b
	if ((typeof(a) == "object" && a != "null") && (typeof(b) == "object" && b != "null")) {
		// if we have two objects first compare quantity of properties
		if (Object.keys(a).length != Object.keys(b).length)
			return false;	
		
		for (var prop in a) {
			if (b.hasOwnProperty(prop)) {
				if (! deepEqual(a[prop], b[prop]))
					return false;
			} else 
				return false;
		}
			return true;
	} else {
		return (a === b)
	}		
}

// test the function using example for Eloquent JS
var obj = {here: {is: "an"}, object: 2}
console.log(deepEqual(obj, obj));
// -> true
console.log(deepEqual(obj, {here: 1, object: 2}));
// -> false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// -> true

// additional test cases 
var obj2 = {name: "John", surname: "Smith", age: 25}
var obj3 = {name: "John", surname: "Smith"}
var obj4 = {name: "John", lastname: "Smith", age: 25}
console.log(deepEqual(obj2, obj3));
// -> false
obj3.age = 25;
console.log(deepEqual(obj2, obj3));
//-> true
console.log(deepEqual(obj2, obj4));
// -> false
