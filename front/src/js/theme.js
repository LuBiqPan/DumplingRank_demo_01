
/* Dark theme */
var lineColorDark = "#eeeeee";
var backgroundColorDark = "#121A20";
// var backgroundColorDark = "rgba(18, 26, 32, 0.5)";
var wrapperColorDark = "#19232F";
var wrapperColorDarkOdd = "rgba(25, 35, 47, 0.25)";
var wrapperBorderColorDark = "#222e3f";
var evenListColorDark = "rgba(34, 46, 77, 0.25)";
var tableHeaderColorDark = "#222e3f";
var mainFontColorDark = "#C0DAFF";
var cardColorDark = "#222e3f";

/* Light theme */
var lineColorLight= "#111111";
var backgroundColorLight = "#f7f7f7";
var backgroundColorLightEven = "rgba(247,247,247,0.5)";
var titleColor = "#e7e7e7";
var wrapperColorLight = "rgba(255,255,255,0.94)";
var wrapperColorLightOdd = "rgba(255,255,255,0.74)";
var wrapperBorderColorLight = "#222e3f";
var tableHeaderColorLight = "#f7f7f7";
var mainFontColorLight = "#000000";
var fontColorLight = "#666666";
var cardColorLight = "#f7f7f7";


/* Light theme */
$(".theme-light").click(function () {
    // $(".main-table").css("background-image", "url(/static/images/waterprint_light.jpg)");   // test
    $(".main-table").css("background-image", "url(/images/waterprint_light.jpg)");             // jzb

    $("body").css({
        "background": backgroundColorLight,
        "color": fontColorLight
    });

    $(".nav-item a").css("color", fontColorLight);
    $(".links a").css("color", fontColorLight);
    $(".record-group a").css("color", fontColorLight);
    $(".history-link").css("color", fontColorLight);

    $(".nav, .footer").css({
        "background": wrapperColorLight,
        "box-shadow": "0 0 10px rgba(0,0,0,0.15)",
    });
    $(".main").css("background", backgroundColorLight);
    $(".center-wrapper, .right-wrapper, .percentage-wrapper, .top-member-wrapper, .main-wrapper").css("background", wrapperColorLight);
    $(".growth-figure, .percentage-figure, .ad-wrapper, .pk-wrapper, .about-us-main-wrapper, .member-main-wrapper, .sister-theaters-main-wrapper").css("background", wrapperColorLight);
    $(".middle-center-wrapper, .inner-center-wrapper, .login-inner-main-wrapper").css("background", wrapperColorLight);
    $(".table-title, .amount-info, .common-table-title, .login-title, .table-title-wrapper").css("background", titleColor);
    $("th").css("background", titleColor);
    $(".tr-even, .project-even").css({"background": backgroundColorLightEven,});
    $(".tr-odd").css({"background": wrapperColorLightOdd,});
    $(".inner-member-avatar").css("border", "8px solid #fefefe");

    $(".inner-growth-figure, .inner-percentage-figure, .middle-center-wrapper, .inner-center-wrapper, .inner-pk-wrapper, .inner-percentage-wrapper, .inner-top-member-wrapper, .pk-inner-main-wrapper, .inner-pk-page-wrapper, .descendant-inner-main-wrapper, .about-us-inner-main-wrapper, .member-inner-main-wrapper, .login-center-wrapper, .sister-theaters-inner-main-wrapper, .top16-wrapper, .inner-BEJvsGNZ-wrapper").css("border", "1px solid #dddddd");

    $("#p1, #p2, #p3, #p4, #p5, #p-more, #descendant-btn, .detail-growth, .detail-pk, .pk-btn, .detail-percentage, .top-btn").css({
        "background": "#eeeeee",
        "color": fontColorLight
    });

    $(".pk-page-wrapper, .descendant-main-wrapper").css("background", wrapperColorLight);

    $(".middle-member-detail-wrapper").css("background", cardColorLight);
    $(".inner-member-detail-wrapper, .inner-member-detail-avatar").css("border", "1px solid #c7c7c7");
});


/* Dark theme */
$(".theme-dark").click(function () {
    // $(".main-table").css("background-image", "url(/static/images/waterprint_dark.jpg)");    // test
    $(".main-table").css("background-image", "url(/images/waterprint_dark.jpg)");              // jzb

    $("body").css({
        "background": backgroundColorDark,
        "color": mainFontColorDark
    });

    $(".nav-item a").css("color", mainFontColorDark);
    $(".links a").css("color", mainFontColorDark);
    $(".record-group a").css("color", mainFontColorDark);
    $(".history-link").css("color", mainFontColorDark);

    $(".nav, .footer").css({
        "background": wrapperColorDark,
        // "box-shadow": "0 0 10px rgba(0,0,0,0.15)",
    });
    $(".main").css("background", backgroundColorDark);
    $(".center-wrapper, .right-wrapper, .percentage-wrapper, .top-member-wrapper, .main-wrapper").css("background",wrapperColorDark);
    $(".growth-figure, .percentage-figure, .ad-wrapper, .pk-wrapper, .about-us-main-wrapper, .member-main-wrapper, .sister-theaters-main-wrapper").css("background", wrapperColorDark);
    $(".middle-center-wrapper, .inner-center-wrapper, .login-inner-main-wrapper").css("background", wrapperColorDark);
    $(".table-title, .amount-info, .common-table-title, .login-title, .table-title-wrapper").css("background", wrapperBorderColorDark);
    $("th").css("background", wrapperBorderColorDark);
    $(".tr-even, .project-even").css("background", evenListColorDark);
    $(".tr-odd").css("background", wrapperColorDarkOdd);
    $(".inner-member-avatar").css("border", "8px solid #19232F");

    $(".inner-growth-figure, .inner-percentage-figure, .middle-center-wrapper, .inner-center-wrapper, .inner-pk-wrapper, .inner-percentage-wrapper, .inner-top-member-wrapper, .pk-inner-main-wrapper, .inner-pk-page-wrapper, .descendant-inner-main-wrapper, .about-us-inner-main-wrapper, .member-inner-main-wrapper, .login-center-wrapper, .sister-theaters-inner-main-wrapper, .top16-wrapper, .inner-BEJvsGNZ-wrapper").css("border", "1px solid #222e3f");

    $("#p1, #p2, #p3, #p4, #p5, #p-more, #descendant-btn, .detail-growth, .detail-pk, .pk-btn, .detail-percentage, .top-btn").css({
        "background": wrapperBorderColorDark,
        "color": mainFontColorDark
    });

    $(".pk-page-wrapper, .descendant-main-wrapper").css("background", wrapperColorDark);

    $(".middle-member-detail-wrapper").css("background", cardColorDark);
    $(".inner-member-detail-wrapper, .inner-member-detail-avatar").css("border", "1px solid #131313");
});
