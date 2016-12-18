// server entry point
import * as IO from "socket.io";
import * as express from "express";
import methodOverride = require("method-override");
import bodyParser = require("body-parser");
import morgan from "morgan";
import * as winston from "winston";
import * as cluster from "cluster";
import { cpus } from 'os';

const serverPort = process.env.PORT || 5000;

const numCPUs = cpus().length;

if (cluster.isMaster) {
    for (var i = 0; i < numCPUs; i++) {
        winston.info(`forking workeer #${i}`);
        cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) => {
        winston.warn(`worker ${worker.process.pid} died`);
    });
} else {

    // express app config
    const app: express.Application = express();
    app.set('port', serverPort);
    app.use(express.static('./www'));
    const server = app.listen(
        app.get('port'),
         '0.0.0.0', 
         (err) => {
        (err) 
        ? winston.error('Plague server failed to start', err)
        : winston.info(`Plague server started on ${serverPort}`);
        
    });

    // socket.io config
    const io = IO();
    io.attach(server);
    io.on("connection", function (socket: SocketIO.Socket) {
        winston.info("Socket connected: ", socket.id);
        socket.on("action", (action) => {
            if (action.type === "server/hello") {
                winston.info("Got hello data!", action.data);
                socket.emit("action", { type: "message", data: "good day!" });
            }
        });
    });

    class PlagueRoutes {
        app: express.Application;
        constructor(app: express.Application) {
            this.app = app;
            // app.get('/', this.getIndex);
            // app.get('/settings', this.getSettings);
            // app.get('/game', this.getGame);
        }
        getIndex(req: express.Request, res: express.Response, next: express.NextFunction) {
            winston.info('index request');
            res.sendFile('./www/index.html');
        }
        getSettings(req: express.Request, res: express.Response, next: express.NextFunction) {
            winston.info('settings request');
        }
        putSettings(req: express.Request, res: express.Response, next: express.NextFunction) {

        }

    }
    // routes:
    new PlagueRoutes(app);
    // models
    //Hero
    //Party(Session/channel)
    //Turn
    //Actions
    //Scores
    //Items
    //City
    //Tiles

}
