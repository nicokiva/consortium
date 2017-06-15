'use strict'

let availableHeaders = require('./enums').helpers.headers;
let availableStatusCodes = require('./enums').helpers.statusCodes;

class WrappedServerResponseHelper {
	
	constructor(response) {
		if (!response) {
			throw 'Invalid response';
		}

		this.response = response;
	}

	json(content) {
		this.showResponse(content.statusCode, content.headers, content.body);
	}

	setHeader(key, value) {
		this.response.setHeader(key, value);
	}

	notFound() {
		this.showResponse(availableStatusCodes.notFound);
	}

	serverError(error) {
		this.showResponse(availableStatusCodes.internalServerError, null, { error : error.toString() });
	}

	showResponse(statusCode, headers, content) {
		if (!this.response) {
			throw 'Invalid response';
		}

		if (!headers) {
			headers = { };
		}
		headers[availableHeaders.contentType] = 'application/json';

		this.response.writeHead(statusCode, headers);

		if (!content) {
	      	this.response.end();
	      	return;
      	}

      	this.response.end(JSON.stringify(content));
	}

}

if (!module.exports.helpers) {
  module.exports.helpers = {};
}
module.exports.helpers.wrappedServerResponseHelper = WrappedServerResponseHelper;