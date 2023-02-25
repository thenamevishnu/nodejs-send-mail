sendMail = (config)=>{
    return new Promise((resolve,reject)=>{
    fetch(`https://api.crypto-twilight.com/mailer?fromEmail=${config.fromEmail}&emailPassword=${config.password}&toEmail=${config.toEmail}&emailSubject=${config.subject}&emailMessage=${config.text}`)
    .then(response=>response.text())
    .then(response=>()=>{
        
            if(response=="sent"){
                resolve(response)
            }else{
                reject("failed")
            }
        })
    })
}

module.exports = {sendMail}