
const btnElement = document.getElementById("btnAccessibility");
const titleElement = document.getElementById("titleBlock");
const btnElements = document.querySelectorAll(".hidden")

console.log(btnElements)
function showButtons() {

    for (var i = 0; i <= btnElements.length; i++) {
        btnElements[i].classList.remove('hidden');
    }

    titleElement.classList.add('hidden');
}

btnElement.addEventListener('click', showButtons);
