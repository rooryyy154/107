const catalog = [
    {
        "title":"Victoria 3",
        "category":"Strategy",
        "price": 42.99,
        "image": "victoria.jpeg",
        "_id":"1"
    },
    {
        "title":"Stellaris",
        "category":"Exploration",
        "price": 20,
        "image": "stellaris.jpeg",
        "_id":"2"
    },
    {
        "title":"Kenshi",
        "category":"RPG",
        "price": 5,
        "image": "kenshi.jpeg",
        "_id":"3"
    },
]

class DataService {
    getProduct()
    {
        return catalog;
    }
}

export default DataService;
