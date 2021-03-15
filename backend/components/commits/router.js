const express = require('express');
const router = express.Router();

const { GitHubRepository } = require('../../utils/githubClient');
const Model = require('./model');
const Service = require('./service');
const Controller = require('./controller');

const model = Model(GitHubRepository);
const service = Service(model);
const { findAll, findOne } = Controller(service);

router.get('/:author/:repositoryName/branches/:branchName/commits', findAll);
router.get(
  '/:author/:repositoryName/branches/:branchName/commits/:commitSha',
  findOne
);

module.exports = router;
