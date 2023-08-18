
document.addEventListener('DOMContentLoaded', function () {
    const downloadButton = document.getElementById('btnDownload');

    downloadButton.addEventListener('click', function () {
        // Specify the filename for the downloaded file
        const filename = 'VIVEK_Resume.pdf';

        // Path to the PDF file (assuming it's in the same directory as the HTML)
        const filePath = './VIVEK_Resume.pdf';

        // Create a new anchor element
        const link = document.createElement('a');
        link.href = filePath;
        link.download = filename;

        // Trigger a click event on the anchor element to initiate download
        link.click();
    });
    const btnGithub = document.getElementById("btnGithub");
    btnGithub.addEventListener("click", function () {

        location.replace("https://github.com/Vivek-Gokhale");
    });
    
        const searchInput = document.getElementById('searchInput');
        const searchButton = document.getElementById('searchButton');
        const content = document.getElementById('content');
        const searchResults = document.getElementById('searchResults');
        const allContent = Array.from(document.querySelectorAll('p, h1, h2, h3, a, h5'));
        let highlightedElements = [];
    
        searchButton.addEventListener('click', performSearch);
    
        searchInput.addEventListener('input', function() {
            const searchText = searchInput.value.toLowerCase();
    
            if (searchText === '') {
                clearHighlighting();
                searchResults.innerHTML = '';
            }
        });
    
        searchInput.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                performSearch();
            }
        });
    
        function performSearch() {
            const searchText = searchInput.value.toLowerCase();
    
            clearHighlighting();
    
            if (searchText.trim() !== '') {
                allContent.forEach(content => {
                    const contentText = content.textContent.toLowerCase();
                    if (contentText.includes(searchText)) {
                        const matchedText = contentText.match(searchText);
                        const temp = document.createElement('div');
                        temp.innerHTML = content.innerHTML.replace(matchedText, `<span class="highlight">${matchedText}</span>`);
                        content.innerHTML = temp.innerHTML;
                        highlightedElements.push(content);
                    }
                });
            }
        }
    
        function clearHighlighting() {
            highlightedElements.forEach(element => {
                element.innerHTML = element.innerHTML.replace(/<span class="highlight">(.*?)<\/span>/g, '$1');
            });
            highlightedElements = [];
        }
    
    
});
