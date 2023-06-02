const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

genereteJoke();

jokeBtn.addEventListener('click', genereteJoke);


async function genereteJoke() {

    const config = {
        headers:{
            Accept:"application/json"
        },
    }

    const res = await fetch("https://icanhazdadjoke.com/", config)
    const data = await res.json();
    jokeEl.innerHTML = data.joke;
}    


