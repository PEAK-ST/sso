import * as express from 'express';
import * as bodyParser from "body-parser";
import { Request, Response } from "express";

class App {
    public app: express.Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    /**
     * This method is to set the configuration
     */
    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    /**
     * This method is to route
     */
    private routes(): void {
        const router = express.Router();

        router.get('/', (req: Request, res: Response) => {
            res.status(200).send({
                message: 'Hello World!'
            })
        });

        router.post('/', (req: Request, res: Response) => {
            const data = req.body;
            res.status(200).send(data);
        });

        router.post('/register', (req: Request, res: Response) => {
            const mobileNo = req.body;
            res.status(200).send(mobileNo);
        });
        
        this.app.use('/', router);
    }

}

export default new App().app;