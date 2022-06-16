//Viết function in Ma trận
var btnPrintMatrix = document.getElementById('btnPrintMatrix');
btnPrintMatrix.addEventListener('click', function(){
    for(var i= 0; i<=9; i++){
        for(var j = 0 ; j <= 9 ; j++ ){
            document.write(" (["+i+"]["+j+"]) ---");
        }
        document.write("<br/>");
        document.write("<br/>");
    }
});