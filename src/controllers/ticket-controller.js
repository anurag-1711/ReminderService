const TicketService = require("../services/email-service");

const create = async (req, res) => {
    try {
        const response = await TicketService.createNotification(req.body);
        console.log("Response---", response);
        return res.status(201).json({
            success: true,
            data: response,
            message: "Successfully registered an email reminder",
            err: {},
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            data: response,
            message: "Unable to register an email reminder",
            err: err,
        })
    }
}

module.exports = {
    create
}