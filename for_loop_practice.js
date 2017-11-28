//problems 1-3: write a single statement inside each loop that will log i to the console every time the loop runs.
//study the output of each and make sure you understand what parts of the loop statement are causing the output for each 
//to be slightly different

console.log("\n***********\nloop 1\n");
for (var i = 0; i < 10; i++){
	//code goes here
	console.log(1);
}

console.log("\n***********\nloop 2\n");
for (var i = 1; i < 10; i++){
	console.log(2);
}

console.log("\n***********\nloop 3\n");
for (var i = 0; i <= 10; i++){
	console.log(3);
}


//problem 4: log the square of i for each i
for (var i = 0; i <= 10; i++){
	console.log(i * i);
}


//problem 5: add an if statement inside the for loop below so that "even" will be logged to the console if i is even
//and "odd" if it is odd
//hint: look up "Modulus operator javascript" on google, or "check if number is even javascript"
for (var i = 0; i <= 10; i++){
	if (i%2 == 0) {
		console.log(i + ": even");
	}
	else {
		console.log(i + ": odd");
	}
};






//creates an array
var animals = ["cat", "dog", "rabbit", "fish"];
//creates a variable called firstAnimal and assigns it to the first element of the animals array
//remember, counting in JavaScript starts at 0
var firstAnimal = animals[0];
//logs firstAnimal to the console
console.log("first animal: " + firstAnimal);


//problem 6: log the second element of animals to the console
console.log("second animal: " + animals[1]);

//problem 7: log the third element of animals to the console
console.log("third animal: " + animals[2]);


//problem 8: add code inside the for loop so that the element of animals at index i will be logged to the console.
for (var i = 0; i < animals.length; i++){
	console.log(animals[i]);

}





var isFirstAnimalAMammal = isMammal(firstAnimal);
console.log("is a " + firstAnimal + " a mammal? " + isFirstAnimalAMammal);


var isLastAnimalAMammal = isMammal(animals[3]);
console.log("is a " + animals[3] + " a mammal? " + isLastAnimalAMammal);


//problem 9: add an if statement inside the for loop that will log the animal at index i + " is a mammal"
//if it is a mammal, and the animal at index i + " is not a mammal" if it is not a mammal

for (var i = 0; i < animals.length; i++){
	if (isMammal(animals[i]) == true) {
		console.log(animals[i] + " is mammal.");
	} else {
		console.log(animals[i] + " is not a mammal.")
	}
};




function isMammal(animal){
	if (animal == "cat" || animal == "dog" || animal == "rabbit"){
		return true;
	} else {
		return false;
	}
}