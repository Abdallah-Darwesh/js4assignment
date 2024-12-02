let loginemail = document.getElementById("l-e");
let loginpass = document.getElementById("l-p");
let loginbtn = document.getElementById("l-btn");

loginbtn.addEventListener("click", function() {
    document.getElementById("invalid").classList.add("d-none");

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key.startsWith("user")) {
            let user = JSON.parse(localStorage.getItem(key));
            if (user.email === loginemail.value && user.password === loginpass.value) {
                // Store the current user's name
                localStorage.setItem("currentUserName", user.name);
                // Redirect to home page
                window.location.href = "home.html"; // Change "home.html" to your home page URL
                return;
            }
        }
    }
    document.getElementById("invalid").classList.remove("d-none");
});
