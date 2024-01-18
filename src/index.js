// Render HTML from data.

const renderContactListItem = contact => (
    `<li><a href="${contact.link}" target="_blank">${contact.title}</a></li>`
)

const renderArticleListItem = article => (
    `<li><a href="${article.link}" target="_blank">${article.title}</a>: ${article.description} (${article.date})</li>`
)

const renderQuoteListItem = favouriteQuote => (
    `<li>"${favouriteQuote.quote}" -${favouriteQuote.author}</li>`
)

// Handle data and rendering.

const renderPage = data => {
    data = data.maxtremaine.data // Website content.
    document.querySelector('#scriptWarning').style.display = 'none'
    document.querySelector('#loaded').style.display = 'block'
    document.querySelector('#contactList').innerHTML = Object.values(data.contact)
        .map(renderContactListItem)
        .join('')
    document.querySelector('#articleList').innerHTML = Object.values(data.articles)
        .sort((a, b) => a.order - b.order )
        .map(renderArticleListItem)
        .join('')
    document.querySelector('#quoteList').innerHTML = Object.values(data.favouriteQuotes)
        .filter(quote => quote.public)
        .sort((a, b) => a.length - b.length)
        .map(renderQuoteListItem)
        .join('')
}

const loadAndRender = () => { // Set to run on body load.
    fetch('src/data.json')
        .then(data => data.json())
        .then(renderPage)
}