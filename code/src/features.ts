//class

class Greeting
{
	greet():void
	{
		console.log("hello world!!!!!");
	}

}
var obj = new Greeting();
obj.greet();


//functions

function add(a: number, b: number): number
{
	return a + b;
}
console.log(add(5,10))


//type annotation

var a:number = 10
function printNum(num: number)
{
	console.log(num);
}
printNum(a);


//interfaces

interface IPerson
{
	firstName: string;
	lastName: string;
	getFullName() : string;
}

let object: IPerson =
{
	firstName: "Joe",
	lastName: "Doe",
	getFullName(): string
	{
		return (this.firstName + " " + this.lastName);
	}
};

console.log(object.getFullName());

//classes

class Greeter
{
	greeting: string;
	//constructor method
	constructor(message:string)
	{
		this.greeting = message;
	}

	greet()
	{
		return("hello, " + this.greeting)
	}
}

let greeter = new Greeter("world")
console.log(greeter.greet());



//inheritance

class Person
{
	name: string;
	constructor(name: string)
	{
		this.name = name;
	}
	display(): void
	{
		console.log(this.name);
	}
}


class Employee extends Person
{
	empCode: number;
	constructor(name: string, code: number)
	{
		//super calls constructor/methods of parent class
		super(name);
		this.empCode = code;
	}
	show(): void
	{
		console.log(this.empCode);
	}
}

let emp: Employee = new Employee("John", 123);

emp.display();
emp.show();


//enum

enum Direction
{
	Up = 1,
	Down,
	Left,
	Right
}

console.log(Direction.Up);
console.log(Direction.Down);
console.log(Direction.Left);
console.log(Direction.Right);

//generics

function printArray<T>(arr: T[]): void {
	for (let i = 0; i < arr.length; i++) {
	  console.log(arr[i]);
	}
  }
printArray([1, 2, 3]);
printArray(["a", "b", "c"]);


//union types

var unionTypes: string | number;
unionTypes = "Hello World";
console.log(unionTypes);
unionTypes = "43142341";
console.log(unionTypes);

//type guards

let abc: number | string = 10;

if (typeof a === "number")
	console.log('abc is a number')
else
	console.log('abc is a string')

