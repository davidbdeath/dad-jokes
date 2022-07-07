const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

async function generateJoke() {
	const config = {
		method: 'GET',
		headers: {
			Accept: 'application/json',
		},
	};

	const res = await fetch('https://icanhazdadjoke.com/', config);

	const data = await res.json();

	jokeEl.textContent = data.joke;
	console.log(data.joke.length);

	if (data.joke.length > 180) {
		jokeEl.classList.add('joke-sml-txt');
	} else {
		jokeEl.classList.remove('joke-sml-txt');
	}
}

generateJoke();
