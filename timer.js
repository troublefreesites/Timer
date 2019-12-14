


var seconds = 0;
var minutes = 0;
function countUp(){
		
	seconds++;
	minutes = Math.floor(seconds/60);
	var remaining = seconds % 60;
	document.getElementById("timer").innerHTML = minutes + ":" + remaining;
	
}



function startTime(){
	timeId = setInterval(countUp, 1000);
	
}



function stopTime(){

clearInterval(timeId);
}





function clearTime(){
	clearInterval(timeId);
	if (minutes > 0 || seconds > 0) {
		seconds = 0;
		minutes = 0;
	document.getElementById("timer").innerHTML = minutes + ":" + seconds;
	}
	
}