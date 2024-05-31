let words = 0;
let characters = 0;
let noWhitespaceCharacters = 0;
let text = '';

const textBox = document.querySelector("#textInput");

const wordsSpan = document.querySelector("#wordNum");
const charactersSpan = document.querySelector("#characterNum");
const noWhitespacesSpan = document.querySelector("#noWhitespaces");

textBox.addEventListener("input", () => updateTotals());

function updateTotals(){
    text = textBox.value;
    characters = text.length;
    noWhitespaceCharacters = text.replace(/\s/g, '').length;
    words = textBox.value.split(/\s+/).filter(item => item !== '').length;

    wordsSpan.textContent = words;
    noWhitespacesSpan.textContent = noWhitespaceCharacters;
    charactersSpan.textContent = characters;
}