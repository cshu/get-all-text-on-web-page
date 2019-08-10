//Another way to copy all text is to use selectNodeContents and window.getSelection: https://stackoverflow.com/questions/6139107/programmatically-select-text-in-a-contenteditable-html-element
//But do they have exactly the same result? Also it is possible that some web page can make the bookmarklet unusable by making the text not selectable?

var tem_text=document.createElement('textarea');
tem_text.value=document.body.innerText;
document.body.appendChild(tem_text);
tem_text.select();
document.execCommand('copy');
document.body.removeChild(tem_text);

