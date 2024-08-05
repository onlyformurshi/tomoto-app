import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import './FoodItem.css'
import { StoreContext } from '../../context/StoreContext'
function FoodItem({ id, image, name, price, description }) {
    const { addToCart, removeCart, cartItems } = useContext(StoreContext)
    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img src={image} className='food-item-image' alt="" />
                {!cartItems[id] ?
                    <img onClick={() => addToCart(id)} className='add' src={assets.add_icon_white} alt="" /> :
                    <div className="food-item-counter">
                        <img onClick={() => removeCart(id)} src={assets.remove_icon_red} alt="" />
                        <p>{cartItems[id]}</p>
                        <img onClick={() => addToCart(id)} className='' src={assets.add_icon_green} alt="" />
                    </div>}


            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food-item-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ad quis quidem, porro eum modi optio dolorum tenetur deserunt veritatis praesentium ab iste ipsa rerum amet eaque! Fugiat, ex inventore!</p>
                <p className="food-item-price">$100</p>

            </div>
        </div>
    )
}

export default FoodItem
