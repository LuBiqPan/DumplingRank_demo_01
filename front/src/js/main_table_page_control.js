
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
        var currentTheme = self.getThemeColor();
        var tagId = $(this).attr("id");

        // Dark theme.
        if (currentTheme === undefined || currentTheme === "rgb(25, 35, 47)") {
            // $("#"+tagId).css("background", "rgba(238, 238, 238, 0.5)");
            $("#"+tagId).css({
                "background": "rgba(34, 46, 77, 0.7)",
                "font-weight": "bold",
                "font-size": "18px",
            });
        } else { // Light theme.
            $("#"+tagId).css({
                "background": "rgba(238, 238, 238, 0.7)",
                "font-weight": "bold",
                "font-size": "18px",
            });
        }

        // Click list to jump to member detail amount page.
        // $("#"+tagId).click(function () {
        //     window.open("member");
        //     // Select the member within selected li.
        //     var data = {"select_member_index": $("#"+tagId).children(".rank-member").text()};
        //     // Post selected member to server.
        //     $.post(
        //         "/member/",
        //         data,
        //         function (data) {
        //             // console.log(data);
        //         }
        //     );
        // });
    });

    // Restore li color to default value when mouse moves out.
    $(".tr-rank").mouseleave(function () {
        var currentTheme = self.getThemeColor();
        var tagId = $(this).attr("id");
        var rank = parseInt(tagId.substr(8));

        // Dark theme.
        if (currentTheme === undefined || currentTheme === "rgb(25, 35, 47)") {
            if (rank%2 === 0) { // Even rank color.
                $("#"+tagId).css({
                    "background": "rgba(34, 46, 77, 0.25)",
                    "font-weight": "normal",
                    "font-size": "14px",
                });
            } else { // Odd rank color.
                $("#"+tagId).css({
                    // "background": "#19232F",
                    "background": "rgba(25, 35, 47, 0.25)",
                    "font-weight": "normal",
                    "font-size": "14px",
                });
            }
        } else { // Light theme.
            if (rank%2 === 0) { // Even rank color.
                $("#"+tagId).css({
                    // "background": "#f7f7f7",
                    "background": "rgba(247,247,247,0.5)",
                    "font-weight": "normal",
                    "font-size": "14px",
                });
            } else { // Odd rank color.
                $("#"+tagId).css({
                    "background": "rgba(255,255,255,0.74)",
                    "font-weight": "normal",
                    "font-size": "14px",
                });
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