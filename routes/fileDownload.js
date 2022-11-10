'use strict';


module.exports = app => {


    app.post('/router/fileDownload', (req, res) => {
        res.send(responses[0].queryResult);
    });


}