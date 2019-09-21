

function IndexControl() {}


IndexControl.prototype.totalData = function (totalAmount, totalSong) {
    var totalAmountSelector = "#total-amount";
    var totalSongSelector = "#total-song";

    $(totalAmountSelector).text(totalAmount);
    $(totalSongSelector).text(totalSong);
};


IndexControl.prototype.mainTableControl = function (songData) {
    for (var i=1; i<=songData.length; i++) {
        var trId = "tr-rank-" + i.toString();

        // tr tags start here.
        if (i%2 === 1) {    // Odd raws.
            var $trTemp = $("<tr id="+trId+" "+"class='tr-rank tr-odd'"+"></tr>");
        } else {            // Even raws.
            $trTemp = $("<tr id="+trId+" "+"class='tr-rank tr-even'"+"></tr>");
        }
        // Append td tags.
        $trTemp.append("<td class='rank-no'>"+songData[i-1]["id"]+"</td>");
        $trTemp.append("<td class='rank-song'>"+songData[i-1]["song"]+"</td>");
        $trTemp.append("<td class='rank-actress'>"+songData[i-1]["actress"]+"</td>");
        $trTemp.append("<td class='rank-type'>"+songData[i-1]["type"]+"</td>");
        $trTemp.append("<td class='rank-total-amount'>"+songData[i-1]["amount"]+"</td>");
        // Append to tbody.
        $("#main-table-tbody").append($trTemp);
    }
};


IndexControl.prototype.ajax = function () {
    var self = this;
    $.ajax({
        url: '/b50_index/',
        // url: '/api/percentage.php/',
        contentType: 'application/json',
        dataType: 'json',
        type: "GET",
        success: function (data) {
            var totalAmount = $.parseJSON(data["total_amount"]);
            var totalSong = $.parseJSON(data["total_song"]);
            var songData = $.parseJSON(data["song_data"]);

            self.totalData(totalAmount, totalSong);
            self.mainTableControl(songData);
        }
    });
};


IndexControl.prototype.run = function () {
    var self = this;
    self.ajax();
};


$(function () {
    var indexControl = new IndexControl();
    indexControl.run();
});
