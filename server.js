const express = require('express');
const exphbs = require('express-handlebars');

var app = express();

const port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
})); 

app.set('view engine', 'handlebars');
app.use(express.static('public'));

//ROUTES

app.get('/', (req, res) => {
    res.render('home');
});


app.listen(port, () => {
    console.log(`Sever is running on port ${port}`);
});
