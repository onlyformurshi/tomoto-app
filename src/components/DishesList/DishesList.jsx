import React, { useContext } from 'react'
import './DishesList.css'
import FoodItem from '../FoodItem/FoodItem'
import { StoreContext } from '../../context/StoreContext'


function DishesList({ category }) {
    const { food_list } = useContext(StoreContext)
    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {
                    food_list.map((item, index) => {
                        if (category === 'all' || item.category === category) {
                            return (
                                <FoodItem
                                    key={item.id} // Use a unique identifier if available
                                    id={item.id}
                                    image={item.image}
                                    name={item.name}
                                    price={item.price}
                                    description={item.description}
                                />
                            );
                        }
                        return null; // Explicitly return null if the condition is not met
                    })
                }

            </div>
        </div>
    )
}

export default DishesList
