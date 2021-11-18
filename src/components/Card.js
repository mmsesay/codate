// import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { CityDetails } from './CityDetails';
// import { getCityDetailsFromApi } from '../redux/api';

export const Card = (prop) => {
  const { id, name, country } = prop.data;

  console.log(prop.data);

  const handleFetchingCityDetails = () => {};

  return (
    <>
      <Link to={`/detail/${id}`} onClick={() => handleFetchingCityDetails()}>
        {name}-{country}
      </Link>
      <br />
    </>
  );
};