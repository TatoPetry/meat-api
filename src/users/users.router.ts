import {Router} from '../common/router';
import  *  as restify from 'restify';
import {User} from './users.model';

class UsersRouter extends Router {
    applyRoutes(application: restify.Server) {
        application.get('/users', (req, res, next) => {
            User.findAll().then(user => {
                res.json(user);
                return next();
            })
        })
    }
}

export const usersRouter = new UsersRouter();