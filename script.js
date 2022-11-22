const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

function generateJoke() {
    fetch('http://icanhazdadjoke.com',{
        headers: {
            'Accept': 'application/json'
        }
    }).then(res => res.json())
        .then(data => {
            jokeEl.innerHTML = data.joke
        })
}