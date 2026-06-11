import { useState } from "react";
import GlobalContext from './globalContext';

function GlobalProvider(props){
    const [cart, setCart] = useState({});
    const [user, setUser] = useState({name: 'Arturo', cohort: '67'});

    function addProductToCart(product) {
        setCart([...cart, product])
    }

    function clearCart(){
        setCart([])
    }

    function removeProductFromCart(productId){
        const updatedCart = cart.filter(product => product._id != productId)
        setCart(updatedCart) // update the cart state with the filtered list
    }

    // return the context provider
    return(
        <GlobalContext.Provider value={{
            cart: cart,
            user: user,
            addProductToCart: addProductToCart,
            clearCart: clearCart,
            removeProductFromCart: removeProductFromCart
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;