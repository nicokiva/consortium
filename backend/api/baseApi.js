'use strict'

let successfulResponseHelper = require('../helpers/successfulResponseHelper').helpers.successfulResponseHelper;
let errorResponseHelper = require('../helpers/errorResponseHelper').helpers.errorResponseHelper;
let wrappedServerResponseHelper = require('../helpers/wrappedServerResponseHelper').helpers.wrappedServerResponseHelper;

class baseApi {
	
	constructor(app, routes, entityName, dependencies) {
		if (!app || !routes || routes.length === 0) {
			throw 'Missing app or routes';
		}

		this._services = dependencies.services;
		this._entities = dependencies.entities;
		this._entityName = entityName;
		baseApi.registerRoutes(app, routes, this);
	}

	getAll(req, res) {
		this._services[this._entityName].getAll(this._entityName)
		  	.then(function(entities) {
				res.json(new successfulResponseHelper.defaultResponse(entities));
			});
	}

	get(req, res) {
	    let id = req.params.id;

	    this._services[this._entityName].byId(id)
	      	.then(function(entity) {
	        	if (!entity) {
	          		res.json(new errorResponseHelper.notFoundResponse());
	          		return;
	        	}

	        	res.json(new successfulResponseHelper.defaultResponse(entity));
	      	});
	}

    create(req, res) {
	    let self = this;

	    let entity = new this._entities[this._entityName](req.body);
	    this._services[this._entityName].create(entity)
      		.then(function(entity) {
				res.json(new successfulResponseHelper.createResponse(self._entityName, entity));
	      	});
	}

	delete(req, res) {
		let self = this;
		let id = req.params.id;

		this._services[this._entityName].byId(id)
			.then(function(entity) {
				if (!entity) {
				  res.json(new errorResponseHelper.notFoundResponse());
				  return;
				}

				self._services[self._entityName].remove(entity)
				  .then(function() {
				    res.json(new successfulResponseHelper.defaultResponse());
				  });
			});
	}

	replaceBy(req, res) {
		let self = this;
		let id = req.params.id;

		this._services[this._entityName].byId(id)
			.then(function(entity) {
				if (!entity) {
				  res.json(new errorResponseHelper.notFoundResponse());
				  return;
				}

				self._services[self._entityName].replaceBy(entity, req.body)
					.then(function() {
						res.json(new successfulResponseHelper.defaultResponse());
					});
			});
	}


	static registerRoutes(app, routes, caller) {
		for(let i = 0; i < routes.length; i++) {
			let route = routes[i];

			if (!route.url || !route.method || !route.httpMethod) {
				throw 'Error when registering route: Missing url or method name or http method';
			}

			app[route.httpMethod](route.url, function(req, res) {
				let wrappedResponse = new wrappedServerResponseHelper(res);
				try {
					caller[route.method](req, wrappedResponse);
				} catch (e) {
					wrappedResponse.serverError(e);
				}
			});
		}
	}

}

if (!module.exports.api) {
  module.exports.api = {};
}
module.exports.api.__baseApi__ = baseApi;