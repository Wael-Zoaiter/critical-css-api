const bodyParser = require('body-parser');

const app = require('express')();
const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const routes = require('./api/routes/routes');
routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found \n Please see: https://github.com/Wael-Zoaiter/critical-css-api/blob/master/README.md'});
});

app.listen(port);
console.log('Server started at port: ', port);
