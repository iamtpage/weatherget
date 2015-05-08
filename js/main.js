function geolocate() {
	
    //get data from geolocation
	navigator.geolocation.getCurrentPosition(getWeather);
}

function getWeather(position) {
    
    //api key
	var forecastapi = "382985bea12524e25a754d105c1a4e94";
    
    //lat and long
	var lat = position.coords.latitude;
	var lon = position.coords.longitude;
	
    //concatenate the url for the JSON weather
	var foreurl = $.getJSON('https://api.forecast.io/forecast/'+forecastapi+'/'+lat+','+lon+"?callback=?", function(weatherdata) 
	{
        //to satisfy Garlick
		if(weatherdata != null)
		{
			var cur = weatherdata.currently;
			var min = weatherdata.minutely;
			var hr = weatherdata.hourly;
			var day = weatherdata.daily;

			$('#weather-info tbody').append("<tr><th>Current Forecast:</th><th>"+cur.summary+"</th></tr>");
			$('#weather-info tbody').append("<tr><th>Hour Forecast:</th><th>"+min.summary+"</th></tr>");
			$('#weather-info tbody').append("<tr><th>Day Forecast:</th><th>"+hr.summary+"</th></tr>");
			$('#weather-info tbody').append("<tr><th>Week Forecast:</th><th>"+day.summary+"</th></tr>");
			$('#weather-info tbody').append("<tr><th>Feels like:</th><th>"+cur.apparentTemperature+"°F</th></tr>");
			$('#weather-info tbody').append("<tr><th>Humidity:</th><th>"+(cur.humidity * 100)+"%</th></tr>");
			$('#weather-info tbody').append("<tr><th>Pressure:</th><th>"+cur.pressure+" (mB)</th></tr>");
			$('#weather-info tbody').append("<tr><th>Wind Speed:</th><th>"+cur.windSpeed+" mph</th></tr>");
			$('#weather-info tbody').append("<tr><th>Lattitude:</th><th>"+weatherdata.latitude+"°</th></tr>");
			$('#weather-info tbody').append("<tr><th>Longitude:</th><th>"+weatherdata.longitude+"°</th></tr>");
            
			$("#weather").modal("show");
			console.log(weatherdata);
		}
	});
}