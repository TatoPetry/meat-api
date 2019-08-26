import {Server} from './src/server/server'

const server = new Server();
server.bootstrap().then(server => {
  console.log('Server is listening on:', server.aplication.address);
}).catch(error => {
  console.log('Server failed to start');
  console.error(error);
  process.exit(1);
});