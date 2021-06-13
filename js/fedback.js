//记录高度
var iFeedbackH = $(".feedback").height();
var feedbackHOnOff = true;

//初始化
$(".feedback").css({height:'40px',bottom:0});

//关闭按钮点击事件
$(".feedback .closeBtn").click(function () {
    if (!feedbackHOnOff) {
        $(this).hide().parents('.feedback').animate({height: 40}, 600)
        feedbackHOnOff=true;
    }
})

//点击标题，展开事件
$(".feedbackHeader").click(function () {
    if (feedbackHOnOff) {
        $(this).parent().animate({height: iFeedbackH}, 600)
        $(".feedback .closeBtn").show();
        feedbackHOnOff=false;
    }
})