import axios from 'axios';

const BASE_API = 'https://api.teleport.org/api';

const getAllCitiesFromApi = async () => {
  try {
    const array = [];
    const response = await axios.get(`${BASE_API}/cities/`);

    const { _embedded } = response.data;
    const { 'city:search-results': searchResult } = _embedded;

    searchResult.forEach((result) => {
      const { _links } = result;
      const { 'city:item': cityItem } = _links;

      const cityObject = {
        cityLink: cityItem.href,
        cityName: result.matching_full_name,
      };

      array.push(cityObject);
    });
    
    return { data: array, error: null };
  } catch (error) {
    return { data: null, error: 'Error fetching data' };
  }  
};

export default getAllCitiesFromApi;