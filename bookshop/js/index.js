function myFunction() {
    document.querySelector('#dl').href = '../html/record.html';
}

let btn = document.querySelector('#submitButton');
let phone = document.querySelector('#phone');
let phoneTip = document.querySelector('#phoneTip');
let verifyCode = document.querySelector('#verifyCode');
let btn_back_top = document.querySelector('#btn_back_top');
btn.onclick = function () {
    // console.log(1);
    if (phone.value == "") {
        phoneTip.innerHTML = '请输入手机号'
        phoneTip.style = 'display:block';
        return false;
    } else if (phone.value.length > 11) {
        phoneTip.innerHTML = '手机号错误'
        phoneTip.style = 'display:block';
        return false;
    } else if (verifyCode.value == "") {
        alert("请输入验证码");
        return false;
    }else if(verifyCode.value !== ""){
        window.location.href = '../html/index.html'
    }
}
function myRecord() {
    document.querySelector('#record').href = '../html/record.html';
}
function myShapping() {
    document.querySelector('#shapping').href = '../html/shapping.html';
}
function myClassify() {
    document.querySelector('#classify').href = '../html/classify.html';
}
function myIndex() {
    document.querySelector('#index').href = '../html/index.html';
}
function myShow() {
    document.querySelector('#show').href = '../html/show.html';
}