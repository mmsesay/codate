import axios from 'axios';

const BASE_API = 'https://api.teleport.org/api';

export const getAllCitiesFromApi = async () => {
  try {
    const array = [];
    const response = await axios.get(`${BASE_API}/cities/`);

    const { _embedded } = response.data;
    const { 'city:search-results': searchResult } = _embedded;

    searchResult.forEach((result) => {
      const { _links } = result;
      const { 'city:item': cityItem } = _links;

      const cityObject = {
        link: cityItem.href,
        name: result.matching_full_name,
      };

      array.push(cityObject);
    });
    
    return { data: array, error: null };
  } catch (error) {
    return { data: null, error: 'Error fetching data' };
  }  
};

export const getCityDetailsFromApi = async (endpoint) => {
  try {
    const response = await axios.get(`${endpoint}`);

    console.log(response);
    const { 
      name, population, location, _links,
    } = response.data;
    const {
      'city:country': country,
      'city:timezone': timeZone,
      'city:urban_area': urbanArea,
    } = _links;

    const cityDetailsObject = {
      name,
      location: {
        lat: location.latlon.latitude,
        long: location.latlon.longitude,
      },
      population,
      country: country.name,
      timeZone: timeZone.name,
      urbanAreaURL: urbanArea.href,
    };
    
    return { data: cityDetailsObject, error: null };
  } catch (error) {
    return { data: null, error: 'Error fetching data' };
  }  
};
