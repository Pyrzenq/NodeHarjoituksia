// WEB SERVER FOR ELECTRICITY USAGE PLANNING: WEB PAGES AND AN API
// ===============================================================

// LIBRARIES AND MODULES
// =====================

// Use Express as web engine
const express = require('express');
// Use Express Handlebars as template engine
const {engine} = require('express-handlebars');

// EXPRESS APPLICATION SETTINGS
// ----------------------------
const app = express();
const PORT = process.env.PORT || 8080

// Set folder paths
app.use(express.static('public'));
app.set('views', './views');

// Engine settings
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// URL ROUTES
// ----------

// Route to home page
app.get('/', (req, res) => {

    let homePageData = {
        'price': 31.25,
        'wind': 2,
        'temperature': 18
    }
    res.render('index', homePageData)

});

app.get('/hourly', (req, res) => {

    let hourlyPageDate = { 'tabledata': [
        {'hour': 13,
        'price': 31.44},
        {},
        {},
    ]
    };

    res.render('hourly', hourlyPageDate)

});

// START THE LISTENER
app.listen(PORT);
console.log('Server started and it will listen TCP port', PORT);