import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CitiesList } from './CitiesList';
import { CityDetails } from './CityDetails';
import { getAllCitiesFromApi } from '../redux/api';
import { setCitiesAction } from '../redux/codate/codate';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getAllCitiesFromApi()
      .then((data) => {
        dispatch(setCitiesAction(data));
      });
  }, []);

  return (  
    <Routes>
      <Route exact path="/" element={<CitiesList />} />
      <Route exact path="/detail/:name" element={<CityDetails />} />
    </Routes>
  );
};

export default App;
