// Add an event listener to each clickable row
const clickableRows = document.querySelectorAll('.clickable-row');
clickableRows.forEach(row => {
    row.addEventListener('click', () => {
        // Toggle the "collapse" class on the collapsible content
        const target = document.querySelector(row.dataset.target);
        target.classList.toggle('show');
        // Toggle the "aria-expanded" attribute
        const expanded = row.getAttribute('aria-expanded') === 'true';
        row.setAttribute('aria-expanded', !expanded);
    });
});



// Function to copy the code snippet to the clipboard
function copyCodeSnippet(id) {
    const codeSnippet = document.getElementById(id);
    const range = document.createRange();
    range.selectNode(codeSnippet);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();

}

// Get the necessary elements
const colorInput = document.getElementById('favcolor');
const colorButton = document.getElementById('colorButton');

// Add event listener for color input change
colorInput.addEventListener('input', function () {
    // Get the selected color value
    const selectedColor = colorInput.value;

    // Update the style of the button
    colorButton.style.backgroundColor = selectedColor;
});

//When file is choosen border colors shifts to green else red default
const fileInput = document.getElementById('fileUpload');

fileInput.addEventListener('change', function () {
    if (fileInput.files.length > 0) {
        fileInput.classList.add('green-border');
    } else {
        fileInput.classList.remove('green-border');
    }
});