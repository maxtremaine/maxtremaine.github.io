fetch('src/data.json')
    .then(data => data.json())
    .then(data => data.maxtremaine.data) // Website content.
    .then(console.log)