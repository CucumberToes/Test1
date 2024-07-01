document.addEventListener('DOMContentLoaded', function() {
    if (document.title === "Home Page") {
        alert("Welcome to my website! Click 'OK' to continue.");
    }
    
    const modal = document.getElementById("myModal");
    const btn = document.getElementById("myBtn");

    btn.addEventListener("click", function() {
        if (modal.style.display === "none") {
            modal.style.display = "block";
        } else {
            modal.style.display = "none";
        }
    });
});
