'use strict';

let runners = [];

exports.getRunnerObj = (name) => {
  for (let i = 0; i < runners.length; i++) {
    if(runners[i].username === name) {
      return runners[i];
    }
  }
  return null;
}

exports.getRunnerPos = (name) => {
  for (let i = 0; i < runners.length; i++) {
    if(runners[i].username === name) {
      return i;
    }
  }
  return -1;
}

exports.createRunner = (args, res, next) => {
  /**
   * Create user
   * Create a new user
   *
   * body Runner Created user object
   * no response value expected for this operation
   **/
  
  runners.push(args.body.originalValue);
  res.end();
}

exports.getRunner = (args, res, next) => {
  /**
   * Get runner
   * Get a runner
   *
   * username String The username of the runner
   * returns Runner
   **/
  res.setHeader('Content-Type', 'application/json');
  let obj = exports.getRunnerObj(args.username.originalValue);
  if(obj !== null) {
    res.end(JSON.stringify(obj, null, 2));
  } else {
    res.statusCode = 404;
    res.end();
  }
}

exports.updateRunner = (args, res, next) => {
  /**
   * Modify runner
   * Modify runner
   *
   * username String The username of runner
   * body Integer Modified team object
   * no response value expected for this operation
   **/
  const pos = exports.getRunnerPos(args.username.originalValue);
  if(pos !== -1) {
    runners[pos].meters = runners[pos].meters + args.body.value
  } else {
    res.statusCode = 404;
  }
  res.end();
}

