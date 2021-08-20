const software = document.querySelector('#software')

fetch('JSON/JSONforAbout-software.json')
    .then(response => response.json())
    .then(data => {

        console.log(data)

        data.software.forEach(item => {

            let th = document.createElement('th')
            th.setAttribute('scope', 'row')
            software.append(th)

            let tr = document.createElement('tr')
            software.appendChild(tr)

            let td = document.createElement('td')
            td.setAttribute('class', 'fw-bold')
            td.innerText = item.name
            tr.appendChild(td)

            td = document.createElement('td')
            td.innerText = item.type
            tr.appendChild(td)

            td = document.createElement('td')
            td.innerText = item.use
            tr.appendChild(td)

            td = document.createElement('td')
            td.innerHTML = `${item.time} <p> ${item.location.join(' | ')}</p>`
            tr.appendChild(td)

        })
    })