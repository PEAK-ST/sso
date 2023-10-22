import app from "./app";
import * as http from "http";

const server = http.createServer(app);

app.set('port', (process.env.PORT || 3000));

server.listen(app.get('port'), ():void  => {
    return console.log(`server is running on http://localhost:${app.get('port')}`);

});