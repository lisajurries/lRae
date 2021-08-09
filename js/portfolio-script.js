const select = document.querySelector('#section')

function createCard(story) {

    //card div
    let card = document.createElement('div')
    card.classList.add('card')
    card.classList.add('shadow')

    // //card image
    let img = document.createElement('img')
    img.setAttribute('src', story.image)
    img.classList.add('card-img-top')
    img.classList.add('img-fluid')
    card.appendChild(img)

    //card inner div
    let div = document.createElement('div')
    div.classList.add('card-body')
    card.append(div)

    //h5 in inner div
    let h5 = document.createElement('h5')
    h5.innerText = story.title
    h5.classList.add('fw-bold')
    h5.classList.add('card-title')
    div.appendChild(h5)

    //p in inner div
    let p = document.createElement('p')
    p.classList.add('card-text')
    p.innerHTML = `<div class="mt-2"> ${story.exerpt} </div>`
    div.appendChild(p)

    //button in inner div
    let a = document.createElement('a')
    a.innerText = 'Read More'
    a.setAttribute('href', story.link)
    a.classList.add('btn')
    a.classList.add('btn-dark')
    div.appendChild(a)

    return card

    fetch('JSON/JSONforPortfolio-cards.json')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let cards = document.querySelector('#cards')
            cards.innerHTML = ''
            data.results.forEach(function (story) {
                let card = createCard(story)
                cards.append(card)
            })
        })
}
