'use strict'

let baseRepository = require('./baseRepository').repository.__baseRepository__;

class resourceRepository extends baseRepository {

	constructor(provider) {
		super(provider);
	}

}

if (!module.exports.repository) {
  module.exports.repository = {};
}
module.exports.repository.resource = resourceRepository;