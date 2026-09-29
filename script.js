const url = "https://pokeapi.co/api/v2/pokemon/384"
const resultado = document.getElementById('resultado')
const campoBusca = document.getElementById('campoBusca')
const btnBuscar = document.getElementById('btnBuscar')

// Forma Compacta, usando arrow function
const resposta = fetch(url)
                    .then(resposta => resposta.json())
                    .then(resposta => resultado.innerHTML = `
                        <img src="${resposta.sprites.front_default}"/>
                        <p>#${resposta.id}</p>
                        <h2>${resposta.name}</h2>
                    `)

btnBuscar.addEventListener('click', () => {
    console.log("Fui clicado buscando pokemon " + campoBusca.value)
});
