;(function (doc,Comment){

    // J_openBtn
    // 1.获取当前节点元素
    var oOpenBtn = doc.getElementsByClassName("J_openBtn")[0],
    oClosetBtn = doc.getElementsByClassName("J_closeBtn")[0],
    oStars = doc.getElementsByClassName("J_stars")[0],
    oEditTxt = doc.getElementsByClassName('J_editTxt')[0],
    oSubmitBtn = doc.getElementsByClassName('J_submitBtn')[0],
    oRadioTabs = doc.getElementsByClassName('J_radioTabs')[0],
    oBtnBox = doc.getElementsByClassName('J_btnBox')[0];
    var init = function () {
        bindEvent();
    }
    var userId = 1;
    function bindEvent() {
        oOpenBtn.addEventListener('click',Comment.openBoard,false);
        oClosetBtn.addEventListener('click',Comment.closeBoard,false);
        oStars.addEventListener('mouseover',Comment.startHover,false);
        oEditTxt.addEventListener('input',Comment.editInput,false);
        oSubmitBtn.addEventListener('click', Comment.submitComment.bind(Comment, userId), false);
    }
    init();
})(document,initCommentModule);