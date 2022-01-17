import express, { Application, request } from 'express';

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Game API server is listening on port 3000!');
});

let responseObject: any = {};


app.get('/api/timestamp/:input',  (Request: any, Response: any): any =>{
    let input: string = Request.params.input;
    if (input.length > 0) {
        let date: Date = new Date(input);
        if (date.toString() === 'Invalid Date') {
            Response.status(400).send('Invalid Date');
        } else {
            responseObject = {
                unix: date.getTime(),
                utc: date.toUTCString()
            };
            Response.send(responseObject);
        }
    } else {
        responseObject = {
            unix: new Date().getTime(),
            utc: new Date().toUTCString()
        };
        Response.send(responseObject);
    }
});
app.get('/api/timestamp/',  (Request: any, Response: any): any =>{
    responseObject['Unix Epoch Timestamp:'] = new Date().getTime();
    Response.json(responseObject);
});

app.get(`/api/details/name`,  (Request: any, Response: any): any =>{
    let detail:any = {
        firstName: "Elijah Owusu Boahene",
        lastName: "Owusu",
        HNGi7ID: "HNG-01077",
        email: "boahen.cos@gmail.com"
    }; 
    Response.json(detail)
       
});

// given a string length 1 to 1000, lowercase letters, find the first 
// non-repeating character in the string.


