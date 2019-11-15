
$(function () {
    $.ajax({
        url: '/b50_detail/',
        contentType: 'application/json',
        dataType: 'json',
        type: "GET",
        success: function (data) {
            var backgroundUrl = $.parseJSON(data["background_url"]);
            $("body").css("background-image", backgroundUrl);
        }
    });
});