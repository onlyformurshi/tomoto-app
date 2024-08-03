import React, { useContext } from 'react';
import './DishesList.css';
import FoodItem from '../FoodItem/FoodItem';
import { ApiContext } from '../../context/ApiContext';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

function DishesList({ category }) {
    const { meals, loading } = useContext(ApiContext);

    // Filter dishes based on the selected category
    const filteredMeals = meals?.filter((item) => category === 'all' || item.strCategory === category);

    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {loading ? (
                    // Display skeleton loaders while data is loading
                    <>
                        {[...Array(4)].map((_, index) => (
                            <Box key={index} sx={{ width: 300, mb: 2 }}>
                                <Skeleton />
                                <Skeleton animation="wave" />
                                <Skeleton animation={false} />
                            </Box>
                        ))}
                    </>
                ) : filteredMeals?.length ? (
                    // Display the dishes if available
                    filteredMeals.map((item) => (
                        <FoodItem
                            key={item.idMeal}
                            id={item.idMeal}
                            image={item.strMealThumb}
                            name={item.strMeal}
                            price={item.strMeasure4}
                            description={item.strInstructions}
                        />
                    ))
                ) : (
                    // Display a message if no dishes are available
                    <p>No dishes available in this category.</p>
                )}
            </div>
        </div>
    );
}

export default DishesList;
