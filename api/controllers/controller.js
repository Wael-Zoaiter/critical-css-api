var { exec } = require('child_process');
var fs = require('fs');
var request = require('request');

exports.send_critical_css = function(req, res)
{
  var htmlLink = req.query.html;
  var cssLink = req.query.css;

  create_file(htmlLink, 'html');
  create_file(cssLink, 'css');

  exec('npm run build', function(err, stdout, stderr) {
    if (err) throw err;

    fs.readFile('dist/critical.css', function(err, data) {
      if (err) throw err;
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });
  });
};

function create_file(url, type)
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
