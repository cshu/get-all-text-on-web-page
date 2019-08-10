# get-all-text-on-web-page

bookmarklets work on chrome

not working well on firefox; copying always fails with `document.execCommand(‘cut’/‘copy’) was denied because it was not called from inside a short running user-generated event handler.`; for some web pages all bookmarklets fail with `Content Security Policy: The page’s settings blocked the loading of a resource at inline (“script-src”).`

greasemonkey should work on firefox with `GM.setClipboard(document.body.innerText)`
