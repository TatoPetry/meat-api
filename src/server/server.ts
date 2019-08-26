import  *  as restify from 'restify';
import {enviroment} from '../common/enviroments'
import {Router} from '../common/router';

export class Server {

    aplication: restify.Server;

    initRoutes(routers: Router[]): Promise<any> {
        return new Promise((resolve, reject) => {
            try {

                this.aplication = restify.createServer({
                    name: 'meat-api',
                    version: '1.0.0'
                });

                this.aplication.use(restify.plugins.queryParser());

                //routes

                for (let router of routers) {
                  router.applyRoutes(this.aplication);
                }


                this.aplication.get('/info', (req, res, next) => {
                    if(req.userAgent() && req.userAgent().includes) {

                    }
                   return next();
                 });

                this.aplication.listen(enviroment.server.port, () => {
                    resolve(this.aplication);
                  });
                  

            }catch(error) {
                reject(error);
            }
        });

    }

    bootstrap(routers: Router[]): Promise<Server>{
      return this.initRoutes(routers).then(()=> this);
    }
}