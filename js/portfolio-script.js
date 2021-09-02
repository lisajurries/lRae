section = document.querySelector('#section')

fetch('JSON/JSONforPortfolio-cards.json')
    .then(response => response.json())
    .then(data => {

        console.log(data)

        data.items.forEach(item => {

            //create row
            let row = document.createElement('div')
            row.classList.add('row')
            row.classList.add('mt-4')

            //create column
            let col = document.createElement('div')
            col.classList.add('col-md-12')
            col.classList.add('d-flex')
            col.classList.add('justify-content-around')
            col.classList.add('flex-wrap')

            section.appendChild(row)
            row.appendChild(col)

            item.data.forEach(group => {

                //card div
                let card = document.createElement('div')
                card.classList.add('card')
                card.classList.add('shadow')
                card.classList.add('rounded')
                card.classList.add('mt-5')
                card.classList.add('border')
                card.classList.add('border-info')

                // //card image
                let image = document.createElement('img')
                image.src = group.image
                image.classList.add('card-img-top')
                image.classList.add('img-fluid')
                image.classList.add('border-top')
                image.classList.add('border-bottom')

                // //card inner div
                let body = document.createElement('div')
                body.classList.add('card-body')
                body.append(card)

                //h5 in inner div
                let title = document.createElement('h4')
                title.innerText = group.title
                title.classList.add('card-title')
                title.classList.add('p-2')

                //p for inner div
                let category = document.createElement('span')
                category.innerHTML = group.category.join(' | ')
                category.classList.add('text-center')
                category.classList.add('mt-2')
                category.classList.add('mb-2')
                category.classList.add('fs-6')
                category.classList.add('text-info')

                //p in inner div
                let description = document.createElement('p')
                description.classList.add('card-text')
                description.innerHTML = group.excerpt
                description.classList.add('ms-2')

                //button in inner div
                let link = document.createElement('a')
                link.innerText = 'More'
                link.setAttribute('href', group.link)
                link.classList.add('btn')
                link.classList.add('btn-outline-info')
                link.classList.add('text-center')
                link.classList.add('ms-2')
                link.classList.add('mb-2')


                card.appendChild(title)
                card.appendChild(description)
                card.appendChild(image)
                card.appendChild(category)
                card.appendChild(link)
                col.appendChild(card)

            })
        })

    })