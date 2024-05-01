// const { addDays } = require("date-fns");
// const result = addDays(new Date(2021, 0, 20), 3)
// console.log(result)
const express = require('express')
const app = express()

app.get('/', (request, response) => {
    response.send('Hello World!')
  });
app.get('/date', (request, response) => {
    let date = new Date();
  response.send(`Today Date us ${date}`);
});
app.get("/page", (request, response) =>{
    response.sendFile("./page.html", {root:__dirname})
});
app.listen(3000)