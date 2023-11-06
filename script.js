// Get references to the HTML elements
const nameInput = document.getElementById('nameInput');
const submitBtn = document.getElementById('submitBtn');
const greeting = document.getElementById('greeting');

// Add an event listener to the submit button
submitBtn.addEventListener('click', () => {
    const name = nameInput.value;
    if (name.trim() !== '') {
        greeting.textContent = `Hello, ${name}! Welcome to our web app.`;
    } else {
        greeting.textContent = 'Please enter a valid name.';
    }
});
