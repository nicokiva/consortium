'use strict'

var baseService = require('./service').service.__baseService__;

class todo extends baseService {

  constructor(repository) {
    super(repository);
  }

}

if (!module.exports.service) {
  module.exports.service = {};
}

module.exports.service.todo = todo;