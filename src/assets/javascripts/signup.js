/* 注册 */
function validatorForm() {
    var ret = true;
    if (!validator.isMobilePhone($("#phone").val(), "zh-CN")) {
        ret = false;
        alert("The phone number is not correct");
        $("#phone").focus();
        $("#phoneWarning").css("display","block");
        return false;
    }
    if (!validator.isLength($("#inputPassword").val(), {min: 6, max: 20})) {
        ret = false;
        alert("The password should be between 6 and 20 letters");
        $("#inputPassword").focus();
        $("#pwdWarning").css("display","block");
        return false;
    }
    if ($("#inputPassword").val() !== $("#inputPassword4").val()) {
        ret = false;
        alert("The two passwords you typed do not match");
        $("#repwdWarning").css("display","block");
        return false;
    }
    if (!validator.isLength($("#captcha").val(),4)) {
        ret = false;
        alert("The length of captcha is wrong");
        $("#captchaWarning").css("display","block");
        return false;
    }
    if (ret) {
        signUp();
    }
    
    function signUp() {
        var para = $("#signUpform").serialize();
        $.ajax({
            url: 'users/signup',
            type: 'POST',
            async: true,
            data: para,
            success: function (res) {
                if(parseInt(res.code) === 0) {
                    alert(res.msg);
                }
                else if(parseInt(res.code) === 1) {
                    alert(res.msg);
                    console.log(res);
                    window.location.href = res.url;
                }
            }
        });
        /*alert(para);*/
    }
}
/* 点击刷新验证码 */
function getCaptcha() {
    var captchaUrl = '/captcha?t=' + Date.now() + Math.random();
    $("#captchaImg").attr("src",captchaUrl);
}

