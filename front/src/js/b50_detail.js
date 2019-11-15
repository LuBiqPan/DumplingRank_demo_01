
function DetailControl() {

}


DetailControl.prototype.initSelectTags = function (songList, memberList) {
    // Initialize select tag of song.
    var songTeamSong = [];
    var songSolo = [];
    var songUnit = [];
    var i;

    // Song classification.
    for (i=0; i<songList.length; i++) {
        // Team song.
        if (songList[i]["type"] === "队歌") {
            songTeamSong.push(songList[i]["song"]);
        }
        // Solo.
        else if (songList[i]["type"] === "Solo") {
            songSolo.push(songList[i]["song"]);
        }
        // Unit.
        else {
            songUnit.push(songList[i]["song"]);
        }
    }

    // Construct select group of song.
    // Default option.
    var tagDefaultOptionSong = $("<option class='not-select'>请选择歌曲</option>");
    // Team song.
    var $tagTeamSong = $("<optgroup label='队歌' class='type-team'></optgroup>");
    for (i=0; i<songTeamSong.length; i++) {
        $tagTeamSong.append("<option>"+songTeamSong[i]+"</option>");
    }
    // Solo.
    var $tagSolo = $("<optgroup label='Solo' class='type-solo'></optgroup>");
    for (i=0; i<songSolo.length; i++) {
        $tagSolo.append("<option>"+songSolo[i]+"</option>");
    }
    // Unit.
    var $tagUnit = $("<optgroup label='Unit' class='type-unit'></optgroup>");
    for (i=0; i<songUnit.length; i++) {
        $tagUnit.append("<option>"+songUnit[i]+"</option>");
    }
    // Append to select tag of song.
    $("#select-bar-song").append(tagDefaultOptionSong, $tagTeamSong, $tagSolo, $tagUnit);

    // Initialize select tag of member.
    $("#select-bar-member").append($("<option class='not-select'>请选择成员</option>"));
    for (i=0; i<memberList.length; i++) {
        $("#select-bar-member").append("<option>"+memberList[i]+"</option>");
    }
};


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
        var linkTag = "<a href="+songData[i-1]["project_url"]+" target='_blank'"+">"+songData[i-1]["project_name"]+"</a>";
        // $trTemp.append("<td class='rank-song'>"+songData[i-1]["song"]+"</td>");
        $trTemp.append("<td class='rank-song'>"+songData[i-1]["song"]+"</td>");
        $trTemp.append("<td class='rank-project-name'>"+linkTag+"</td>");
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
        var data = {
            "select_type": "song",
            "select_song": self.selectedSong
        };
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
        var data = {
            "select_type": "member",
            "select_member": self.selectedMember
        };
        // Post selected member to server.
        $.post(
            "/b50_detail/",     // url.
            data,               // Post data, must be a dictionary.
            // Callback function.
            function (data) {
                var songData = $.parseJSON(data["data"]);
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
            var songList = $.parseJSON(data["song_list"]);
            var memberList = $.parseJSON(data["member_list"]);

            self.totalData(totalAmount, totalSong);
            self.initSelectTags(songList, memberList);
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
