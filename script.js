// In oder to fetch the text file content
fetch('AnyName.txt')
    .then(response => response.text())
    .then(data => {
        // To display the fetched content in the HTML element with id "paragraph"
        document.getElementById('paragraph').innerText = data;
    })
    .catch(error => console.error(error));
