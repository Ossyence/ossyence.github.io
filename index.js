function sendEmail() {
    var name = document.getElementById("name").value
    var subject = document.getElementById("subject").value
    var body  = document.getElementById("body").value
    var contactEmail  = document.getElementById("contactEmail").value

    if (subject != "" && body != "") {
        if (contactEmail == "") {
            contactEmail = "Prefer not to say"
        }

        if (name == "") {
            name = "Prefer not to say"
        }

        if (body.length > 50) {
            Email.send({
                Host: "smtp.elasticemail.com",
                Username : "ossyence@gmail.com",
                Password : "59B00F3B623A4258354302AF327F4B7890E2",
                To : 'ossyence.emails.recipient@gmail.com',
                From : 'ossyence.emails@gmail.com',
                Subject : subject,
                Body : "<h3>" + body + "</h3><h2><br><br>By: " + name + "<br>Email: " + contactEmail + "<h2>"
            }).then(
                message => alert(message)
            );
        }
        else {
            alert("Please make the body longer. (min 50 characters)")
        }
    }
    else {
        alert("You need to actually fill in the subject and body.")
    }
}

function bodyChange() {
    var bodyCount = document.getElementById("bodyCount")
    var body = document.getElementById("body")

    if (bodyCount != null && body != null) {
        bodyCount.innerHTML = body.value.length + "/50" 
    }
}