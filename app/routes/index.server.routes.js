module.exports = function(app) {
    var index = require('../controllers/index.server.controller');
    app.get('/', index.render);
    
    var about = require('../controllers/about.server.controller');
    app.get('/about', about.render);
    
    var contact = require('../controllers/contact.server.controller');
    app.get('/contact', contact.render);
    
    var projects = require('../controllers/projects.server.controller');
    app.get('/projects', projects.render);
    
    var services = require('../controllers/services.server.controller');
    app.get('/services', services.render);
    
    
    
}