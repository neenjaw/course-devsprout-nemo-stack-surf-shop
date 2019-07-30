module.exports = {
  runMiddlewarePipeline (req, res, next, pipelineMiddlewares) {
    function runPipeline(req, res, pipeline) {
      const middleware = pipeline.next().value;

      middleware(req, res, ()=>runPipeline(req, res, pipeline));
    }

    pipelineMiddlewares = [...pipelineMiddlewares, next];

    const pipelineGenerator = function* (p) {
      while (p.length != 0) {
        yield p.shift();
      }
    };

    const pipeline = pipelineGenerator(pipelineMiddlewares);

    runPipeline(req, res, pipeline);
  }
};