$.getJSON('src/data.json', function(json) {
    const data = json.maxtremaine.data
    console.log(data)
    $('.loaded').toggle()
    Object.values(data.contact).forEach(function(contact) {
        $(`<li><a href="${contact.link}">${contact.title}</a></li>`).appendTo('#contactList')
    })
    $('#scriptWarning').toggle()
})