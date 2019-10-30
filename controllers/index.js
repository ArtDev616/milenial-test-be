'user strict';
require('dotenv').config();
var request = require('request');

var constants = require('../conf/constants');

exports.test = function(req, res) {
    var options = {
        url: `http://api.weatherstack.com/forecast?access_key=${process.env.WEATHER_KEY}&query=${req.body.cityName}`
    };

    request.get(options, function (err, response, body) {
        if (err) {
            return res.json({ 
                success: false, 
                message: 'Failed to get Weather Data. Please try again later...', 
                code: constants.ErrorCode 
            });
        } else {
            return res.json({
                success: true,
                message: 'Get WeatherData Success.',
                code: constants.SuccessCode,
                data: body
            });
        }
    });
};
