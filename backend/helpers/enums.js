if (!module.exports.helpers) {
  module.exports.helpers = {};
}

let statusCodes = {
	ok: 200,
	created: 201,
	accepted: 202,
	noContent: 204,

	notFound: 404,

	internalServerError: 500
}

module.exports.helpers.statusCodes = statusCodes;

let headers = {
	contentType: 'Content-Type',
	location: 'Location'
};

module.exports.helpers.headers = headers;