const sender = require("../config/emailConfig");

const sendBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
    try {
        const res = await sender.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: mailBody
        })
        console.log(res) 
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    sendBasicEmail
}