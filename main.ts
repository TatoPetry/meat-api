import  *  as restify from 'restify';

const server = restify.createServer({
    name: 'meat-api',
    version: '1.0.0'
});

server.use(restify.plugins.queryParser());

server.get('/hello', (req, res, next) => {
   res.header('contentType', 'application/json');
   res.send({message: 'hello'});
  return next();
});

server.listen(3000, () => {
  console.log('meat-api is running in 3000 port');
});
