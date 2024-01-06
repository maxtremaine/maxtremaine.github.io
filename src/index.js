function createContactListItem(contact) {
    return '<li><a href="' + contact.link + '" target="_blank">' + contact.title + '</a></li>'
}

function createArticleListItem(article) {
    return '<li><a href="' + article.link + '" target="_blank">' + article.title + '</a>: ' + article.description + ' (' + article.date + ')</li>'
}

function renderPage(data) {
    data = data.maxtremaine.data // Website content.
    document.getElementById('scriptWarning').style.display = 'none'
    for(const element of document.getElementsByClassName('loaded')){
        element.style.display = 'block'
    }
    Object.values(data.contact)
        .forEach(function(contact) {
            document.getElementById('contactList').innerHTML +=createContactListItem(contact)
        })
    Object.values(data.articles)
        .sort(function(a, b) { return a.order - b.order })
        .forEach(function(article) {
            document.getElementById('articleList').innerHTML += createArticleListItem(article)
        })
}

function loadPage() {
    fetch('src/data.json')
        .then(data => data.json())
        .then(renderPage)
}