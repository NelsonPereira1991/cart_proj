module.exports = {
    createAndSendResponse: function (message, statusCode, data, res) {
        return res.status(statusCode).send({
            message: message,
            data: {
                data
            }
        });
    }
};