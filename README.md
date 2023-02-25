# nodejs-send-mail

<h2>HOW TO USE</h2>

const config = { <br>
    fromEmail : "ins****ub@gmail.com", // your email <br>
    password : "hcds****dfjh", // your email password <br>
    toEmail : "v****z@gmail.com", //send email to<br>
    subject : "hello", //subject<br>
    text : "Hi" //message<br>
}<br><br>

<h2>HOW TO SEND ?</h2><br>

sendMail(config).then(res=>{<br>
    console.log(res);<br>
})<br>
