fetch('JSON/JSONforAbout-software.json')
    .then(response => response.json())
    .then(data => {

        const software = document.querySelector('#software')

        let th = document.createElement('th')
        th.setAttribute('scope', 'row')
        software.append(th)

        data.software.forEach(item => {

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