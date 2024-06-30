if (document.title === "Home Page") {
    alert("Welcome to my website! Click 'OK' to continue.");
}
document.getElementById("myBtn").addEventListener("click", function() {
    var modal = document.getElementById("myModal");
    modal.style.display = modal.style.display === "none" ? "block" : "none";
});
