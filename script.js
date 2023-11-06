// Get references to the HTML elements
const nameInput = document.getElementById('nameInput');
const submitBtn = document.getElementById('submitBtn');
const greeting = document.getElementById('greeting');

// Use jQuery for handling the click event
$(document).ready(function () {
    $('#submitBtn').click(function () {
        const name = $('#nameInput').val();
        if (name.trim() !== '') {
            $('#greeting').text(`Hello, ${name}! Welcome to our web app.`);
        } else {
            $('#greeting').text('Please enter a valid name.');
        }
    });
});

