$.getJSON('src/data.json', function(data) {
    console.log(data)
    data = data.maxtremaine.data // Website content.
    $('.loaded').toggle()
    Object.values(data.contact)
        .forEach(function(contact) {
            $(`<li><a href="${contact.link}">${contact.title}</a></li>`).appendTo('#contactList')
        })
    Object.values(data.articles)
        .sort(function(a, b) { return a.order - b.order })
        .forEach(function(article) {
            $(`<li><a href="${article.link}" target="_blank">${article.title}</a>: ${article.description} (${article.date})</li>`)
                .appendTo('#articleList')
        })
    $('#scriptWarning').toggle()
})