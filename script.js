document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('emailForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        
        fetch('http://localhost:3000/submit-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email })
        })
        .then(response => response.json())
        .then(data => {
            alert('Email submitted successfully!');
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Error submitting email.');
        });
    });
});
