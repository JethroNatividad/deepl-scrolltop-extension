// alert('it works')
function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
const button = document.createElement("button")
button.innerText = 'Go to top'
button.style = 'position:sticky;top:0;z-index:10;'
button.onclick = goToTopAndFocus
const header = document.querySelector('.dl_header')
const textarea = document.querySelector('.lmt__textarea')

insertAfter(button, header)

function goToTopAndFocus(){
    window.scrollTo(0, 0);
    textarea.value = ''
    textarea.focus()
    
}