// Uses history back if came from that page 
// on all links marked with the 'use-history-back'-class

document.querySelectorAll("a").forEach(function(elem) {
    elem.addEventListener("click", function(e) {
        var url = elem.href
        var referrerURL = document.referrer
    
        if (url == referrerURL) {
            window.history.back()
            e.preventDefault()
        } else {
        }
    })
})
