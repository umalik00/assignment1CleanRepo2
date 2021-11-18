const express = require('express')
const app = express()
const cors = require('cors');
<<<<<<< HEAD

const Queries = require('./models/queries.js');
app.use(express.json())
app.use(cors());


// app.get('/', (req, res) => {
//     const profileData = Profile.names;
//     res.send(profileData);
// });

// app.post('/', (req, res) => {
//     const data = req.body;
//     const newProfile = Profile.create(data);
//     res.status(201).send(newProfile);
// });

app.get('/:search', (req, res) => {
    try {
        console.log(req.params.search)
        const searchResult = req.params.name;
        console.log(searchResult)
        const selectedSearchResults = Queries.findByQuery(searchResult);
        if (!selectedSearchResults) {
            throw new Error("This query does not have results available!");
        } 
        res.send(selectedSearchResults)

    } catch (err) {
        console.log(err)
        res.status(404).send({message: err.message})
    }
})

module.exports = app
=======
const port = 2000



app.use(cors());
const resultsRoutes = require('./controllers/router')
app.use('/results', resultsRoutes);

app.get('/', (req, res) => res.send('Server Homepage'))

app.listen(port, ()=>{
    console.log(`Express departing from http://localhost:${port}`)
})
>>>>>>> 47dcc907bfa2159d6ee7cfdc1549a79f002dc1cc
