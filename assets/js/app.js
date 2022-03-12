let weatherForm = document.querySelector('.weatherForm')

weatherForm.addEventListener('submit', event => {
	let userCity = document.querySelector('.city').value;
	event.preventDefault()
})
