
let cArr = document.cookie.split('; ');

function cookieAppearance() {
	let cookieBtn = document.querySelector('.cookieBtn');
	cookieBtn.addEventListener('click', ()=>{
		let cookieBox = document.querySelector('.cookie-box');
		cookieBox.style.animation = "3s disappear ease forwards";
		setTimeout(()=>{
			cookieBox.style.display = 'none';
		}, 3000);
		setCookie(7);
	});
}

function setCookie(expiringDays) {
	let date = new Date();
	let expire = new Date();
	expire.setDate(date.getDate() + expiringDays);
	document.cookie = `isVisitedUs175294=true; expires=${expire}; path=/`;
	document.cookie = `whenVisitedUs175294=${new Date().toString()}; expires=${expire}; path=/`;
	document.cookie = `isAgreedToAccept=true; expires=${expire}; path=/`;
}

if (!cArr[cArr.indexOf('isVisitedUs175294=true')]) {
	cookieAppearance();
} else {
	document.querySelector('.cookie-box').style.display = 'none';
	document.querySelector('.msg').style.display = 'block';
}

function cancelClick() {
	let cookieBox = document.querySelector('.cookie-box');
	document.querySelector('.svg-cross').addEventListener('click', ()=>{
		cookieBox.style.animation = "3s disappear ease forwards";
		setTimeout(()=>{
			cookieBox.style.display = 'none';
		}, 3000);
	})
}

cancelClick();

let cookieBox = document.querySelector('.cookie-box')
let deleteCookie = document.querySelector('.deleteCookie');
deleteCookie.style.display = cookieBox.style.display === 'none' ? 'block': 'none';
deleteCookie.addEventListener('click', ()=>{
	setCookie(-1);
	deleteCookie.style.display = "none";
})