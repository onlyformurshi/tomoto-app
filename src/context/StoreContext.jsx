import React, { useState } from 'react'
import { createContext } from 'react'



export const StoreContext = createContext(null)

function StoreContextProvide({ children }) {
    const [cartItems, setCartItems] = useState({})

        const addToCart = (productId) => {
        !cartItems[productId] ?
            setCartItems((Prev) => ({ ...Prev, [productId]: 1 })) :
            setCartItems((Prev) => ({ ...Prev, [productId]: Prev[productId] + 1 }))
    }

    const removeCart = (productId) => {
        setCartItems((Prev) => ({ ...Prev, [productId]: Prev[productId] - 1 }))

    }

    const totalQuantity = Object.values(cartItems).reduce((acc, quantity) => acc + quantity, 0);

    const contextvalue = {
        addToCart,
        removeCart,
        cartItems,
        totalQuantity

    }

    return (
        <StoreContext.Provider value={contextvalue}>
            {children}
        </StoreContext.Provider>
    )
}

export { StoreContextProvide }
