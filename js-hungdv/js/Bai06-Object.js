//Khai báo đối tượng Category
var Category = {
    id: 0,
    name: '',

    initialization : function(id, name){
        this.id = id;
        this.name = name;
    },
    printCategory : function (){
        console.log("id: "+this.id+"\tname: "+this.name);
    }
    
};

//Khai báo đối tượng Product
var Product= {
    name : '',
    price: 0,
    quanlity: 0,
    categoryId: 0,
    
    initialization : function(name, quanlity, price, categoryId){
        this.name = name;
        this.price= price;
        this.quanlity= quanlity;
        this.categoryId= categoryId;
    },
    printProduct : function (){
        console.log("name: "+this.name+"\tprice: "+this.price+"\tquanlity: "+this.quanlity+"\tcategoryId: "+this.categoryId);
    }
};
//Sử dụng đối tượng.
Category.initialization(1, "Computer");
Category.printCategory();
Product.initialization("CPU", 100, 10, 1);
Product.printProduct();




