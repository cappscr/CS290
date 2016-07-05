/*function forEach(arr, task) {
	var sum = 0;
	for(var i = 0; i < arr.length; i++)
		task(arr[i]);
	return sum;
}

function task(input) {
	sum += input;
} */

function sumArr(arr) {
	var sum = 0;
	arr.forEach(function (add) {
		sum += add;
	});
	return sum;
}

var number_array = [1, 2, 3, 4, 5, 6];

console.log(sumArr(number_array));

//console.log(number_array.forEach(task));

function dialog (speaker) {
	return function (speech) {
		return (speaker + " says \"" + speech + "\""); 
	}
}

var Donald = {name: "Donald Duck"}
Donald.speak = dialog("Donald Duck");
console.log(Donald.speak("Hello there"));
