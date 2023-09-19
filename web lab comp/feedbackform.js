document.getElementById("feedbackForm").onsubmit = function (event) {
  
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("commentError").innerHTML = "";

  
    var name = document.getElementById("name").value.trim();
    if (name === "") {
        document.getElementById("nameError").innerHTML = "Name is required.";
        event.preventDefault();
    }


    var email = document.getElementById("email").value.trim();
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        document.getElementById("emailError").innerHTML = "Email is required.";
        event.preventDefault();
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerHTML = "Invalid email format.";
        event.preventDefault();
    }


    var comment = document.getElementById("comment").value.trim();
    if (comment === "") {
        document.getElementById("commentError").innerHTML = "Comment is required.";
        event.preventDefault();
    }
};