// import express from "express";
// import Conn from "./Database/db.js";
// const PORT = 8000;
// import axios from "axios"
// import Ticker from "./Model/TickerModel.js";

// const app = express();


// import bodyParser from "body-parser";


// import cors from "cors";
// import Routes from "./routes/Route.js"

// app.use(bodyParser.json({extended : true}));
// app.use(bodyParser.urlencoded({extended : true}));

// app.use(cors());
// app.use('/', Routes);
// Conn(); 

// // Fetch and store top 10 tickers
// app.get('/', async (req, res) => {
//     try {
//         const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
//         const tickers = response.data;

//         // Convert tickers object to an array and sort by volume
//         const tickerArray = Object.values(tickers);
//         tickerArray.sort((a, b) => b.volume - a.volume);

//         // Get top 10 tickers
//         const top10Tickers = tickerArray.slice(0, 10);

//         // Store each ticker in the database
//         await Ticker.deleteMany({}); // Clear the collection before storing new data
//         for (const ticker of top10Tickers) {
//             const { name, last, buy, sell, volume, base_unit } = ticker;
//             const newTicker = new Ticker({ name, last, buy, sell, volume, base_unit });
//             await newTicker.save();
//         }

//         res.json({ message: 'Top 10 tickers fetched and stored successfully!' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'An error occurred while fetching data' });
//     }
// });

 
// app.get('/top10', async (req, res) => {
//     try {
//         const top10Tickers = await Ticker.find().sort({ volume: -1 }).limit(10);
//         res.json(top10Tickers);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'An error occurred while fetching data' });
//     }
// });


// // Start the server
// app.listen(PORT , ()=>  console.log(`Server is running on port ${PORT}`))


import express from "express";
import Conn from "./Database/db.js";
import axios from "axios";
import Ticker from "./Model/TickerModel.js";
import bodyParser from "body-parser";
import cors from "cors";
import Routes from "./routes/Route.js";

const PORT = 8000;
const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);
Conn();

const fetchAndStoreTickers = async () => {
    try {
        const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
        const tickers = response.data;

        // Convert tickers object to an array and sort by volume
        const tickerArray = Object.values(tickers);
        tickerArray.sort((a, b) => b.volume - a.volume);

        // Get top 10 tickers
        const top10Tickers = tickerArray.slice(0, 10);

        // Store each ticker in the database
        await Ticker.deleteMany({}); // Clear the collection before storing new data
        for (const ticker of top10Tickers) {
            const { name, last, buy, sell, volume, base_unit } = ticker;
            const newTicker = new Ticker({ name, last, buy, sell, volume, base_unit });
            await newTicker.save();
        }

        console.log('Top 10 tickers fetched and stored successfully!');
    } catch (error) {
        console.error('An error occurred while fetching data', error);
    }
};

// Fetch and store tickers every minute
setInterval(fetchAndStoreTickers, 10000);

// Fetch and store tickers immediately on server start
fetchAndStoreTickers();

app.get('/top10', async (req, res) => {
    try {
        const top10Tickers = await Ticker.find().sort({ volume: -1 }).limit(10);
        res.json(top10Tickers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching data' });
    }
});

// Start the server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
