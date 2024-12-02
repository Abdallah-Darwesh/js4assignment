document.addEventListener("DOMContentLoaded", function() {
    let currentUserName = localStorage.getItem("currentUserName");
    if (currentUserName) {
        document.getElementById("welcomeMessage").textContent = `Hello, ${currentUserName}!`;
    }
});

