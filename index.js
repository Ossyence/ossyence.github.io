function sendEmail(sendersEmail, subject, body) {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "ossence.emails@gmail.com",
        Password : "1B3E31004D3A1D81506FDCA319001FD66D58",
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