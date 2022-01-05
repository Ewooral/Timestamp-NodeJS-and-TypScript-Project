import express, { Application } from 'express';

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Game API server is listening on port 3000!');
});

let responseObject: any = {};


app.get('/api/timestamp',  (Request: any, Response: any): any =>{
    responseObject['Current Server Time in UTC'] = new Date().toUTCString()
    Response.json(responseObject)
});