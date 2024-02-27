
const endDate = "March 7, 2024 23:59:59";

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const countdown = setInterval(() => {
	const now = new Date();
	const end = new Date(endDate);
	const distance = end - now;

	const days = Math.floor(distance / (1000 * 60 * 60 * 24));
	const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((distance % (1000 * 60)) / 1000);

	daysEl.innerHTML = formatTime(days);
	hoursEl.innerHTML = formatTime(hours);
	minutesEl.innerHTML = formatTime(minutes);
	secondsEl.innerHTML = formatTime(seconds);
}, 1000);

function formatTime(time) {
	return time < 10 ? `0${time}` : time;
}