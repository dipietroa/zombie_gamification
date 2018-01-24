'use strict';

var url = require('url');

var Org = require('./OrgService');

module.exports.createOrg = function createOrg (req, res, next) {
  Org.createOrg(req.swagger.params, res, next);
};

module.exports.getOrg = function getOrg (req, res, next) {
  Org.getOrg(req.swagger.params, res, next);
};

module.exports.updateOrg = function updateOrg (req, res, next) {
  Org.updateOrg(req.swagger.params, res, next);
};
