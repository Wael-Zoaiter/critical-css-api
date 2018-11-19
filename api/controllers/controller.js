var exec = require('child_process').exec;
var fs = require('fs');
var request = require('request');

exports.send_critical_css = function(req, res)
{
  var htmlLink = req.query.html;
  var cssLink = req.query.css;
  var htmlData = req.query.htmlData;
  var cssData = req.query.cssData;
  console.log(htmlLink,cssLink,htmlData,cssData);

  if (htmlLink && cssLink) {
    create_file_link(htmlLink, 'html');
    create_file_link(cssLink, 'css');
  }

  if (htmlData && cssData) {
    create_file_data(htmlData, 'html');
    create_file_data(cssData, 'css');
  }

  exec('webpack', function(err, stdout, stderr) {
    if (err) throw err;
    console.log('..........executing npm........', stdout, stderr);
    fs.readFile('dist/critical.css', function(err, data) {
      if (err) throw err;
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });
  });
};

function create_file_link(url, type)
{
  request({
    uri: url,
  }, function(error, response, body) {
    if (error) throw error;
    var file_path = '';
    if (type == 'html') {
      file_path = 'src/index.html';
    } else if (type == 'css') {
      file_path = 'src/style.css';
    } else {
      throw new Error({message: 'File type should only be .html or .css'});
    }
    fs.writeFile(file_path, body , function(err) {
        if (err) throw err;
    });
  });
};

function create_file_data(data, type)
{
  var file_path = '';
  if (type == 'html') {
    file_path = 'src/index.html';
  } else if (type == 'css') {
    file_path = 'src/style.css';
  } else {
    throw new Error({message: 'File type should only be .html or .css'});
  }
  fs.writeFile(file_path, data , function(err) {
      if (err) throw err;
  });
};
