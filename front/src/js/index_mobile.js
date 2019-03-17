
/* Ajax upgrade */
var ajaxTime = 2000;    // ajax cycle in millisecond
setInterval(function () {
    $.ajax({
        url: '',
        contentType: 'application/json',
        dataType: 'json',
        type: "GET",
        success: function (data) {
            i = 0;
            for (var val in data) {
                var rankInfo = data[val];
                // Translate rankInfo into json format.
                var rankInfoJson = $.parseJSON(rankInfo);
                i++;    // rank
                for (var val in rankInfoJson) {
                    // Construct member field selector.
                    var memberSelector = "#tr-rank-" + i.toString() + " .rank-member";
                    // Construct real_amount field selector.
                    var totalAmountSelector = "#tr-rank-" + i.toString() + " .rank-account";
                    // Construct vote field selector.
                    var voteSelector = "#tr-rank-" + i.toString() + " .rank-vote";

                    // Set value for member tag.
                    $(memberSelector).text(rankInfoJson["member"]);
                    // Set value for real_amount (total) tag.
                    $(totalAmountSelector).text(rankInfoJson["real_amount"]);
                    // Set value for vote (32 yuan per vote) tag.
                    $(voteSelector).text(rankInfoJson["vote"]);
                    // Set value for amount total tag
                    $("#amount-total").text(rankInfoJson["amount_total"]);
                }
            }
        }
    });
}, ajaxTime);   // ajax every ajaxTime millisecond



function PageControl () {
    this.initPage = 1;
}

/* Get current theme color by navigation bar background color. */
PageControl.prototype.getThemeColor = function () {
    var self = this;
    $(".theme-btn").click(function () {
        self.theme = $(".nav").css("background-color");
    });
    return self.theme;
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


PageControl.prototype.run = function () {
    this.init();
    this.listenPages();
};

$(function () {
   var pageControl = new PageControl();
   pageControl.run();
});
