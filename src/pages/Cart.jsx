import {useContext} from "react";
import GlobalContext from "../state/globalContext";

function Cart() {
    const cart = useContext(GlobalContext).cart;
    const removeProduct = useContext(GlobalContext).removeProductFromCart;

    function getTotalItems(){
        let total = 0;

        for(let index=0; index<cart.length; index++){
            total = total + cart[index].quantity
        }

        return total
    }

    function getTotal() {
        let total = 0;

        for(let index=0; index<cart.length; index++) {
            total = total + cart[index].price * cart[index].quantity
        }

        return total;
    }

    return(
        <div className="bg-primary-subtle p-4 rounded">
            <div className="bg-primary text-white p-3 rounded mb-4">
                <h1>Ready to complete the purchase?</h1>
            </div>

            <div>
                {cart.map(product =>(
                    <div className="d-flex justify-content-between align-items-center mb-4 border bg-white p-2 rounded">
                        <img width={200} src={'/images/' + product.image}/>
                        <h4>{product.title}</h4>
                        <h5>{product.category}</h5>
                        <div>QTY: {product.quantity}</div>
                        <div>Price: ${product.price}</div>
                        <div>$ {product.quantity * product.price}</div>
                        <button className="btn btn-danger m-4" onClick={() => removeProduct(product._id)}>Remove</button>
                    </div>
                ))}
            </div>

            <h3>We have {getTotalItems()} Products in the cart</h3>
            <h3>Total: {getTotal()}</h3>

        </div>
    )
}

export default Cart