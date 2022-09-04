function sendEmail(sendersEmail, subject, body) {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "ossyence.emails@gmail.com",
        Password : "7D33083071E33F2ADA4A08915640FCC74B4C",
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