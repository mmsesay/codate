import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CitiesList } from './CitiesList';
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
    </Routes>
  );
};

export default App;
