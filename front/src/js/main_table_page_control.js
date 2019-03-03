
function PageControl () {
    this.initPage = 1;
    // this.theme = null;
    // var x = "default";
}

/* Get current theme color by navigation bar background color. */
PageControl.prototype.getThemeColor = function () {
    var self = this;
    $(".theme-btn").click(function () {
        self.theme = $(".nav").css("background-color");
    });
    return self.theme;
};

/* Highlight selected li tag. */
PageControl.prototype.listenSelect = function () {
    var self = this;
    // Change li background color when mouse moves in.
    $(".tr-rank").mouseenter(function () {
        var tagId = $(this).attr("id");
        $("#"+tagId).css("background", "#eeeeee");
        $("#"+tagId).click(function () {
            console.log(tagId);
            $(location).attr("href", "member/");
        });
    });

    // Restore li color to default value when mouse moves out.
    $(".tr-rank").mouseleave(function () {
        var currentTheme = self.getThemeColor();

        var tagId = $(this).attr("id");
        var rank = parseInt(tagId.substr(8));

        // Dark theme.
        if (currentTheme === undefined || currentTheme === "rgb(25, 35, 47)") {
            if (rank%2 === 0) { // Even rank color.
                $("#"+tagId).css("background", "#222e3f");
            } else { // Odd rank color.
                $("#"+tagId).css("background", "#19232F");
            }
        } else { // Light theme.
            if (rank%2 === 0) { // Even rank color.
                $("#"+tagId).css("background", "#f7f7f7");
            } else { // Odd rank color.
                $("#"+tagId).css("background", "rgba(255,255,255,0.94)");
            }
        }
    });

};

/* Initial page (TOP16) */
PageControl.prototype.init = function () {
    $(".tr-p1").show();
    $(".tr-p2").hide();
    $(".tr-p3").hide();
    $(".tr-p4").hide();
};

/* Page switch in TPO16, 17-32, 33-48 and 49-66 */
PageControl.prototype.listenPages = function () {
    // var currentPage = this.initPage;
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
    this.getThemeColor();
    this.listenSelect();
    this.init();
    this.listenPages();
    // this.moreData();
};

$(function () {
   var pageControl = new PageControl();
   pageControl.run();
});