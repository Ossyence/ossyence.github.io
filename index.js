function sendEmail(sendersEmail, subject, body, password) {
    Email.send({
      Host: "smtp.gmail.com",
      Username: sendersEmail,
      Password: password,
      To: 'ossyence.emails@gmail.com',
      From: sendersEmail,
      Subject: subject,
      Body: body,
    })

    .then(function(message) {
        console.log("hello!!")
    });
}

function prepareToEmail() {
    console.log("preparing")

    const senderEmail = document.getElementById("emailAddress").value
    const title = document.getElementById("title").value
    const emailPassword = document.getElementById("emailPassword").value
    const body  = document.getElementById("body").value

    console.log(senderEmail)
    console.log(title)
    console.log(emailPassword)
    console.log(body)

    sendEmail(senderEmail, title, body, emailPassword)
}

/*
document.getElementById("sendButton").onclick = function() {
    prepareToEmail()
}
*/