/* 登录 */
function validatorSignForm() {
    var ret = true;
    if (!validator.isMobilePhone($("#inputTel").val(), "zh-CN")) {
        ret = false;
        alert("The phone number is not correct");
        $("#inputTel").focus();
        return false;
    }
    if (!validator.isLength($("#inputPassword3").val(), {min: 6, max: 20})) {
        ret = false;
        alert("The password should be between 6 and 20 letters");
        $("#inputPassword3").focus();
        return false;
    }
    if (!validator.isLength($("#captcha").val(),4)) {
        ret = false;
        alert("The length of captcha is wrong");
        $("#captchaWarning").css("display","block");
        return false;
    }
    if (ret) {
        signIn();
    }
    function signIn() {
        var para = $("#signInform").serialize();
        $.ajax({
            url: 'users/signin',
            type: 'POST',
            async: true,
            data: para,
            success: function (res) {
                if(parseInt(res.code) === 0) {
                    alert(res.msg);
                }
                else if(parseInt(res.code) === 1) {
                    alert('success');
                    console.log(res);
                    window.location.href = res.url;
                }
            }
        });
    }
}
/* 刷新验证码 */
function getCaptcha() {
    var captchaUrl = '/captcha?t=' + Date.now() + Math.random();
    $("#captchaImg").attr("src",captchaUrl);
}