/* Array popper exercise */

const sample_array = [1, 2, 3, 4, 5];

class my_array_popper {
	/* pseudocode 
	
	A loop that iterates through the array and stops when empty
		A function that takes the array and pops the first number
		A function that updates it
		A function that pops the last number
		The update function

	*/

	// Lets start with the constructor to insert the array as input
	/* constructor(arr) {
		this.arr = arr;
	} */

	// Now that we have the array, the loop, in our case a while
	/* while (this.arr.length() > 0) {

	} */

}

// solution -> this makes me feel so dumb with my silly functions and my loops :()

class ArrayPopper {
  constructor(arr) {
    this.arr = arr;
    this.atBeginning = true; // control value, it starts in true everytime
  }

  togglePopper() {
    this.atBeginning = !this.atBeginning; // whenever it is called, it flips the control value.
    return this.atBeginning ? this.arr.pop() : this.arr.shift(); // if control value is true -> pop (take first value), else, if it is false -> shift (take the last element).
  }
}

// And that's it

const ap = new ArrayPopper([1, 2, 3, 4, 5]);

console.log(ap.togglePopper());
console.log(ap.togglePopper());
console.log(ap.togglePopper());
console.log(ap.togglePopper());
console.log(ap.togglePopper());

