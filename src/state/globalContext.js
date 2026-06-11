import { createContext } from "react";

const GlobalContext =  createContext({
    cart: [],
    user: {},

    addProductToCart: () => {},
    clearCart: () => {},
    removeProductFromCart: () => {}
})

export default GlobalContext;