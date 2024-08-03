import React from 'react'
import { createContext } from 'react'
import { food_list } from '../assets/assets'


export const StoreContext = createContext(null)

function StoreContextProvide({ children }) {
    
    const contextvalue = {
        food_list
    }

    return (
        <StoreContext.Provider value={contextvalue}>
            {children}
        </StoreContext.Provider>
    )
}

export  {StoreContextProvide}
