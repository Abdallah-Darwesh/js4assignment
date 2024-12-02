let registerbtn = document.getElementById("r-btn");
let counter = localStorage.getItem("counter") ? parseInt(localStorage.getItem("counter")) : 0; // Initialize counter from localStorage or set it to 0 if not present

registerbtn.addEventListener("click", function() {
    let registername = document.getElementById("r-n").value;
    let registeremail = document.getElementById("r-e").value;
    let registerpass = document.getElementById("r-p").value;

    // Check if the email already exists
    for (var i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key.startsWith("user") && JSON.parse(localStorage.getItem(key)).email === registeremail) {
            document.getElementById("invalid").classList.remove("d-none");
            document.getElementById("success").classList.add("d-none");
            return;
        }
    }

    // Increment the counter
    counter++;
    document.getElementById("invalid").classList.add("d-none");

    let user = {
        index: counter,
        name: registername,
        email: registeremail,
        password: registerpass
    };

    // Update the counter in localStorage
    localStorage.setItem("counter", counter);
    // Store the user object in localStorage
    localStorage.setItem(`user${counter}`, JSON.stringify(user));
    localStorage.setItem("currentUserName", registername);
    document.getElementById("success").classList.remove("d-none");

    // Clear the input fields
    document.getElementById("r-n").value = "";
    document.getElementById("r-e").value = "";
    document.getElementById("r-p").value = "";
});
