
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
