'use strict'

let configuration = require('../configuration').configuration;
let availableHeaders = require('./enums').helpers.headers;
let availableStatusCodes = require('./enums').helpers.statusCodes;

class successResponse {

	getUrl(clazz, id) {
		return configuration.locationHeader.replace('{RESOURCE}', clazz)
											.replace('{ID}', id);
	}

}

class createResponse extends successResponse {
	
	constructor(clazz, entity) {
		super();

		let headers = {};
		headers[availableHeaders.location] = super.getUrl(clazz, entity.get('id'));

		return {
			statusCode: availableStatusCodes.created,
			headers: headers
		};
	}

}

class defaultResponse extends successResponse {

	constructor(entities) {
		super();

		return {
			statusCode: availableStatusCodes.ok,
			body: entities
		};
	}

}


if (!module.exports.helpers) {
 	module.exports.helpers = {};
}

module.exports.helpers.successfulResponseHelper = {
	createResponse: createResponse,
	defaultResponse: defaultResponse
}