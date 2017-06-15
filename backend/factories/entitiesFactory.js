'use strict'

let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/node_angular');

let resourceSchema = mongoose.Schema({
	code: String,
	description: String,
	enabled: Boolean
}, { 
	versionKey: false 
});

let resourceModel = mongoose.model('ResourceModel', resourceSchema);

module.exports.resource = resourceModel;