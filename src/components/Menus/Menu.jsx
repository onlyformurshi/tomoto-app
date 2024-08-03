import React, { useContext } from 'react'
import './Menu.css'
import { ApiContext } from '../../context/ApiContext'

function Menu({ category, setCategory }) {
    const { menu_list } = useContext(ApiContext)
    console.log(menu_list, 'menu_list')
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore our Menu</h1>
            <p className='explore-menu-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut mollitia adipisci totam accusamus rerum, similique ex ad! Alias, repellendus maxime soluta a quasi nostrum. Enim provident fugit quos repellendus dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="explore-menu-list">
                {menu_list &&
                    menu_list.map((item, index) => (
                        <div
                            onClick={() => setCategory(prev => prev === item.strCategory ? 'all' : item.strCategory)}
                            key={index}
                            className="explore-menu-list-item"
                        >
                            <img
                                className={category === item.strCategory ? 'active' : ''}
                                src={item.strCategoryThumb}
                                alt={item.strCategory}
                            />
                            <p>{item.strCategory}</p>
                        </div>
                    ))}
            </div>
            <hr />
        </div>
    )
}

export default Menu
