$.getJSON('src/data.json')
    .done(function(data) { 
        console.log(data.maxtremaine.data)
        return data
    })
    .done(function(data) {
        console.log(data.maxtremaine.data.articles)
    })