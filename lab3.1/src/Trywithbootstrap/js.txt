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
	let month = now.getMonth();
	let monthDays = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	let monthName = monthDays[month];
	console.log(monthName);
	let year = now.getFullYear();
	let Week = now.getDay()
	let DaysWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	let WeekName = DaysWeek[Week];
	console.log(month);
	let day = document.getElementById('day');
	day.innerHTML = WeekName + ', ' + today + ' ' + monthName + ' ' + year;
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

function changeBackgroundImage() { 
    const gifs = ["url(pixel3.gif)", "url(pixel.gif)", "url(pixel1.gif)", "url(pixel4.gif)"]; 
    const randomGif = gifs[Math.floor(Math.random() * gifs.length)]; 
    document.body.style.backgroundImage = randomGif; 
} 
 
setInterval(changeBackgroundImage, 30000);


	
		
