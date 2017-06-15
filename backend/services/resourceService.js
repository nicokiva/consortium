'use strict'

var baseService = require('./baseService').service.__baseService__;

class resourceService extends baseService {

  constructor(repository) {
    super(repository.resource);
  }

}

if (!module.exports.service) {
  module.exports.service = {};
}

module.exports.service.resource = resourceService;