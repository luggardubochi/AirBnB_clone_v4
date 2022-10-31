$(document).ready(function() {
	const amenities = {};
	$('input[type="checkbox"]').change(function() {
		if ($(this).is(":checked")) {
			amenities[$(this).attr("data-id")] = $(this).attr("data-name");
		} else {
			delete amenities[$(this).attr("data-id")];
		}
		$('#amenities_list').text(Object.values(amenities).join(', '));
	});
	$.get("http://0.0.0.0:5001/api/v1/status/", function (data) {
	  if (data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
	});
});
