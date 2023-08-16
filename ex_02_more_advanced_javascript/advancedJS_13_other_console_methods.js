/* Console log */

	// console.log() is used to log a message to the console. It can take multiple arguments, and it will concatenate them into a space-separated string.
	console.log('Hello', 'World'); // Hello World. Can also fit objects, arrays, etc. in the console.log() method.


/* console table */

	// console.table() is used to display data in a table format. It takes two arguments: data and columns. The data argument is an array of objects. The columns argument is an array of strings representing the columns to be displayed.
	const dishes = [
		{ dish: 'Pizza', price: 10 },
		{ dish: 'Burger', price: 5 },
		{ dish: 'Pasta', price: 8 },
		{ dish: 'Salad', price: 7 }
	]

	console.table(dishes); // Displays a table with the dishes.
	console.table(dishes, ['dish']); // Displays a table with only the dish column.

/* console warning */

	// console.warn() is used to display a warning message to the console. It takes a single argument, which is the message to be displayed.
	console.warn('This is a warning message!'); // Displays a warning message.

/* console error */

	// console.error() is used to display an error message to the console. It takes a single argument, which is the message to be displayed.
	console.error('This is an error message!'); // Displays an error message.