// import { CityDetails } from "./CityDetails";
import { getCityDetailsFromApi } from '../redux/api';

export const Card = (prop) => {
  const { link, name } = prop.data;

  const handleFetchingCityDetails = () => {
    console.log(link);
    getCityDetailsFromApi(link)
      .then((response) => {
        console.log(response);
      });
    // <CityDetails />
  };

  return (
    <button onClick={() => handleFetchingCityDetails()}>{name}</button>
  );
};