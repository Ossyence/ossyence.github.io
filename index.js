function sendEmail() {
    const name = document.getElementById("name").value
    const subject = document.getElementById("subject").value
    const body  = document.getElementById("body").value

    Email.send({
        Host: "smtp.elasticemail.com",
        Username : "ossyence@gmail.com",
        Password : "59B00F3B623A4258354302AF327F4B7890E2",
        To : 'ossyence@gmail.com',
        From : 'ossyence.emails@gmail.com',
        Subject : subject,
        Body : body + "\nBy: " + name 
    }).then(
        message => alert(message)
    );
}