// functions.js

function openMarkdownFile(filePath) {
    // Construct the GitHub Pages raw content URL
    var rawContentURL = "https://raw.githubusercontent.com/mycfhs/mycfhs.github.io/main/" + filePath;

    // Fetch the raw content of the markdown file
    fetch(rawContentURL)
        .then(response => response.text())
        .then(data => {
            // Display the markdown content below the link
            document.getElementById('markdownContent').innerHTML = "<pre>" + data + "</pre>";
        })
        .catch(error => {
            console.error('Error fetching the file:', error);
            alert('Error fetching the file. Please try again later.');
        });
}
