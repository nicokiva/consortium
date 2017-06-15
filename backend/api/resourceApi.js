'use strict'

let baseApi = require('./baseApi').api.__baseApi__;

class resourceApi extends baseApi {

  constructor(app, dependencies) {
  	let routes = [
      { url: '/resource', method: 'getAll', httpMethod: 'get' },
      { url: '/resources', method: 'create', httpMethod: 'post' },
      { url: '/resource/:id', method: 'get', httpMethod: 'get' },
      { url: '/resource/:id', method: 'delete', httpMethod: 'delete' },
      { url: '/resource/:id', method: 'replaceBy', httpMethod: 'put' },
    ];

  	super(app, routes, 'resource', dependencies);
  }

}

if (!module.exports.api) {
  module.exports.api = {};
}
module.exports.api.resource = resourceApi;