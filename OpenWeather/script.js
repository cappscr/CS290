/*****************************************************************************
** Filename: script.js
** Author: Christopher Capps
** Date: July 17th, 2016
** Description: A JavaScript file that will call to Web APIs and return 
** information to the user.
*****************************************************************************/

// asynchronously shows the weather information retrieved from Open Weather Map.

var apiKey = '880d8ebc87df200dfd589da3feb986ba';

document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons(){
	document.getElementById('zipSubmit').addEventListener('click', function(event){
        var zipReq = new XMLHttpRequest();
    	var zipPayload = {zip:null};
        zipPayload.zip = document.getElementById('zip').value;
        zipReq.open('GET', 'api.openweathermap.org/data/2.5/weather?q=' + zipPayload.zip + ',us&appid=' + apiKey, true);
        zipReq.setRequestHeader('Content-Type', 'application/json');
        zipReq.addEventListener('load',function(){
      		if(zipReq.status >= 200 && zipReq.status < 400){
        		var zipResponse = JSON.parse(zipReq.responseText);
        		document.getElementById('location').textContent = zipResponse.name;
        		document.getElementById('weather').textContent = zipResponse.main;
      		} else {
        		console.log("Error in network request: " + request.statusText);
      	}});
        zipReq.send(JSON.stringify());
        event.preventDefault();
    })
    
    document.getElementById('citySubmit').addEventListener('click', function(event){
        var cityReq = new XMLHttpRequest();
    	var cityPayload = {city:null};
        cityPayload.city = document.getElementById('city').value;
        cityReq.open('GET', 'api.openweathermap.org/data/2.5/weather?q=' + cityPayload.city + '&appid=' + apiKey, true);
        cityReq.setRequestHeader('Content-Type', 'application/json');
        cityReq.addEventListener('load',function(){
      		if(cityReq.status >= 200 && cityReq.status < 400){
        		var cityResponse = JSON.parse(cityReq.responseText);
        		document.getElementById('location').textContent = cityResponse.name;
        		document.getElementById('weather').textContent = cityResponse.main;
      		} else {
        		console.log("Error in network request: " + request.statusText);
      	}});
        cityReq.send(JSON.stringify());
        event.preventDefault();
    })
    
    document.getElementById('submit').addEventListener('click', function(event){
        var req = new XMLHttpRequest();
    	var payload = {input:null};
        payload.input = document.getElementById('input').value;
        req.open('POST', 'http://httpbin.org/post', true);
        req.setRequestHeader('Content-Type', 'application/json');
        req.addEventListener('load',function(){
      		if(req.status >= 200 && req.status < 400){
        		var response = JSON.parse(req.responseText);
        		document.getElementById('result').textContent = response.data;
      		} else {
        		console.log("Error in network request: " + request.statusText);
      	}});
        req.send(JSON.stringify(payload.input));
        event.preventDefault();
    })
}