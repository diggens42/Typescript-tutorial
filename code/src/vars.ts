var namee:string = "John";
var score1:number = 50;
var score2:number = 42.50
var sum = score1 + score2;
console.log("name" + namee)
console.log("first score " +score1)
console.log("second score " + score2);
console.log("sum of the scores: " + sum);

//type assertion
var str = '1';
var str2:number = <number> <any> str;
console.log(typeof(str2));


//inferred typing

var numba = 2; //data type inferred as number
console.log("value of numba " + numba);

//typescript variable scope

var global_num = 123; //global var
class Numbers
{
	num_val = 321;
	static sval = 10; //static field
	storeNum():void
	{
		var local_num = 12345; // local var
	}
}

console.log("Gloval num: " + global_num)
console.log(Numbers.sval) // static var
var objedct = new Numbers()
console.log("Global num " + objedct.num_val)
