import { createContext, useState } from "react";

export const CartContext = createContext(null)

export const ShoppingCartProvider = ({
    children }) => {

    const [cart, setCart] = useState([])

    const addToCart = (item,quantity) => {
        
    }
    
    const clearCart = () => {

    }

    const isInCart = () => {

    }

    const deleteItem = () => {

    }

    const totalPrecio = () => {
        
    }

    const totalProductos = () => {
        
    }

    return (

        <CartContext.Provider value={{}}>
            {children}
        </CartContext.Provider>
    )


}


export default ShoppingCartProvider