import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const BASE_API = 'https://api.teleport.org/api';

const getUrbanDetailsFromApi = async (endpoint) => {
  try {
    const responseOne = await axios.get(`${endpoint}`);
    const responseTwo = await axios.get(`${endpoint}details/`);
    const responseThree = await axios.get(`${endpoint}images/`);

    let cityImageURL;
    responseThree.data.photos.forEach((object) => { cityImageURL = object.image.mobile; });

    const moreDetails = responseTwo.data.categories;
    let business;
    let climate;
    let costOfLiving;
    let economy;
    let education;
    let healthCare;
    let housing;
    let jobMarket;
    let network;
    let safety;

    moreDetails.forEach((obj) => {
      switch (obj.id) {
        case 'BUSINESS-FREEDOM': {
          const businessFreedom = obj.data[0];
          const corruptionFreedom = obj.data[2];
          const labourRestriction = obj.data[4];

          business = {
            businessFreedom,
            corruptionFreedom,
            labourRestriction,
          };
          break;
        }

        case 'CLIMATE': {
          const weather = obj.data[4];

          climate = {
            weather,
          };
          break;
        }

        case 'COST-OF-LIVING': {
          const publicTransport = obj.data[7];
          const restaurantMeal = obj.data[8];

          costOfLiving = {
            publicTransport,
            restaurantMeal,
          };
          break;
        }

        case 'ECONOMY': {
          const gdpGrowthRate = obj.data[2];

          economy = {
            gdpGrowthRate,
          };
          break;
        }

        case 'EDUCATION': {
          const bestUniversity = obj.data[16];

          education = {
            bestUniversity,
          };
          break;
        }

        case 'HEALTHCARE': {
          const healthCost = obj.data[0];
          const lifeExpentancy = obj.data[1];

          healthCare = {
            healthCost,
            lifeExpentancy,
          };
          break;
        }

        case 'HOUSING': {
          const largeApartment = obj.data[0];
          const mediumApartment = obj.data[1];
          const smallApartment = obj.data[2];

          housing = {
            largeApartment,
            mediumApartment,
            smallApartment,
          };
          break;
        }

        case 'JOB-MARKET': {
          const startupAvailable = obj.data[1];

          jobMarket = {
            startupAvailable,
          };
          break;
        }

        case 'NETWORK': {
          const downloadSpeed = obj.data[0];
          const uploadSpeed = obj.data[2];

          network = {
            downloadSpeed,
            uploadSpeed,
          };
          break;
        }

        case 'SAFETY': {
          const crimeRate = obj.data[0];
          const gunDeathRate = obj.data[1];

          safety = {
            crimeRate,
            gunDeathRate,
          };
          break;
        }

        default:
          break;
      }
    });

    const newObj = {
      continent: responseOne.data.continent,
      mayor: responseOne.data.mayor || null,
      href: endpoint,
      business,
      climate,
      costOfLiving,
      economy,
      education,
      healthCare,
      housing,
      jobMarket,
      network,
      safety,
      cityImageURL,
    };

    return { data: newObj, error: null };
  } catch (error) {
    return { data: null, error: 'Error fetching data' };
  }
};

const getCitiesDetailsFromApi = async (endpoint) => {
  try {
    const response = await axios.get(`${endpoint}`);

    let cityDetailsObject;

    // destructure the data
    const {
      name, population, _links,
    } = response.data;

    // destructure the sub-data
    const {
      'city:country': country,
      'city:timezone': timeZone,
      'city:urban_area': urbanArea,
    } = _links;

    if (urbanArea) {
      const { data } = await getUrbanDetailsFromApi(urbanArea.href);

      if (data) {
        // reshape a new object that will be the data for the redux store
        cityDetailsObject = {
          id: uuidv4(),
          name,
          population,
          country: country.name,
          timeZone: timeZone.name,
          moreInfo: data,
        };
      }
    }

    return { data: cityDetailsObject, error: null };
  } catch (error) {
    return { data: null, error: 'Error fetching data' };
  }
};

const getAllCitiesLinksFromApi = async (searchText) => {
  try {
    const array = [];
    let response;

    if (searchText) {
      response = await axios.get(`${BASE_API}/cities/?search=${searchText}`);
    } else {
      response = await axios.get(`${BASE_API}/cities/`);
    }

    const { _embedded } = response.data;
    const { 'city:search-results': searchResult } = _embedded;

    searchResult.forEach(async (result) => {
      const { _links } = result;
      const { 'city:item': cityItem } = _links;
      array.push(cityItem.href);
    });

    return { citiesLink: array, error: null };
  } catch (error) {
    return { cities: null, error: 'Error fetching data' };
  }
};

const initApi = async (searchText) => {
  const { citiesLink } = await getAllCitiesLinksFromApi(searchText);

  const response = citiesLink?.map(async (href) => {
    let outgoingData;
    const { data } = await getCitiesDetailsFromApi(href);
    if (data !== undefined) outgoingData = data;
    return outgoingData;
  });

  return Promise?.all(response);
};

export default initApi;