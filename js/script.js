
let name = prompt("Please submit your name before we get started.","")
document.getElementById("name").innerHTML = name;

function scrollToSection() {
    document.getElementById("messageForm").scrollIntoView({behavior: 'smooth'});
  }

function validateForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;

    if (name == "" || birthDate == "" || gender == "" || messages == "") {
        alert("Please fill in all information in 'Message Us' form.");
        return false;
    }

    setSenderUI(name, birthDate, gender, messages);
    return false;
}

function setSenderUI(name, birthDate, gender, messages) {
    document.getElementById("form-full-name").innerHTML = name;
    document.getElementById("form-birth-date").innerHTML = birthDate;
    document.getElementById("form-gender").innerHTML = gender;
    document.getElementById("form-messages").innerHTML = messages;
}