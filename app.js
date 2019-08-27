let express = require('express');
let app = express();
let ejs = require('ejs');
let bodyParser = require('body-parser');

app.engine('html',ejs.renderFile);
app.set('view engine', 'html'); // config app to handle engine

app.use(bodyParser.urlencoded({extended:false})); //Extended false tells parser to use classic encoding

app.use(express.static('public'));
app.use(express.static('images'));
app.use(express.static('css'));
app.set('portNo',8080);

let db = [];

app.get('/',function(req,res){
    res.render('index.html');
});

app.get('/newTask',function(req,res){
    res.render('newTask.html');
});

app.post('/addNewTask',function(req,res){
    db.push(req.body);
    res.render("index.html");
})

app.get('/listTasks',function(req,res){
    res.render('listTasks.html',{task: db});
});



app.listen(app.get('portNo'));