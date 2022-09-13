import express from 'express';

const app = express()

const PORT = 3333;

app.get("/ads", (request, response)=> {
return response.json([
    {id: 1, name: "dota",},
    {id: 2, name: "lol",},
    {id: 3, name: "hon",},
    {id: 4, name: "HotS",}
])
})

app.listen(PORT)