//Ví dụ 1: Viết chương trình gồm một ô input và một thẻ div dùng để hiển thị nội dung (giá trị của ô input) khi người dùng gõ vào ô input
function show_Result(){
    var inputMessage= document.getElementById('inputMessage');
    var divResult= document.getElementById('result');
    divResult.innerHTML= inputMessage.value;
}
//Ví dụ 2: Viết chương trình khi người dùng copy nội dung của website thì thông báo là bạn đã copy thành công
function show_Message(){
    alert("Bạn đã copy thành công");
}
//Ví dụ 3: Viết chương trình tính tổng của hai số nhập vào (tính tự động)
function tinh(){
    var a = document.getElementById("inputA");
    var b = document.getElementById("inputB");
    var result = document.getElementById("result3");
    var tong = parseInt(a.value) + parseInt(b.value);
    if (!isNaN(tong)){
        result.value = tong;
    }
}
