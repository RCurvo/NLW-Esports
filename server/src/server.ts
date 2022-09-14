import express, { request, response } from 'express';

const app = express()

const PORT = 3333;

app.get('/games', (request, response) => {
    return response.json([]);
})

app.post('/ads', (request, response) => {
    return response.status(201).json([]);
})

app.get("/games/:id/ads", (request, response)=> {
    const gameId = request.params.id  
    return response.json([
        {id: 1, name: "dota",},
        {id: 2, name: "lol",},
        {id: 3, name: "hon",},
        {id: 4, name: "HotS",}
])
})

app.get("/ads/:id/discord", (request, response)=> {
    const adId = request.params.id  
    return response.json([

])
})

app.listen(PORT)