$(window).scroll(function() {
    // 当滚动条距窗口超过80px时
    if($(window).scrollTop() >= 80){
        $('#go-top').fadeIn(300);
    }
    else{
        $('#go-top').fadeOut(300);
    }
});
$('#go-top').click(function(){
    //当点击图片时执行动画  滚动条距顶部距离为0px
    $('html,body').animate({scrollTop: '0px'}, 300);
});