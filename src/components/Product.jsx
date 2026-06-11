import QuantityPicker from "./QuantityPicker"
import "./Product.css"
import {useState} from "react";

function Product(props){
    const[quantity, setQuantity] = useState(1)

    function handleQuantityChange(qty)
    {
        console.log("New value", qty);
        setQuantity(qty);
    }
    function getTotal()
    {
        let total = props.data.price * quantity;
        return total.toFixed(2);
    }
    return(
        <div>
            <div className="card" style={{width: "18rem"}}>
            <img src={"/images/"+ props.data.image} className="card-img-top" alt="..."/>
                ,<div className="card-body">
                    <h5 className="card-title">{props.data.title}</h5>
                    <p className="card-text">{props.data.category}</p>
                    <p>Price {props.data.price.toFixed(2)}</p>
                    <p>Total ${getTotal()}</p>
                    <div className="text-center">
                        <QuantityPicker onChange={handleQuantityChange}/>

                        <button href="#" className="btn btn-success mt-4 w-100">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product