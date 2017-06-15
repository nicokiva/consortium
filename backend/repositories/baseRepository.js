'use strict'

class baseRepository {

  constructor(params) {
    if (!params || !params.provider) {
      throw 'missing provider';
    }

    this._provider = params.provider;
  }

  byId(id) {
    return this._provider.findById(id, function(err, row) {
      if (err) {
        throw err;
      }

      return row;
    });
  }

  find(filters) {
    return this._provider.find(filters, function(err, rows) {
      if (err) {
        throw err;
      }

      return rows;
    });
  };

  create(entity) {
    return entity.save();
  };

  remove(entity) {
    return this._provider.remove(entity, function(err, response) {
      if (err) {
        throw err;
      }
    });
  };

  update(entity) {
    return entity.save(function(err, response) {
      if (err) {
        throw err;
      }
    });
  }

}

if (!module.exports.repository) {
  module.exports.repository = {};
}
module.exports.repository.__baseRepository__ = baseRepository;