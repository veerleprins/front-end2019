const email = document.getElementById("mail");

const button = document.getElementsById("verstuurknop");

butten.disabled = true;

// disable(button);

email.addEventListener("input", function(event) {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Voer een geldig e-mailadres in!");
    } else {
        email.setCustomValidity("");
    }
});

function validateForm() {
    var x = document.forms["koopformulier"]["comments"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}