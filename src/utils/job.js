const cron = require("node-cron");
const emailService = require("../services/email-service");
const sender = require("../config/emailConfig");
/***
 * 
 * 10:00 AM
 * Every 5 minutes
 * We will check are there any pending notifications which was expected to be sent by now and send them
 * 
 */

const setupJobs = () => {
    cron.schedule("* * * * *", async () => {
        console.log("Checking for pending notifications");
        const response = await emailService.fetchPendingEmails();

        response.forEach((obj) => {
            sender.sendMail({
                to: obj.recipientEmail,
                subject: obj.subject,
                text: obj.content
            }, async (err, info) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(info);

                    await emailService.updateTicket(obj.id, { status: "SUCCESS" });
                }
            })
        });

        console.log(response);
    });
};

module.exports = {
    setupJobs
};