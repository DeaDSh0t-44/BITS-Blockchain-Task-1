document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('input[type="text"]');
    const filterButtons = document.querySelectorAll('.filters button');
    const showcase = document.querySelector('.showcase');

    // Search functionality for the input field
    searchInput.addEventListener('input', (event) => {
        const query = event.target.value.toLowerCase();
        // Implement search functionality here
    });

    // Filter buttons functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Implement filter functionality here
        });
    });

    // Word replacement in the headline based on contenteditable search-box input
    document.querySelector('.search-box').addEventListener('input', function() {
        const searchText = this.textContent.trim();  // Get the content of the div
        const wordToReplace = document.querySelector('.word-to-replace');  // Use class instead of id
    
        // If there is text in the search-box, replace "inspiring" with it, else use default word
        if (searchText.length > 0) {
            wordToReplace.textContent = searchText;
            wordToReplace.classList.remove('default');
            wordToReplace.classList.add('replaced');
        } else {
            wordToReplace.textContent = 'inspiring';
            wordToReplace.classList.remove('replaced');
            wordToReplace.classList.add('default');
        }
    });
});
