
function DetailControl() {

}


DetailControl.prototype.initSelectTags = function () {};


DetailControl.prototype.totalData = function (totalAmount, totalSong) {
    var totalAmountSelector = "#total-amount";
    var totalSongSelector = "#total-song";

    $(totalAmountSelector).text(totalAmount);
    $(totalSongSelector).text(totalSong);
};


DetailControl.prototype.detailTableControl = function (songData) {
    for (var i=1; i<=songData.length; i++) {
        var trId = "tr-rank-" + i.toString();

        // tr tags start here.
        if (i%2 === 1) {    // Odd raws.
            var $trTemp = $("<tr id="+trId+" "+"class='tr-rank tr-odd'"+"></tr>");
        } else {            // Even raws.
            $trTemp = $("<tr id="+trId+" "+"class='tr-rank tr-even'"+"></tr>");
        }
        // Append td tags.
        $trTemp.append("<td class='rank-song'>"+songData[i-1]["song"]+"</td>");
        $trTemp.append("<td class='rank-project-name'>"+songData[i-1]["project_name"]+"</td>");
        $trTemp.append("<td class='rank-platform'>"+songData[i-1]["platform"]+"</td>");
        $trTemp.append("<td class='rank-amount'>"+songData[i-1]["amount"]+"</td>");
        $trTemp.append("<td class='rank-fan-club'>"+songData[i-1]["fan_club"]+"</td>");
        $trTemp.append("<td class='rank-remark'>"+songData[i-1]["remark"]+"</td>");
        // Append to tbody.
        $("#detail-table-tbody").append($trTemp);
    }
};



DetailControl.prototype.selectSongOrMember = function () {
    var self = this;

    // Select a song.
    $("#select-bar-song").change(function () {
        // Reset select tag of member.
        $("#select-bar-member option:first").prop("selected", "selected");
        // Clear old tr tags.
        $("tbody").empty();

        // Select a song from menu.
        self.selectedSong = $("#select-bar-song option:selected").text();
        console.log(self.selectedSong);
        var data = {"select_song_detail": self.selectedSong};
        // Post selected song to server.
        $.post(
            "/b50_detail/",     // url.
            data,               // Post data, must be a dictionary.
            // Callback function.
            function (data) {
                var songData = $.parseJSON(data["song_data"]);
                self.detailTableControl(songData);
            }
        )
    });

    // Select a member.
    $("#select-bar-member").change(function () {
        // Reset select tag of song.
        $("#select-bar-song option:first").prop("selected", "selected");
        // Clear old tr tags.
        $("tbody").empty();

        // Select a member from menu.
        self.selectedMember = $("#select-bar-member option:selected").text();
        console.log(self.selectedMember);
        var data = {"select_member_detail": self.selectedMember};
        // Post selected member to server.
        $.post(
            "/b50_detail/",     // url.
            data,               // Post data, must be a dictionary.
            // Callback function.
            function (data) {
                var songData = $.parseJSON(data["song_data"]);
                self.detailTableControl(songData);
            }
        )
    });
};


DetailControl.prototype.ajax = function () {
    var self = this;
    $.ajax({
        url: '/b50_detail/',
        contentType: 'application/json',
        dataType: 'json',
        type: "GET",
        success: function (data) {
            var totalAmount = $.parseJSON(data["total_amount"]);
            var totalSong = $.parseJSON(data["total_song"]);
            self.totalData(totalAmount, totalSong);
        }
    });
};


DetailControl.prototype.run = function () {
    var self = this;
    self.ajax();
    self.selectSongOrMember();
};


$(function () {
   var detailControl = new DetailControl();
   detailControl.run();
});
