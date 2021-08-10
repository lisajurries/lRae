fetch('JSON/JSONforPortfolio-cards.json')
    .then(response => response.json())
    .then(data => {

        const section = document.querySelector('#section')

        data.type.forEach(item => {

            console.log(data)
            let cards = document.querySelector('#cards')
            cards.innerHTML = ''

            //card div
            let card = document.createElement('div')
            card.classList.add('card')
            card.classList.add('shadow')
            section.appendChild(card)

            // //card image
            let img = document.createElement('img')
            img.setAttribute('src', item.type.api.image)
            img.classList.add('card-img-top')
            img.classList.add('img-fluid')
            cards.appendChild(img)

            //card inner div
            let div = document.createElement('div')
            div.classList.add('card-body')
            cards.append(div)

            //h5 in inner div
            let h5 = document.createElement('h5')
            h5.innerText = item.type[0].title
            h5.classList.add('fw-bold')
            h5.classList.add('card-title')
            div.appendChild(h5)

            //p in inner div
            let p = document.createElement('p')
            p.classList.add('card-text')
            p.innerHTML = `<div class="mt-2"> ${item.type[0].exerpt} </div>`
            div.appendChild(p)

            //button in inner div
            let a = document.createElement('a')
            a.innerText = 'Read More'
            a.setAttribute('href', item.type[0].link)
            a.classList.add('btn')
            a.classList.add('btn-dark')
            div.appendChild(a)

        })
    })
