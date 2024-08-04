const express = require('express');
const getWeather = require('./weatherService');

const app = express();
const port = 4000;

app.use(express.json());

app.get('/weather', async (req, res) => {
    const city = req.query.city;
    if (!city) {
        return res.status(400).send({ error: 'City is required' });
    }

    try {
        const weatherData = await getWeather(city);
        res.send(weatherData);
    } catch (error) {
        res.status(500).send({ error: 'Failed to fetch weather data' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
