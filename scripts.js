document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('input[type="text"]');
    const filterButtons = document.querySelectorAll('.filters button');
    const showcase = document.querySelector('.showcase');

    searchInput.addEventListener('input', (event) => {
        const query = event.target.value.toLowerCase();
        // Implement search functionality
    });

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Implement filter functionality
        });
    });

    function toggleDropdown() {
        var dropdownContent = document.getElementById("dropdown-content");
        dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
    }

    window.onclick = function(event) {
        var dropdownContent = document.getElementById("dropdown-content");
        var dropdownButton = document.querySelector('.menu-button');
        
        if (!dropdownContent.contains(event.target) && !dropdownButton.contains(event.target)) {
            dropdownContent.style.display = "none";
        }
    }
    
    function performSearch() {
        // Get the text from the div
        const query = document.querySelector('.search-box').innerText.trim();
        // Log the query or implement your search logic here
        console.log('Searching for:', query);
        
        // Example search functionality
        if (query) {
            alert(`Search query: ${query}`);
        } else {
            alert('Please enter a search term.');
        }
    }
});
