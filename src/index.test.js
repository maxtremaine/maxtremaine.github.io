describe('index', () => {
    describe('createContactListItem', () => {
        it('Should put together a contact list item', () => {
            const sampleContact = {
                "title": "Twitter",
                "link": "https://twitter.com/maxtremaine"
            }
            const listItem = '<li><a href="https://twitter.com/maxtremaine" target="_blank">Twitter</a></li>'
            chai.assert.equal(createContactListItem(sampleContact), listItem)
        })
    })
    describe('createArticleListItem', () => {
        it('Should put together an article list item', () => {
            const sampleArticle = {
                "title": "Trading Lottery Tickets",
                "date": "Apr 25, 2021",
                "description": "Mistaking probability for chance will lead you to a meaningless life.",
                "link": "https://maxtremaine.medium.com/trading-lottery-tickets-2857bebb153",
                "order": 1,
                "key": "tradingLotteryTickets"
            }
            const listItem = "<li><a href=\"https://maxtremaine.medium.com/trading-lottery-tickets-2857bebb153\" target=\"_blank\">Trading Lottery Tickets</a>: Mistaking probability for chance will lead you to a meaningless life. (Apr 25, 2021)</li>"
            chai.assert.equal(createArticleListItem(sampleArticle), listItem)
        })
    })
})