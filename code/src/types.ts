// any type --> super type of all types, opting out of type checking

//builtin types:
// number
// string
// boolean
// void
// NULL --> intentional absence of obj value
// undefined --> denotes value given to all uninitialized vars
// symbol  ?????
// object --> instances of user-defined classes, arrays, functions etc
// never --> values that never occur


// number
let age: number = 21;
let marks: number = 45.5;

// string
let first_name: string = 'John'
let last_name: string = "Doe"
let full_name: string = '$first_name $last_name'

//bool
let isReady: boolean = true;

//symbol
//The symbol is a primitive data type, which is mostly used to create unique values.
// It allows developers to create unique object keys that wont collide with any other keys.
const UNIQUE_KEY = Symbol()
let objectsss =
{
	[UNIQUE_KEY]: "SecretValue"
};
// Here, we have used the Symbol() constructor which returns the new unique key.
// We have used the UNIQUE_KEY as a key of the obj object




// null
let empty: null = null;


//undefined
// When a variable is declared but is not initialized, it contains the undefined value.
let undef: undefined;


//null and undefined are not the same.
//A variable initialized with undefined means that the variable has no value or object
// assigned to it while null means that the variable has been set to an object
// whose value is undefined.

