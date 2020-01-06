fetch('https://rickandmortyapi.com/api/character/')
.then(results => results.json())
.then(data => {
    data.results.map(character => {
        var div = document.createElement('div')
        div.classList.add('single-character')
        div.innerHTML = `<img src=${character.image}/> <h3>${character.name}</h3>`
        document.getElementById('characters').append(div)
    })
})
.catch(error => console.log(error))