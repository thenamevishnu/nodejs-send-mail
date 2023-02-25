# nodejs-send-mail

<h2>HOW TO USE</h2>

const config = { 
    fromEmail : "ins*****ub@gmail.com", // your email
    password : "hcds****dfjh", // your email password
    toEmail : "v****z@gmail.com", //send email to
    subject : "hello", //subject
    text : "Hi" //message
}

<h2>HOW TO SEND ?</h2>

sendMail(config).then(res=>{
    console.log(res);
})
