module.exports = (express) => {
    express.get('/client/:command', (req, res) => {
        express.server.controllers.client.exec_command(req, res);
    });

}