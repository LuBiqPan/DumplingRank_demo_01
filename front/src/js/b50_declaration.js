
$.ajax({
	url: '/indexList/',
	contentType: 'application/json',
	dataType: 'json',
	type: "GET",
	success: function (data) {
		var totalAmount = $.parseJSON(data["total_amount"]);
		var totalSong = $.parseJSON(data["total_song"]);			
		$("#total-amount").text(totalAmount.toFixed(2));
		$("#total-song").text(totalSong);
	}
});