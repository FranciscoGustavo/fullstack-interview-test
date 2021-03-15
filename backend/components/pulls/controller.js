const Controller = (service) => {
  const findAll = async (req, res, next) => {
    const { author, repositoryName } = req.params;
    const { state } = req.query;
    try {
      const retrievedPulls = await service.findAll(
        `${author}/${repositoryName}`,
        { state }
      );
      return res.status(200).json(retrievedPulls);
    } catch (error) {
      return next(error);
    }
  };

  const compareBranches = async (req, res, next) => {
    const { author, repositoryName, base, compare } = req.params;
    try {
      const comparedBranches = await service.compareBranches(
        `${author}/${repositoryName}`,
        base,
        compare
      );
      return res.status(200).json(comparedBranches);
    } catch (error) {
      return next(error);
    }
  };

  return {
    findAll,
    compareBranches,
  };
};

module.exports = Controller;
