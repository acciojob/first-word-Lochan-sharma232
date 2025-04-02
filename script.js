function firstWord(s) {
	let string = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
return string.test(s);
	// your code here
}

// Do not change the code below

// const s = prompt("Enter String:");
// alert(firstWord(s));
