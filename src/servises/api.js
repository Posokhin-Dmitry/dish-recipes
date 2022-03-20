import axios from 'axios';

const BASEURL = 'https://www.themealdb.com/';

const getRandomRecipes = () => axios.get(BASEURL + `api/json/v1/1/random.php`);

export default getRandomRecipes;
