'use strict';

var url = require('url');

var Runner = require('./RunnerService');

module.exports.createRunner = function createRunner (req, res, next) {
  Runner.createRunner(req.swagger.params, res, next);
};

module.exports.getRunner = function getRunner (req, res, next) {
  Runner.getRunner(req.swagger.params, res, next);
};

module.exports.updateRunner = function updateRunner (req, res, next) {
  Runner.updateRunner(req.swagger.params, res, next);
};
