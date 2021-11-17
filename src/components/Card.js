// import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CityDetails } from './CityDetails';
import { getCityDetailsFromApi } from '../redux/api';

export const Card = (prop) => {
  const { link, name } = prop.data;
  // const [displayName, setDisplayName] = useState('');

  const handleFetchingCityDetails = () => {
    getCityDetailsFromApi(link)
      .then((response) => {
        <CityDetails data={response.data} />;
        // setDisplayName(`${response.data.name}, ${response.data.country}`);
        console.log(response);
      });
  };

  return (
    <Link to={`/detail/${name}`} onClick={() => handleFetchingCityDetails()}>{name}</Link>
  );
};