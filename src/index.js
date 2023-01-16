function createContactListItem(contact) {
    return '<li><a href="' + contact.link + '" target="_blank">' + contact.title + '</a></li>'
}

function createArticleListItem(article) {
    return '<li><a href="' + article.link + '" target="_blank">' + article.title + '</a>: ' + article.description + ' (' + article.date + ')</li>'
}

$.getJSON('src/data.json', function(data) {
    data = data.maxtremaine.data // Website content.
    $('#scriptWarning').toggle()
    $('.loaded').toggle() // Show containers for loaded data.
    Object.values(data.contact)
        .forEach(function(contact) {
            $(createContactListItem(contact)).appendTo('#contactList')
        })
    Object.values(data.articles)
        .sort(function(a, b) { return a.order - b.order })
        .forEach(function(article) {
            $(createArticleListItem(article)).appendTo('#articleList')
        })
})
