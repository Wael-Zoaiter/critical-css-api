module.exports = function(app) {
  var CriticalCss = require('../controllers/controller');

  app.get('/api/html=:htmlLink/css=:cssLink', CriticalCss.send_critical_css);
};
