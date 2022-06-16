//The charAt() method returns the character at a specified index (position) in a string:
var nameCompany= "Dev Fast";
var c= nameCompany.charAt(4); 
console.log(c); // F

//ES5 allows property access on strings
console.log(nameCompany[0]); // D

//The trim() method removes whitespace from both sides of a string.
nameCompany = "     Dev Fast      ";
reNameCompany = nameCompany.trim(); // return Dev Fast

//The isArray() method checks whether an object is an array.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var checkArray = Array.isArray(fruits); // return true

//The forEach() method calls a function once for each array element.
var sumOfArray=0;
var arrayNumber= [1, 3, 5, 7];
function plusValue(value){
    sumOfArray+= value;
}
arrayNumber.forEach(plusValue); // sumOfArray = 16
console.log(sumOfArray); // 16 

//Array map(): This example multiplies each array value by 2:
var arrayNumberMap1= [1, 3, 5, 7];
var arrayNumberMap2= arrayNumberMap1.map(functionMap); // return [6, 8, 10, 12]
function functionMap(value){
    return value + 5;
}

//Array filter():This example creates a new array from elements with a value is Prefix number
var arrayNumberFilter= [1, 3, 10, 12, 15, 16, 17, 20, 22];
function checkPrefixNumber(value){
    var sum= 0;
    for(var i= 1; i<= value; i++){
        if(value%i==0){
            sum += i;
        }
    }
    if(sum==1+value||sum==1){
        return true;
    }
    else{
        return false;
    }
}
var arrayPrefix= arrayNumberFilter.filter(checkPrefixNumber); //return [1, 3, 17] 
console.log(arrayPrefix); //[1, 3, 17]

//Array reduce()
var arrayNumberReduce= [1, 3, 5, 7];
var sum = arrayNumberReduce.reduce(myFunctionOfReduce); //return 16
function myFunctionOfReduce(total, value) {
    return total + value;
}

//Array every(): This example checks if all values are over 18:
var arrayNumberEvery= [1, 3, 5, 7];
var allOver5 = arrayNumberEvery.reduce(myFunctionOfEvery); //return false
function myFunctionOfEvery(value) {
    return value>5;
}

//Array lastIndexOf(): lastIndexOf() is the same as indexOf(), but searches from the end of the array.
var arrayNumberLastIndexOf= [1, 3, 5, 7];
var islastIndex= arrayNumberLastIndexOf.lastIndexOf(5);
console.log(islastIndex);

//JSON.stringify()
var screen= {name: "screen", price: 100, quanlity: 10, categoryId: 1};
var screenInfo= JSON.stringify(screen);
console.log(screenInfo);

//Property Getters and Setters
var person={
    name: "Hùng",
    heigh: 172,
    weight: 63,
    get infor() {
        return "name: "+this.name + "\theigh: " + this.heigh+ "\tweight: " + this.weight;
    },
    get Heigh(){
        return this.heigh
    },
    set Heigh(value){
        this.heigh= heigh;
    }
}
console.log(person.infor);
person.heigh= 173;
console.log(person.heigh);

//Function Bind()
const member1={
    name: "Hùng",
    heigh: 172,
    weight: 63,
    infor : function(){
        return "name: "+this.name + "\theigh: " + this.heigh+ "\tweight: " + this.weight;
    }
}
const member2 = {
    name: "Mạnh",
    heigh: 175,
    weight: 58,
}
let info= member1.infor.bind(member2);
console.log(info());