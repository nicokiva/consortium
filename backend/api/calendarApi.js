'use strict'

let baseApi = require('./baseApi').api.__baseApi__;
let calendarEntity = require('../entities/calendarEntity').entity.calendarEntity;
let resourceEntity = require('../entities/resourceEntity').entity.resourceEntity;
let calendarService = require('../services/calendarService').service.calendarService;

class calendarApi extends baseApi {

  constructor(app, services) {
  	let routes = [{
  		url: '/calendar', method: 'get', httpMethod: 'get',
      url: '/calendar/event', method: 'createEvent', httpMethod: 'post',
  	}];

  	super(app, routes);

    this.services = services;
  }

  createEvent(req, res) {
    console.log(req.body);
  }

  get(req, res) {
  	let resourceId = parseInt(req.query.resourceId);
    if (!resourceId) {

      res.notFound();
      return;
    }

    let resource = this.services.resource.byId(resourceId)
      .then(function(row) {
        res.json(row);
      });
  }

}

if (!module.exports.api) {
  module.exports.api = {};
}
module.exports.api.calendar = calendarApi;