function updateClock() 
{
	let now = new Date();
	let h = formatTime(now.getHours());
	let m = formatTime(now.getMinutes());
	let s = formatTime(now.getSeconds());
	let clock = document.getElementById('clock');
	clock.innerHTML = h + ':' + m + ':' + s;
}

function FixedDay()
{
	let now = new Date();
	let today = formatTime(now.getDate());
	let month = formatTime(now.getMonth() + 1);
	let year = now.getFullYear();
	console.log(month);
	let day = document.getElementById('day');
	day.innerHTML = today + '.' + month + '.' + year;
	console.log(day);
}
function formatTime(time)
{
	if (time < 10) {
		return '0' + time;
	}else{
		return time;
	}
}

setInterval(updateClock);
setTimeout(FixedDay);



	
		
