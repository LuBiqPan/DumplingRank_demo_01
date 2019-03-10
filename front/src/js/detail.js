
function MemberDetail() {
    this.ajaxTime = 2000;
    this.serverData = {};
    this.statusColor = {
        "amounting": '#20ee33',
        "finished": '#aaaaaa',
        "hidden": '#ee1b2a',
        "darkTheme": '#C0DAFF',
        "lightTheme": '#666666',
    };

    // this.themeColor = $(".nav").css("background-color").toString();
}

/* Select a member from menu, and post to server to retrieve amount projects. */
MemberDetail.prototype.getMember = function () {
    var self = this;
    // Select a member from menu.
    self.selectedMember = $("#select-bar option:selected").text();
    var data = {"select_member_detail": self.selectedMember};
    // Post selected member to server.
    $.post(
        "/member/",     // url.
        data,           // Post data, must be a dictionary.
        // Callback function.
        function(data) {
            self.serverData = data;     // Global variable serverData.

            // Avatar.
            var avatarLink = $.parseJSON(data["avatar_link"]);
            $(".inner-member-avatar").css("background-image", "url("+avatarLink+")");

            // Theater & team.
            var theater = $.parseJSON(data["theater_team_info"])["theater"];
            var team = $.parseJSON(data["theater_team_info"])["team"];
            $(".theater-team").text("("+theater+" "+team+")");

            // Amount.
            var amountInfo = $.parseJSON(data["amount_info"]);
            $(".total-amount-number").text(amountInfo);

            // Rank.
            var rankInfo = $.parseJSON(data["rank_info"]);
            $(".current-rank-number").text(rankInfo);

            // Project quantity.
            var projectNo = $.parseJSON(data["project_no"]);
            $(".project-no-number").text(projectNo);

            // If no member is selected, show nothing in the table below.
            if (self.selectedMember === "请选择成员") {
                $("tbody").empty();
                $(".animate-wrapper").hide();
                $(".water-print").show();   // No data, just show water print.
                $(".water-print").text("SNH48-饺子榜 2019");
            } else if (data["project_info"] !== '[]') {
                // Else, if there is data returned, show it.
                $(".water-print").hide();
                $("tbody").empty();

                // Project information.
                var projectInfo = $.parseJSON(data["project_info"]);
                var j = 0; // Project index.
                for (var val in projectInfo) {
                    j++;
                    var trId = "project-" + j.toString();   // tr id.
                    self.amountList = projectInfo[val];

                    // Create table list.
                    if (j%2 === 1) { // Odd raws.
                        var $trTemp = $("<tr id="+trId+" "+"class='project-tr project-odd'"+"></tr>");
                    } else { // Even raws, whose background are different based on different themes.
                        // Get current theme.
                        var themeColor = $(".nav").css("background-color").toString();
                        // When light theme, set even raw background as #f7f7f7.
                        if (themeColor === "rgba(255, 255, 255, 0.94)") {
                            $trTemp = $("<tr id="+trId+" "+"class='project-tr project-even'"+"style='background: #f7f7f7'"+"></tr>");
                        } else { // When default theme (dark), use default background.
                            $trTemp = $("<tr id="+trId+" "+"class='project-tr project-even'"+"></tr>");
                        }
                    }
                    // Append td tags.
                    var linkTag = "<a href="+self.amountList["project_url"]+">"+self.amountList["project_name"]+"</a>";
                    $trTemp.append("<td class='project-name'>"+linkTag+"</td>");
                    $trTemp.append("<td class='project-fans-club'>"+self.amountList["fans_club"]+"</td>");
                    $trTemp.append("<td class='project-platform'>"+self.amountList["platform"]+"</td>");
                    $trTemp.append("<td class='project-amount'>"+self.amountList["amount"]+"</td>");

                    // Status font color.
                    if (self.amountList["status"] === "正在进行") {     // Status: amounting.
                        var statusColor = self.statusColor["amounting"];
                    } else if (self.amountList["status"] === "完成") {    // Status: finished.
                        statusColor = self.statusColor["finished"];
                    } else if (self.amountList["status"] === "隐藏") {    // Status: hidden.
                        statusColor = self.statusColor["hidden"];
                    } else {    // Status: default.
                        // Light theme.
                        var themeColor = $(".nav").css("background-color").toString();
                        if (themeColor === "rgba(255, 255, 255, 0.94)") {
                            statusColor = self.statusColor["lightTheme"];
                        } else { // Dark theme.
                            statusColor = self.statusColor["darkTheme"];
                        }
                    }
                    $trTemp.append("<td class='project-status' style='color:"+statusColor+";'>"+self.amountList["status"]+"</td>");

                    $trTemp.append("<td class='project-remark'>"+self.amountList["remark"]+"</td>");
                    $("tbody").append($trTemp);
                }
            } else { // Else, show nothing.
                $(".water-print").show();
                $(".water-print").text("暂无数据");
            }
        }
    );
    // Set member name on div amount-info.
    $(".member-name").text(self.selectedMember);
};

/* Query animation */
MemberDetail.prototype.queryAnimate = function () {
    var self = this;
    $(".animate-wrapper").hide();
    $("#select-bar").change(function () {
        $(".water-print").hide();
        $(".member-table").hide();
        $(".animate-wrapper").show();

        setTimeout(function () {
            if (self.serverData["project_info"] !== '[]') {
                $(".animate-wrapper").hide();
                $(".member-table").delay(1).fadeIn();
            }
        }, self.ajaxTime);
    });
};

MemberDetail.prototype.run = function () {
    var self = this;
    self.queryAnimate();
    setInterval(function () {
        self.getMember();
    }, self.ajaxTime);

};

$(function () {
    var memberDetail = new MemberDetail();
    memberDetail.run();
});