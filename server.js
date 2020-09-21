const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set('view engine', ejs);

app.get('/', (req, res) => {
    var today = new Date();
    var day = "";

    switch(today.getDay()){
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            day = "the end of the world!"
            break;
    }

    res.render('index.ejs', {weekDay: day});
});

port = 3636;

app.listen(port, () => {
    console.log('Server running on port: ' + port);
});

