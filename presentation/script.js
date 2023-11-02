// JavaScript code for email validation
// event listener on the form's submit event, triggers the email validation.
document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");

    // Regular expression for a valid email
    //The regular expression emailRegex is used here to validate the email address.
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    // Check if the input matches the email regex
    //If the entered email matches the regex, the form is submitted successfully.
    if (emailRegex.test(emailInput.value)) {
        // Valid email
        emailError.textContent = "";
        emailInput.style.border = "1px solid #ccc";
    } else {
        // Invalid email
        //If not, an error message is displayed, and the input field is styled with a red border to indicate the error.
        emailError.textContent = "Please enter a valid email address.";
        emailInput.style.border = "1px solid red";
    }
});
