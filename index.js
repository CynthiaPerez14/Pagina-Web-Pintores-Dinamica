const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine','hbs');

hbs.registerPartials(__dirname + '/views/partials/')

app.use(express.static(__dirname + '/public'));

// archivo index
app.get('/', (req, res)=>{
    res.render('index', {
        autor: 'Cynthia Perez',
        year: new Date().getFullYear(),
        title : 'Mis pintores favoritos',

    });
});

// archivo edvard munvh
app.get('/davinci', (req, res)=>{
    res.render('leo',{
        autor: 'Cynthia Perez',
        year: new Date().getFullYear(),
        title : 'Leonardo da Vinci',
        p : 'Previous',
        n : 'Next',

    });
});

// archivo alberto durero
app.get('/pablo', (req, res)=>{
    res.render('picasso',{
        autor: 'Cynthia Perez',
        year: new Date().getFullYear(),
        title : 'Pablo Picasso',
        p : 'Previous',
        n : 'Next',

    });
});

// archivo pablo pedro rubnes
app.get('/vangogh', (req, res)=>{
    res.render('vincent',{
        autor: 'Cynthia Perez',
        year: new Date().getFullYear(),
        title : 'Vincent Van Gogh',
        p : 'Previous',
        n : 'Next',

    });
});

// archivo gustave caillebotte
app.get('/Carrington', (req, res)=>{
    res.render('leonora',{
        autor: 'Cynthia Perez',
        year: new Date().getFullYear(),
        title : 'Leonora  Carrington',
        p : 'Previous',
        n : 'Next',

    });
});




app.listen(3000, ()=>{
    console.log('escuchando el puerto 3000');



});