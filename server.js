const http = require('http');
const ServeStatic = require('serve-static');
var FinalHandler = require('finalhandler');
var Router = require('router');

// add the router
const router = Router();
router.get('/', (req, res) => {
  
  serve(req, res, FinalHandler(req, res));
});
router.get('/*', (req, res) => {
  const serve = ServeStatic('./Game/')
  serve(req, res, FinalHandler(req, res));
});

const server = http.createServer((req, res) => {
  router(req, res, FinalHandler(req, res))
});

server.listen(8000);
