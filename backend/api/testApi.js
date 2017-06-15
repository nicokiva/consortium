'use strict'

let baseApi = require('./baseApi').api.__baseApi__;

class testApi extends baseApi {

  constructor(app) {
  	let routes = [{
  		url: '/test/a', method: 'doStuff', httpMethod: 'get'
  	}];

  	super(app, routes);
  }

  doStuff(req, res) {
  	console.log('test');
  }


}

if (!module.exports.api) {
  module.exports.api = {};
}
module.exports.api.test = testApi;