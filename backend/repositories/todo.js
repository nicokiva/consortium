'use strict'

var baseRepository = require('./repository').repository.__baseRepository__;

class todoRepository extends baseRepository {

  constructor(provider) {
    super(provider);
  }

}

if (!module.exports.repository) {
  module.exports.repository = {};
}
module.exports.repository.todo = todoRepository;