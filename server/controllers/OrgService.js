'use strict';
var Runner = require('./RunnerService');

let teams = []

exports.getOrgPos = (name) => {
  for (let i = 0; i < teams.length; i++) {
    if(teams[i].name === name) {
      return i;
    }
  }
  return -1;
}

exports.createOrg = function(args, res, next) {
  /**
   * Create org
   * Create a new team
   *
   * body Organization Created team object
   * no response value expected for this operation
   **/
  teams.push(args.body.originalValue);
  res.end();
}

exports.getOrg = function(args, res, next) {
  /**
   * Get org
   * Get a org
   *
   * name String The id of the team
   * returns Organization
   **/
  for (let i = 0; i < teams.length; i++) {
    if(teams[i].name === args.name.originalValue) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(teams[i], null, 2));
    }
  }
  res.statusCode = 404;
  res.end();
}

exports.updateOrg = function(args, res, next) {
  /**
   * Modify org (generally adding or removing users)
   * Modify an existing team
   *
   * name String The id of the team that needs to be fetched
   * body String Modified team object
   * no response value expected for this operation
   **/
  let obj = Runner.getRunnerObj(args.body.value);
  let pos = exports.getOrgPos(args.name.originalValue);

  teams[pos].members.push(obj);

  res.end();
}
