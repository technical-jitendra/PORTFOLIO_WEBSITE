document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // Add logic to handle form submission (e.g., send data to a server)
        alert('Form submitted!');
    });
});
