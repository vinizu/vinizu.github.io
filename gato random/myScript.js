const gato = document.getElementById('gato');
const gato_botao = document.getElementById('gato botao');


gato_botao.addEventListener('click', () => {
    gatoFofo();
})

function gatoFofo() {
    fetch('https://aws.random.cat/meow')
        .then(res => res.json())
        .then(data => {
            gato.innerHTML = `<img src="${data.file}"/>`
        })
}
