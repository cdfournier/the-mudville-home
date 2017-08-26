// SimpleWeather
$.simpleWeather({
	zipcode: '',
	woeid: '12758557',
	location: '',
	unit: 'f',
	success: function(weather) {
		html = '<img src="assets/weather/'+weather.code+'.svg">';
		html += '<h1>'+weather.temp+'&deg; '+weather.units.temp+'</h1><p>'+weather.currently+'</p>';

		$("#conditions").html(html);
	},
	error: function(error) {
		$("#conditions").html('<p>'+error+'</p>');
	}
});