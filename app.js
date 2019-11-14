const express = require("express");

const path = require('path');

const app = express();

const PORT = 5000; 

//middleware
app.use('/assert', express.static(path.resolve(__dirname, 'public')));

// view folder is where our template engine files will sit
app.set('views', path.resolve(__dirname, 'view'))
//setting the template to pug
app.set('view engine', 'pug')

//route
app.get('/', function (req, res)
{
    return res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/person/:name', function (req, res)
{
    console.log(req.params);
    console.log(req.query)
    return res.render('person',
        {name: req.params.name, });
});

//to make your server go live on the port
app.listen(PORT, function(){
    console.log(`server running on po
    rt ${PORT}`);
});