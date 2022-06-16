//-----JavaScript Maps
// Create Objects
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

// Create a new Map
const fruits = new Map();

// Add new Elements to the Map
fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);

//-----JavaScript Sets
const letters = new Set();
// Add some values to the Set
letters.add("a");
letters.add("b");
letters.add("c");

//-----JavaScript Classes
class Product{
    constructor(nameP, price, quanlity){
        this.nameP= nameP;
        this.price= price;
        this.quanlity= quanlity;
    }
}
//khởi tạo class
const CPU= new Product("CPU", 100, 10);

//-----The Symbol Type
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
  let id = Symbol('id');
  person[id] = 140353;
