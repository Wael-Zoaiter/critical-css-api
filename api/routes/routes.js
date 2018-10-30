module.exports = function(app) {
  var CriticalCss = require('../controllers/controller');

  app.get('/api', CriticalCss.send_critical_css);
};
