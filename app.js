const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())
let animeData = [
  {
    id: 1,
    name: "Naruto Shippuden",
    numberOfEps: 500,
    genre: "adventure",
  },
  {
    id: 2,
    name: "Avatar The Last Airbender",
    numberOfEps: 61,
    genre: "action",
  },
  {
    id: 3,
    name: "Haikyu!!",
    numberOfEps: 85,
    genre: "sports",
  },
  {
    id: 4,
    name: "Dragon Ball Z",
    numberOfEps: 291,
    genre: "adventure",
  },
  {
    id: 5,
    name: "Sailor Moon",
    numberOfEps: 200,
    genre: "fantasy",
  },
  {
    id: 6,
    name: "One Piece",
    numberOfEps: 1085,
    genre: "adventure",
  },
  {
    id: 7,
    name: "Hunter x Hunter",
    numberOfEps: 148,
    genre: "adventure",
  },
];

app.get('/', (req, res) => {
  res.send('hello world!')
});

app.get('/animes', (req, res) => {
  res.send(animeData)
})

// how might we pinpoint a specific, unique anime? let's brainstorm the route!
app.get('/:id', (req, res) => {
  let id = req.params.id;
  let anime = animeData.filter(data => data.id == id)
  res.send(anime)
})
// what other operations do you think we could add to the ones we already have?

app.listen(3000, () => {
  console.log('Server running at port 3000!')
})


