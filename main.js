const timer = document.getElementById('stopwatch');
var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

/* Code to start the stopwatch*/

function startTimer() {
	if (stoptime == true) {
		stoptime = false;
		timerCycle();
	}
}

/* Code to stop the stopwatch*/

function stopTimer() {
	if (stoptime == false) {
		stoptime = true;
	}
}

/* function code to display hours, minutes, seconds on the stop watch*/

function timerCycle() {
	if (stoptime == false) {
		sec = parseInt(sec);
		min = parseInt(min);
		hr = parseInt(hr);

		sec = sec + 1;

		if (sec == 60) {
			min = min + 1; /* minute increase by one after 60 sec */
			sec = 0;
		}
		if (min == 60) {
			hr = hr + 1; /* hour increase by one after 60 min */
			min = 0;
			sec = 0;
		}
		/* Code to display 0 to those number which are less than 10  */
		if (sec < 10) {
			sec = "0" + sec;
		}
		if (min < 10) {
			min = "0" + min;
		}
		if (hr < 10) {
			hr = "0" + hr;
		}
		timer.innerHTML = hr + ":" + min + ":" + sec;

		setTimeout("timerCycle()", 1000);
	}
}

/* code to reset timer in stopwatch */

function resetTimer(){   /* by this function we can reset time in our stopwatch */
	timer.innerHTML = "00:00:00";
	stoptime = true;
	hr = 0;
	sec = 0;
	min = 0;
}








