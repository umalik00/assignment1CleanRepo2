const searchData = require('../data');


class Searches {
    constructor(data) {
        this.title = data.title;
        this.url = data.url;
        this.description = data.description;
        
    }

    static getAll() {
        const searches = searchData.map((search) => new Searches(search))
        return searches
    }

    static get titles(){
        const searches = searchData.map((search)=> search.title)
        return searches;
    }
    static get description(){
        const searches = searchData.map((search)=> search.description)
        return searches;
    }
    static get url(){
        const searches = searchData.map((search)=> search.url)
        return searches;
    }

    static findByTitle(title) {
        const searchesData = searchData.filter((search) =>search.title === title)[0];

        if (!searchesData) {
            return;
        }
        const search = new Searches(searchesData);
        return search;
    }

}

module.exports = Searches