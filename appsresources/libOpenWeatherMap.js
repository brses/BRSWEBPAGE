(function($){"use strict";var URL_BASE="https://api.openweathermap.org/data/2.5/",URL_BASE_WEATHER=URL_BASE+"weather?q=",URL_BASE_FORECAST=URL_BASE+"forecast?q=";$.extend({openWeather:function(options){function getProperty(key){var langValue={BG:"bg",BR:"pt",DE:"de",EL:"el",EN:"en",ES:"es",FR:"fr",HU:"hu",IT:"it",JP:"ja",NL:"nl",PL:"pl",RU:"ru",SK:"sk",SL:"sl"}[key];return langValue==undefined&&(langValue="en"),langValue}function getUrlWeather(callType){if(options.authmethod==="apikey"&&options.apikey!==""){var url="",appid="&APPID="+options.apikey,units="&units="+(options.units_temp.toLowerCase()==="c"?"metric":"imperial"),lang="&lang="+getProperty(options.lang);return url+=callType=="forecast"?URL_BASE_FORECAST:URL_BASE_WEATHER,url+(options.location+units+lang+appid)}options.error("KO")}function pad(num){return("0"+num).slice(-2)}function getTimeFromDate(timestamp){var date=new Date(timestamp*1e3),hours=date.getHours(),minutes=date.getMinutes();return pad(hours)+":"+pad(minutes)}function getWeather(){$.getJSON(getUrlWeather("weather"),function(data){var speed,direction;if(data!==null){var result=data,unitsTemp=options.units_temp.toLowerCase()==="c"?"C":"F",unitsVisibility=options.units_visibility.toLowerCase()==="km"?"KM":"MI",unitsPressure=options.units_pressure.toLowerCase()==="bar"?"BAR":"IN",unitsSpeed=options.units_temp.toLowerCase()==="c"?"KM/H":"MI/H",weather={};weather.forecast=[];weather.id=result.id;weather.title=result.name;weather.temp=result.main.temp.toFixed(1);weather.humidity=result.main.humidity;unitsVisibility=="KM"?weather.visibility=(result.visibility/1e3).toFixed(0):unitsVisibility=="MI"?weather.visibility=(result.visibility/1609.344).toFixed(0):(weather.visibility=result.visibility.toFixed(1),unitsVisibility="M");unitsPressure=="BAR"?weather.pressure=(result.main.pressure/1e3).toFixed(3):unitsPressure=="IN"?weather.pressure=(result.main.pressure/33.863886666667).toFixed(2):(weather.pressure=result.main.pressure,unitsPressure="HPA");weather.updated=result.dt;weather.high=result.main.temp_max;weather.low=result.main.temp_min;weather.sunrise=getTimeFromDate(result.sys.sunrise);weather.sunset=getTimeFromDate(result.sys.sunset);weather.summary=result.weather[0].description;weather.icon="https://openweathermap.org/img/w/"+result.weather[0].icon+".png";weather.weatherId=result.weather[0].id;weather.attributionlink="https://openweathermap.org/";weather.unit=options.units_temp.toLowerCase();speed="";speed=unitsSpeed=="KM/H"?(result.wind.speed*3.6).toFixed(0):result.wind.speed.toFixed(0);direction="";result.wind.deg!=undefined&&(direction=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW","N"][Math.round(result.wind.deg/22.5)]);weather.wind={speed:speed,direction:direction};weather.units={temp:unitsTemp,visibility:unitsVisibility,pressure:unitsPressure,speed:unitsSpeed,humidity:"%"};options.forecast=="true"?getForecast(weather):options.success(weather)}else options.error("KO")}).fail(function(error){options.error(JSON.parse(error.responseText).message)})}function getForecast(weather){$.getJSON(getUrlWeather("forecast"),function(data){var i,forecast,dayObj;if(data!==null){var d=new Date,dateTmp="",count=0;for(i=0;i<data.list.length;i++)if(forecast=data.list[i],d.toDateString()!==new Date(forecast.dt_txt).toDateString()){if(forecast.dt_txt.split(" ")[0]!=dateTmp||i==data.list.length-1){if(dateTmp=forecast.dt_txt.split(" ")[0],count>0&&(weather.forecast.push(dayObj),weather.forecast.length==options.forecastdays))break;count++;dayObj={};dayObj.high=-9999;dayObj.low=9999;dayObj.date=forecast.dt*1e3;dayObj.icon=forecast.weather[0].icon;dayObj.weatherId=forecast.weather[0].id}dayObj.high=Math.max(forecast.main.temp_max,dayObj.high);dayObj.low=Math.min(forecast.main.temp_min,dayObj.low)}options.success(weather)}else options.error("KO")}).fail(function(error){options.error(JSON.parse(error.responseText).message)})}options=$.extend({location:"",units_temp:"c",units_visibility:"Km",units_pressure:"Bar",authmethod:"apikey",apikey:"",forecast:"false",forecastdays:"0",lang:"it"},options);getWeather()}})})(jQuery)