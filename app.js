const express = require('express');
const app = express();
const axios = require('axios');

app.get('/country/:name', function(req, res) {
    axios.get(`https://restcountries.eu/rest/v2/name/${req.params.name}`).then((data) => {
        // console.log('data', data.data)
        res.json(data.data)
    }).catch(err => {
        // console.log('error', err)
        res.status(err.response.data.status || 500).json({
            message: err.response.data.message
        })
    })
});

app.listen(8080);

// Export the app for the supertest to use.
module.exports.mainApp = app