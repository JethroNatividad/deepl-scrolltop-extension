// alert('it works')
function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
const button = document.createElement("button")
button.innerText = 'Go to top'
button.style = 'position:sticky;top:0;z-index:10;'
button.onclick = goToTop
const header = document.querySelector('.dl_header')

insertAfter(button, header)

function goToTop(){
    window.scrollTo(0, 0);
}