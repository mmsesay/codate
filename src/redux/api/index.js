import axios from 'axios';

const BASE_API = 'https://api.teleport.org/api';
// const ENDPOINT_URBAN_AREA = 'https://api.teleport.org/api/urban_areas/slug:';
// const ENDPOINT_MORE_DETAILS = 'https://api.teleport.org/api/urban_areas/slug:shanghai/details/';

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

const getUrbanDetailsFromApi = async (endpoint) => {
  try {
    const response = await axios.get(`${endpoint}`);
    const obj = {
      continent: response.data.continent,
      mayor: response.data.mayor || null,
      href: endpoint,
    };
    
    return { data: obj, error: null };
  } catch (error) {
    return { data: null, error: 'Error fetching data' };
  }  
};

export const getCityDetailsFromApi = async (endpoint) => {
  try {
    const response = await axios.get(`${endpoint}`);

    // destructure the data
    const { 
      name, population, location, _links,
    } = response.data;

    // destructure the sub-data
    const {
      'city:country': country,
      'city:timezone': timeZone,
      'city:urban_area': urbanArea,
    } = _links;

    const { data } = await getUrbanDetailsFromApi(urbanArea.href).then((data) => data);

    // reshape a new object that will be the data for the redux store
    const cityDetailsObject = {
      name,
      location: {
        lat: location.latlon.latitude,
        long: location.latlon.longitude,
      },
      population,
      country: country.name,
      timeZone: timeZone.name,
      urbanAreaInfo: data,
    };
    
    return { data: cityDetailsObject, error: null };
  } catch (error) {
    return { data: null, error: 'Error fetching data' };
  }  
};
