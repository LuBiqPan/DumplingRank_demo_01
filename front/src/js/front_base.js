
function FrontBase() {
    
}

FrontBase.prototype.run = function () {
    var self = this;

    self.listenAuthBoxHover();
};

FrontBase.prototype.listenAuthBoxHover = function () {
    var authBox = $(".auth-box");
    var userMoreBox = $(".user-more-box");

    authBox.hover(function () {
        userMoreBox.show();
    }, function () {
        userMoreBox.hide();
    });
};





// Open / close login page.
// $(function () {
//     // Click on login button.
//     $("#btn").click(function () {
//         $(".mask-wrapper").show();
//     });
//
//     // Click on close button.
//     $(".close-btn").click(function () {
//         $(".mask-wrapper").hide();
//     });
// });


// Login / register switch.
// $(function () {
//     $(".switch").click(function () {
//         var scrollWrapper = $(".scroll-wrapper");
//         var currentLeft = scrollWrapper.css("left");
//         // "left: 10px" -> "10".
//         currentLeft = parseInt(currentLeft);
//
//         if (currentLeft < 0) {
//             scrollWrapper.animate({"left": "0"})
//         } else {
//             scrollWrapper.animate({"left": "-400px"})
//         }
//     });
// });



//csrf设置
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

var myajax = {
    'get': function (args) {
        args['method'] = 'get';
        this.ajax(args);
    },
    'post': function (args) {
        args['method'] = 'post';
        this._ajaxSetup();
        this.ajax(args);
    },
    'ajax': function (args) {
        $.ajax(args);
    },
    '_ajaxSetup': function () {
        $.ajaxSetup({
            beforeSend: function(xhr, settings) {
                if (!/^(GET|HEAD|OPTIONS|TRACE)$/.test(settings.type) && !this.crossDomain) {
                    xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
                }
            }
        });
    }
};

// Construction function.
function Auth() {
    var self = this;

    self.maskWrapper = $(".mask-wrapper");
    self.scrollWrapper = $(".scroll-wrapper");
    self.smsCaptcha = $(".sms-captcha-btn");
}

Auth.prototype.run = function () {
    var self = this;

    self.listenShowHideEvent();
    self.listenSwitchEvent();
    self.listenSigninEvent();
    self.listenImgCaptchaEvent();
    self.listenSmsCaptchaEvent();
};

Auth.prototype.showEvent = function () {
    var self = this;
    // Show singin/signup window.
    self.maskWrapper.show();
};

Auth.prototype.hideEvent = function () {
    var self = this;
    // Hide signin/signup window.
    self.maskWrapper.hide();
};

Auth.prototype.listenShowHideEvent = function () {
    var self = this;
    var signinBtn = $(".signin-btn");
    var signupBtn = $(".signup-btn");
    var closeBtn = $(".close-btn");

    // Click signin button to open signin window.
    signinBtn.click(function () {
        self.showEvent();
        self.scrollWrapper.css({"left": 0});
    });

    // Click signup button to open signup window.
    signupBtn.click(function () {
        self.showEvent();
        self.scrollWrapper.css({"left": -400});
    });

    // Click close button to close signin/signup window.
    closeBtn.click(function () {
        self.hideEvent();
    });
};

// Signin/signup window switch.
Auth.prototype.listenSwitchEvent = function() {
    var self = this;
    var switcher = $(".switch");

    switcher.click(function () {
        var currentLeft = self.scrollWrapper.css("left");
        // "left: 10px" -> "10".
        currentLeft = parseInt(currentLeft);

        if (currentLeft < 0) {
            self.scrollWrapper.animate({"left": "0"})
        } else {
            self.scrollWrapper.animate({"left": "-400px"})
        }
    });
};

