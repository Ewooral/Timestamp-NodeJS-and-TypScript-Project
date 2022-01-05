import express, { Application , Request, response, Response } from 'express';

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get("/", (request, response) => {
    response.sendFile(__dirname + '/views/index.html');
});


app.listen(PORT, () => {
    console.log('Game Api listening on port 3000!');
});

let responseObject: any = {};


app.get('/api/timestamp',  (Request: any, Response: any): any =>{
    responseObject['Current UTC'] = new Date().toUTCString()
    Response.json(responseObject)
});