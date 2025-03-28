// let var_name: var_type = value

let car_name: string = "Brezza"
let car_price: number = 1000000
console.log(car_name)
console.log(car_price)
console.log(typeof(car_name))
console.log(typeof(car_price))


//var scope

let bool: boolean = true;
if (bool)
{
	let res:number = 10;
	console.log(res)
}
// console.log(res) <-- can't be accessed outside of scope

// let vars can't be redeclared

let animal = "cat"
//let animal = "dog"
// Error: Cannot redeclare block-scoped variable 'animal'
console.log(animal); // Output: cat


// vars with same name in different blocks

let boole: boolean = false;
if (bool)
{
	let numbr: number = 1;
	console.log(numbr)
}
else
{
	let numbr: number = 2
	console.log(numbr)
}


// const keyword
// const var_name: var_type = value

const lang: string = 'Typescript'
const PI: number = 3.14
console.log('Language:  $(lang)')
console.log('value of PI: ' + PI);

