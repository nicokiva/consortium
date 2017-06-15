var configuration = require('./configuration').configuration;

var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

let entitiesRepository = require('./factories/entitiesFactory');

let resourceRepository = new (require('./repositories/resourceRepository').repository.resource)({ provider: entitiesRepository.resource });
let resourceService = new (require('./services/resourceService').service.resource)({ resource: resourceRepository });
let resourceApi = new (require('./api/resourceApi').api.resource)(app, { services: { resource: resourceService }, entities: { resource: entitiesRepository.resource } });

app.listen(82);
console.log('App listening on port 82');

module.exports.app = app;