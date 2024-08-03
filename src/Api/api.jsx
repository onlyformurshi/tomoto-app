import axios from 'axios';
import { ENDPOINTS } from './endpoints';

export const fetchMeals = async () => {
  try {
    const response = await axios.get(ENDPOINTS.SEARCH_BY_LETTER);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching meals: ' + error.message);
  }
};
export const fetchMealsCategory = async () => {
  try {
    const response = await axios.get(ENDPOINTS.LIST_ALL_MEAL_CATEGORIES);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching meals: ' + error.message);
  }
};
