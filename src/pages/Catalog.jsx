import Product from '../components/Product'
import DataService from '../services/dataService'
import { useEffect, useState } from "react";

function Catalog(){
    //cons products = [];
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);// to hold the category
    const [productsToDisplay, setProductsToDisplay] = useState([]);

    useEffect(()=>{
    //load data
    let service = new DataService();
    let data = service.getProduct();
    setProducts(data);
    loadCatalog();
    },[] //The empty array means this effect runs only ONCE
    )

function loadCatalog(){
    let service = new DataService();
    let data = service.getProduct();
    setProducts(data);
    setProductsToDisplay(data);//iniatilly, dispay all the products[]

    //Move this to a service later
    let cats = ["Strategy","Exploration","RPG"]
    setCategories(cats)
}

function clearFilter(){
    setProductsToDisplay(products);
}

function filter(category)
{
    let list=[];
    //find the producs that match the category that the user select
    for(let i=0;i<products.length;i++)
    {
        let prod = products[i]
        if (prod.category == category)
        {
            list.push(prod);
        } 
    }
    setProductsToDisplay(list);
}
    return (
        <div className="container bg-primary-subtle p-4 rounded">
            <h1>Welcome to the GameZone!</h1>
            <p>These are our available games!</p>
            <div className="mb-3">
                <button className="btn btn-primary me-2" onClick={clearFilter}>All</button>
                {categories.map(cat => <button className="btn btn-primary me-2" key={cat} onClick={() => filter(cat)}>{cat}</button>)}
            </div>
            <div className="d-flex flex-wrap gap-3 mb-5">
                {productsToDisplay.map(prod => <Product key={prod._id} data={prod}/>)}
            </div>
        </div>
    )
}

export default Catalog;