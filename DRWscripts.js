function updateWord() {
    const input = document.getElementById('search-input').value;
    const replaceWord = document.getElementById('replace-word');

    if (input.trim() === "") {
        replaceWord.textContent = 'inspiring';
        replaceWord.classList.remove('replaced');
        replaceWord.classList.add('default');
    } else {
        replaceWord.textContent = input;
        replaceWord.classList.remove('default');
        replaceWord.classList.add('replaced');
    }
}

