var initCommentModule = (function (doc) {

    var oCommentEditBoard = doc.getElementsByClassName("J_commentEditBoard")[0],
        oStarTip = doc.getElementsByClassName("J_starTip")[0],
    oStartItems = doc.getElementsByClassName("fa-star"),
    oTxtCount = doc.getElementsByClassName("J_txtCount")[0],
    oSubmitBtn = doc.getElementsByClassName("J_submitBtn")[0],
    oEditText = doc.getElementsByClassName("J_editTxt")[0];


    var startNum = 5;
    // oTxtCount = doc.getElementsByClassName("J_")[0];

    var APIs = {
        submitComment: 'http://127.0.0.1:8080/system/comment',
        getComments: 'http://127.0.0.1:8080/system/course/list'
    }
    return {
        openBoard: function () {
            oCommentEditBoard.style.display = "block";
        },
        closeBoard: function () {
            oCommentEditBoard.style.display = "none";
        },
        startHover: function (e) {
            var e = e || window.event,
                tar = e.target || e.srcElement,
                tagName = tar.tagName.toLocaleLowerCase();
            // console.log("tagName:" + tagName);
            if (tagName === "i"){
                var thisIndex = [].indexOf.call(oStartItems,tar),
                len = oStartItems.length,
                thisStartNum = oStartItems[thisIndex],
                item;
                console.log("thisIndex:" + thisIndex);
                for(var i = 0; i < len; i++){
                    item = oStartItems[i];
                    // console.log("item:" + item);
                    if (i <= thisIndex){
                        console.log(i,thisIndex);
                        item.className += " active";
                    }else {
                        item.className = "fa fa-star";
                    }
                }

            }

        },
        editInput: function () {
            var val = trimSpace(this.value),
                valLen = val.length;
            oTxtCount.innerHTML = valLen;
            if (valLen >= 15 && valLen <= 1000){
                oSubmitBtn.className = "comment-btn submit J_submitBtn";
                oSubmitBtn.removeAttribute('disabled');
            }else {
                oSubmitBtn.className += ' disabled';
                oSubmitBtn.setAttribute('disabled',"disabled")
            }
        },
        submitComment: function (userId) {
            var val = oEditText.value,
                len = trimSpace(val).length;
            if (len >=15 && len<=1000){
                xhr.ajax({
                    url: APIs.submitComment,
                    type: "POST",
                    data: {
                        userId: userId,
                        resourceId: 69,
                        starNum: startNum,
                        comment: val,
                        isAddComment: 1,
                        addId: 1,
                        uptime: "1999-08-21 00:40:25",
                        status: 1
                    },
                    success: function (data) {
                        console.log(data)
                    }
                })
            }
        }
    }
})(document);