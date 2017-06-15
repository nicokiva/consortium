'use strict'

class baseService {

  constructor(repository) {
    if (!repository) {
      throw 'missing repository';
    }

    this._repository = repository;
  }

  byId(id, entityName) {
    var self = this;

    return this._repository.byId(id)
      .then(function(entity) {
        if(!entity) {
          return;
        }

        if (!entityName) {
          return entity;
        }

        return self.parseEntity(entity, entityName);
      });
  }

  by(filter) {
    return this._repository.find(filter)
    .then(function(entities) {
        return entities;
      });
  }

  getAll() {
    return this.by();
  }

  create(entity) {  
    return this._repository.create(entity);
  }

  remove(entity) {
    return this._repository.remove(entity);
  }

  replaceBy(entity, newData) {
    for(let k in newData) {
      entity[k] = newData[k];
    }

    return this._repository.update(entity);
  }

}

if (!module.exports.service) {
  module.exports.service = {};
}
module.exports.service.__baseService__ = baseService;