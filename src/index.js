const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");

// const { sendBasicEmail } = require("./services/email-service")
var cron = require('node-cron');

const setupAndStartServer = () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.listen(PORT, () => {
        console.log(`Server is running at PORT: ${PORT}`);

        // sendBasicEmail( 
        //     'support@admin.com',
        //     'anurag.gfg@gmail.com',
        //     'This is a testing email',
        //     'Hey, how are you? All good? I hope you like the support'
        // )

        // cron.schedule('* * * * * *', () => {
        //     console.log('running a task every two minutes');
        // });
    })
}

setupAndStartServer();