import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CitiesList } from './CitiesList';
import getAllCitiesFromApi from '../redux/api';

const App = () => {
  useEffect(() => {
    getAllCitiesFromApi()
      .then((data) => {
        console.log(data);
      });      
  });

  return (  
    <Routes>
      <Route exact path="/" element={<CitiesList />} />
    </Routes>
  );
};

export default App;
