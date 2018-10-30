const bodyParser = require('body-parser');

const app = require('express')();
const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const routes = require('./api/routes/routes');
routes(app);

app.use(function(req, res) {
  res.status(404).send(`<p>url "${req.originalUrl}" Not Found!</p><strong>Please visit:<a href="https://github.com/Wael-Zoaiter/critical-css-api/blob/master/README.md">Getting Started</a> for information about using this API.</strong>`);
});

app.listen(port);
console.log('Server started at port: ', port);
