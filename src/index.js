const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");
const TicketController = require("./controllers/ticket-controller");
// const { sendBasicEmail } = require("./services/email-service")
const { setupJobs } = require("./utils/job");

const setupAndStartServer = () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.post("/api/v1/tickets", TicketController.create);

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


        setupJobs();
    })
}

setupAndStartServer();