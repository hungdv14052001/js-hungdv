//---Window

//window.open() - mở một cửa sổ mới
var windowChild = null;
function openWindow(){
    windowChild= window.open('https://devfast.us', "windowChild", "width= 500px, heigh=700px");
    return false;
}

//window.close() - đòng cửa sổ
function closeWindow(){
    windowChild.close()
    return false;
}

//window.moveTo() - di chuyển cửa sổ
function moveWindow(){
    windowChild.moveTo(500, 100);
    windowChild.focus();
    return false;
}

//window.resizeTo() - thay đổi kích thước cửa sổ
function resizeWindow(){
    windowChild.resizeTo(1000, 1000);
    windowChild.focus();
    return false;
}

//window.location.href - lấy url website
var btnGetUrl = document.getElementById('btnGetUrl');
btnGetUrl.addEventListener('click',function(){
    alert(window.location.href);
});

//---Location

//window.location.reload(url) - tải lại trang web
var btnReload = document.getElementById('btnReload');
btnReload.addEventListener('click', function(){
    window.location.reload();
});

//window.location.replace(url) - ghi đè trang web
var btnReplace= document.getElementById('btnReplace');
btnReplace.addEventListener('click', function(){
    window.location.replace('https://devfast.us');
});
var btnHrefPage= document.getElementById('btnHrefPage');
btnHrefPage.addEventListener('click', function(){
    window.location.href = 'https://devfast.us';
});

//window.location.assign(url) - load một trang mới
var btnLoadNew= document.getElementById('btnLoadNew');
btnLoadNew.addEventListener('click', function(){
    window.location.assign('https://devfast.us');
});
