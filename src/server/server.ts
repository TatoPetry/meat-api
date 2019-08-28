import  *  as restify from 'restify';

export class Server {

    aplication: restify.Server;

    initRoutes(): Promise<any> {
        return new Promise((resolve, reject) => {
            try {

                this.aplication = restify.createServer({ 
                    name: 'meat-api',
                    version: '1.0.0'
                });

                //routes
                this.aplication.get('/hello', (req, res, next) => {
                    res.header('contentType', 'application/json');
                    res.send({message: 'hello'});
                   return next();
                 });

                this.aplication.listen(3000, () => {
                    resolve(this.aplication);
                  });                  

            }catch(error) {
                reject(error);
            }
        });
    }

    bootstrap(): Promise<Server>{
      return this.initRoutes().then(()=> this);
    }
}