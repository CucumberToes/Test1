document.addEventListener('DOMContentLoaded', function() {
    if (document.title === "Home Page") {
        alert("Welcome to my website! Click 'OK' to continue.");
    }

    const btn = document.getElementById("myBtn");
    if (btn) {
        btn.addEventListener("click", function() {
            var modal = document.getElementById("myModal");
            modal.style.display = modal.style.display === "none" ? "block" : "none";
        });
    }

    const form = document.getElementById('emailForm');
    if (form) {
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
    }
});
