import React, { createContext, useState, useEffect } from 'react';
import { fetchMeals, fetchMealsCategory } from '../Api/api';

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
    const [meals, setMeals] = useState(null);
    const [menu_list, setMenu_list] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchMeals();
                const resultcategory = await fetchMealsCategory();
                setMeals(result.meals);
                setMenu_list(resultcategory.categories);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };


        fetchData();
    }, []);
    return (
        <ApiContext.Provider value={{ meals, loading, error, menu_list }}>
            {children}
        </ApiContext.Provider>
    );
};

export { ApiContext, ApiProvider };
