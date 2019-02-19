
function PageControl () {
    this.initPage = 1;
}

PageControl.prototype.init = function () {
    $(".tr-p1").show();
    $(".tr-p2").hide();
    $(".tr-p3").hide();
    $(".tr-p4").hide();
};

PageControl.prototype.listenPages = function () {
    var currentPage = this.initPage;
    $("#p1").click(function () {
        $(".tr-p1").show();
        $(".tr-p2").hide();
        $(".tr-p3").hide();
        $(".tr-p4").hide();
    });

    $("#p2").click(function () {
        $(".tr-p1").hide();
        $(".tr-p2").show();
        $(".tr-p3").hide();
        $(".tr-p4").hide();
    });

    $("#p3").click(function () {
        $(".tr-p1").hide();
        $(".tr-p2").hide();
        $(".tr-p3").show();
        $(".tr-p4").hide();
    });

    $("#p4").click(function () {
        $(".tr-p1").hide();
        $(".tr-p2").hide();
        $(".tr-p3").hide();
        $(".tr-p4").show();
    });
};

PageControl.prototype.moreData = function () {
    $("#p-more").click(function () {
        window.open('about_us.html');
    });
};

PageControl.prototype.run = function () {
    this.init();
    this.listenPages();
    this.moreData();
};

$(function () {
   var pageControl = new PageControl();
   pageControl.run();
});