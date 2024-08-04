const axios = require('axios');

const getWeather = async (city) => {
    const apiKey = '6e249a806c4aa137e3d09d10da8e1b07';
    const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
};

module.exports = getWeather;
