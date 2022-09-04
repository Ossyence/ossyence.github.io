function sendEmail(sendersEmail, subject, body) {
    Email.send({
        SecureToken: "c926766b-e9d6-4f92-9b94-b0914a999fe0",
        To : 'ossyence.emails@gmail.com',
        From : sendersEmail,
        Subject : subject,
        Body : body
    }).then(
        console.log("sent!")
    );
}

function prepareToEmail() {
    console.log("preparing")

    const senderEmail = document.getElementById("emailAddress").value
    const title = document.getElementById("title").value
    const body  = document.getElementById("body").value

    console.log(senderEmail)
    console.log(title)
    console.log(body)

    sendEmail(senderEmail, title, body)
}

/*
document.getElementById("sendButton").onclick = function() {
    prepareToEmail()
}
*/