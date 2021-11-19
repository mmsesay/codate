import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CitiesList from './CitiesList';
import CityDetails from './CityDetails';
import initApi from '../redux/api';
import { setCitiesAction } from '../redux/codate/codate';
import Head from './Head';

const App = () => {
  const state = useSelector((state) => state.codateReducer.cities);
  const dispatch = useDispatch();

  useEffect(async () => {
    initApi().then((object) => {
      dispatch(setCitiesAction(object));
    });
  }, []);

  return (
    <div className="base h-full">
      <Head />
      <Routes>
        <Route exact path="/" element={<CitiesList results={state} />} />
        <Route exact path="/detail/:id" element={<CityDetails results={state} />} />
      </Routes>
    </div>
  );
};

export default App;
