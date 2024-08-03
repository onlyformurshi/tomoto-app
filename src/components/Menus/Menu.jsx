import React from 'react'
import { menu_list } from '../../assets/assets'
import './Menu.css'

function Menu({ category, setCategory }) {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore our Menu</h1>
            <p className='explore-menu-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut mollitia adipisci totam accusamus rerum, similique ex ad! Alias, repellendus maxime soluta a quasi nostrum. Enim provident fugit quos repellendus dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="explore-menu-list">
                {menu_list.map((item, index) => (
                    <div
                        onClick={() => setCategory(prev => prev === item.menu_name ? 'all' : item.menu_name)}
                        key={index}
                        className="explore-menu-list-item"
                    >
                        <img
                            className={category === item.menu_name ? 'active' : ''}
                            src={item.menu_image}
                            alt={item.menu_name}
                        />
                        <p>{item.menu_name}</p>
                    </div>
                ))}
            </div>
            <hr />
        </div>
    )
}

export default Menu
