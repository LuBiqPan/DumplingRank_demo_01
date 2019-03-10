
/* Dark theme */
var lineColorDark = "#eeeeee";
var backgroundColorDark = "#121A20";
var wrapperColorDark = "#19232F";
var wrapperBorderColorDark = "#222e3f";
var evenListColorDark = "rgba(34, 46, 77, 0.25)";
var tableHeaderColorDark = "#222e3f";
var mainFontColorDark = "#C0DAFF";

/* Light theme */
var lineColorLight= "#111111";
var backgroundColorLight = "#f7f7f7";
var titleColor = "#e7e7e7";
var wrapperColorLight = "rgba(255,255,255,0.94)";
var wrapperBorderColorLight = "#222e3f";
var tableHeaderColorLight = "#f7f7f7";
var mainFontColorLight = "#000000";
var fontColorLight = "#666666";


$(".theme-light").click(function () {
    $("body").css({
        "background": backgroundColorLight,
        "color": fontColorLight
    });

    $(".nav-item a").css("color", fontColorLight);
    $(".links a").css("color", fontColorLight);

    $(".nav, .footer").css({
        "background": wrapperColorLight,
        "box-shadow": "0 0 10px rgba(0,0,0,0.15)",
    });
    $(".main").css("background", backgroundColorLight);
    $(".center-wrapper, .percentage-wrapper, .top-member-wrapper, .main-wrapper").css("background", wrapperColorLight);
    $(".growth-figure, .percentage-figure, .ad-wrapper, .pk-wrapper").css("background", wrapperColorLight);
    $(".middle-center-wrapper, .inner-center-wrapper").css("background", wrapperColorLight);
    $(".table-title, .amount-info").css("background", titleColor);
    $("th").css("background", titleColor);
    $(".tr-even, .project-even").css("background", backgroundColorLight);
    $(".tr-odd").css("background", wrapperColorLight);
    $(".inner-member-avatar").css("border", "8px solid #fefefe");

    $(".inner-growth-figure, .inner-percentage-figure, .middle-center-wrapper, .inner-center-wrapper, .inner-pk-wrapper, .inner-percentage-wrapper, .inner-top-member-wrapper, .pk-inner-main-wrapper, .inner-pk-page-wrapper").css("border", "1px solid #dddddd");

    $("#p1, #p2, #p3, #p4, #p-more, .detail-growth, .detail-pk, .pk-btn, .detail-percentage").css({
        "background": "#eeeeee",
        "color": fontColorLight
    });

    $(".pk-page-wrapper").css("background", wrapperColorLight)
});

$(".theme-dark").click(function () {
    $("body").css({
        "background": backgroundColorDark,
        "color": mainFontColorDark
    });

    $(".nav-item a").css("color", mainFontColorDark);
    $(".links a").css("color", mainFontColorDark);

    $(".nav, .footer").css({
        "background": wrapperColorDark,
        // "box-shadow": "0 0 10px rgba(0,0,0,0.15)",
    });
    $(".main").css("background", backgroundColorDark);
    $(".center-wrapper, .percentage-wrapper, .top-member-wrapper, .main-wrapper").css("background",wrapperColorDark);
    $(".growth-figure, .percentage-figure, .ad-wrapper, .pk-wrapper").css("background", wrapperColorDark);
    $(".middle-center-wrapper, .inner-center-wrapper").css("background", wrapperColorDark);
    $(".table-title, .amount-info").css("background", wrapperBorderColorDark);
    $("th").css("background", wrapperBorderColorDark);
    $(".tr-even, .project-even").css("background", evenListColorDark);
    $(".tr-odd").css("background", wrapperColorDark);
    $(".inner-member-avatar").css("border", "8px solid #19232F");

    $(".inner-growth-figure, .inner-percentage-figure, .middle-center-wrapper, .inner-center-wrapper, .inner-pk-wrapper, .inner-percentage-wrapper, .inner-top-member-wrapper, .pk-inner-main-wrapper, .inner-pk-page-wrapper").css("border", "1px solid #222e3f");

    $("#p1, #p2, #p3, #p4, #p-more, .detail-growth, .detail-pk, .pk-btn, .detail-percentage").css({
        "background": wrapperBorderColorDark,
        "color": mainFontColorDark
    });

    $(".pk-page-wrapper").css("background", wrapperColorDark)
});