Auth.prototype.listenSigninEvent = function () {
    var self = this;
    var signinGroup = $(".signin-group");
    var telephoneInput = signinGroup.find("input[name='telephone']");
    var passwordInput = signinGroup.find("input[name='password']");
    var rememberInput = signinGroup.find("input[name='remember']");

    var submitBtn = signinGroup.find(".submit-btn");
    submitBtn.click(function (event) {
        event.preventDefault();
        var telephone = telephoneInput.val();
        var password = passwordInput.val();
        var remember = rememberInput.prop("checked");

        xfzajax.post({
            'url': '/account/login/',
            'data': {
                'telephone': telephone,
                'password': password,
                'remember': remember?1:0,
                'csrfmiddlewaretoken': $('#csrf_token').val()
            },
            'success': function (result) {
                console.log(result);
                if (result['code'] === 200) {
                    self.hideEvent();
                    window.location.reload();
                } else {
                    console.log('Login failed.');
                    var messageObject = result['message'];
                    if (typeof messageObject == 'string' || messageObject.constructor == String) {
                        console.log(messageObject);
                        window.messageBox.show(messageObject);
                    } else {
                        for (var key in messageObject) {
                            var messages = messageObject[key];
                            var message = messages[0];
                            console.log(message);
                            window.messageBox.show(message);
                        }
                    }
                }
            },
            'fail': function (error) {
                console.log(error);
            }
        });
        // myajax.post({
        //     'url': '/account/login/',
        //     'data': {
        //         'telephone': telephone,
        //         'password': password,
        //         'remember': remember?1:0,
        //         'csrfmiddlewaretoken': $('#csrf_token').val()
        //     },
        //     'success': function (result) {
        //         console.log('==============');
        //         console.log(result);
        //         console.log('==============');
        //     },
        //     'fail': function (error) {
        //         console.log(error);
        //     }
        // });
    });
};

Auth.prototype.listenImgCaptchaEvent = function () {
    var imgCaptcha = $('.img-captcha');
    imgCaptcha.click(function () {
        imgCaptcha.attr("src", "/account/img_captcha/"+"?random="+Math.random());
    });
};

Auth.prototype.smsSuccessEvent = function () {
    var self = this;
    messageBox.showSuccess('短信验证码发送成功');
    self.smsCaptcha.addClass('disabled');    // 将发送验证码按钮变成灰色
    var count = 60;     // 60秒倒计时
    self.smsCaptcha.unbind('click');     // 取消按钮点击
    var timer = setInterval(function () {
        self.smsCaptcha.text(count + "s");     // 显示倒计时
        count--;    // 倒计时自减1
        if (count <= 0) {
            clearInterval(timer);   //倒计时60秒结束，停止倒计时
            self.smsCaptcha.removeClass('disabled');     // 将发送按钮变回正常显示
            self.smsCaptcha.text('发送验证码');   // 按钮文字变回正常显示
            self.listenSmsCaptchaEvent();   // 重新执行函数
        }
    }, 1000);   // 倒计时间隔1000毫秒
};

Auth.prototype.listenSmsCaptchaEvent = function () {
    var self = this;
    var telephoneInput = $(".signup-group input[name='telephone']");
    smsCaptcha.click(function () {
        var telephone = telephoneInput.val();
        if (!telephone) {
            messageBox.showInfo('Please type a telephone number.');
        }
        xfzajax.get({
            'url': '/account/sms_captcha/',
            'data': {
                'telephone' : telephone
            },
            'success': function (result) {
                if (result['code'] == 200) {
                    self.smsSuccessEvent();
                }
            },
            'fail': function (error) {
                console.log(error);
            }
        })
    });
};

$(function () {
   var auth = new Auth();
   auth.run();
});


$(function () {
    var frontBase = new FrontBase();
    frontBase.run();
});

// var submitBtn = signinGroup.find(".submit-btn");
// submitBtn.click(function (event) {
//     event.preventDefault();
//     var telephone = telephoneInput.val();
//     var password = passwordInput.val();
//     var remember = rememberInput.prop("checked");
//
//     myajax.post({
//         'url': '/account/login/',
//         'data': {
//             'telephone': telephone,
//             'password': password,
//             'remember': remember?1:0
//         },
//         'success': function (result) {
//             console.log('==============');
//             console.log(result);
//             console.log('==============');
//         },
//         'fail': function (error) {
//             console.log(error);
//         }
//     });
// });


