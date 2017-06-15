'use strict'

let availableStatusCodes = require('./enums').helpers.statusCodes;

class errorResponse {	

}

class notFoundResponse extends errorResponse {

	constructor() {
		return {
			statusCode: availableStatusCodes.notFound
		};
	}

}

if (!module.exports.helpers) {
 	module.exports.helpers = {};
}

module.exports.helpers.errorResponseHelper = {
	notFoundResponse: notFoundResponse
}