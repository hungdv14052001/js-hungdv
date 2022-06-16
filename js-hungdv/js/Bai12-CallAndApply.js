//Hàm Call()
console.log("Hàm Call()");
function productInfo(name, price, quanlity, categoryId){
    console.log(name);
    console.log(price);
    console.log(quanlity);
    console.log(categoryId);
    return this;
}
var CPU = productInfo.call(productInfo, "CPU", 100, 10, 1);

//Hàm Apply()


//Viết hàm lấy tên Category của sản phẩm, áp dụng hàm apply()
console.log("Hàm Apply()");
var listCategory = [[1, "Computer"],[2, "Linh Kiện"]];
var cpu ={
    name: "CPU",
    price: 100,
    quanlity: 10,
    categoryId: 1
}
var getNameCategory = function(categoryId){
    var result="";
    for(var i= 0; i< listCategory.length; i++){
        if(categoryId == listCategory[i][0]){
            result= listCategory[i][1];
        }
    }
    return result;
}
var nameCategory= getNameCategory.apply(getNameCategory, [cpu.categoryId]);
console.log("name of category: "+nameCategory);