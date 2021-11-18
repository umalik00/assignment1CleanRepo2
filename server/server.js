const express = require('express')
const app = express()
const cors = require('cors');

const Searches = require('./models/searches');
app.use(express.json())
app.use(cors());

app.get('/', (req, res) => {
    const searchData = Searches.names;
    res.send(searchData);
});

app.get('/all/:name', (req, res) => {
    try {
        console.log(req.params.name)
        const searchTitle = req.params.name;
        console.log(searchTitle)
        const selectedSearch = Searches.findByTitle(searchTitle);
        if (!selectedSearch) {
            throw new Error("This search does not exist!");
        } 
        res.send(selectedSearch)

    } catch (err) {
        console.log(err)
        res.status(404).send({message: err.message})
    }
})

app.get('/all', (req, res) => {
    try {
        console.log(req.params.title)
        const searchTitle = req.params.title;
        console.log(searchTitle+"TITLE")
        const selectedSearch = Searches.getAll();
        console.log(selectedSearch[0].title+"Searches")
        res.send(selectedSearch)

    } catch (err) {
        console.log(err)
        res.status(404).send({message: err.message})
    }
})

module.exports = app