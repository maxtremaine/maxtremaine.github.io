const createContactListItem = contact => (
    '<li><a href="' + contact.link + '" target="_blank">' + contact.title + '</a></li>'
)

const createArticleListItem = article => (
    '<li><a href="' + article.link + '" target="_blank">' + article.title + '</a>: ' + article.description + ' (' + article.date + ')</li>'
)

const renderPage = data => {
    data = data.maxtremaine.data // Website content.s
    document.querySelector('#scriptWarning').style.display = 'none'
    document.querySelectorAll('.loaded').forEach(element => {
        element.style.display = 'block'
    })
    document.querySelector('#contactList').innerHTML = Object.values(data.contact)
        .map(createContactListItem)
        .join('')
    document.querySelector('#articleList').innerHTML = Object.values(data.articles)
        .sort(function(a, b) { a.order - b.order })
        .map(createArticleListItem)
        .join('')
}

const loadAndRender = () => {
    fetch('src/data.json')
        .then(data => data.json())
        .then(renderPage)
}