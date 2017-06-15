'use strict'

var baseService = require('./baseService').service.__baseService__;

class calendarService extends baseService {

  constructor(repository) {
    super(repository);
  }

}

if (!module.exports.service) {
  module.exports.service = {};
}

module.exports.service.calendarService = calendarService;