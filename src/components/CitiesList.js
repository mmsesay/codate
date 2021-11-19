import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Card } from './Card';
import { initApi } from '../redux/api';
import { setCitiesAction } from '../redux/codate/codate';

export const CitiesList = (prop) => {
  const { results } = prop;
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');

  const assertReduxStateAndReturnJSX = () => {
    let jsx;

    if (results.length > 0) {
      jsx = results.map((city) => (
        city !== undefined && <div data-testid="card" className="card md:px-5"><Card key={city.id} data={city} /></div>
      ));
    } else {
      jsx = <p className="text-center py-10">Loading...</p>;
    }

    return jsx;
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    initApi(searchText).then((object) => {
      dispatch(setCitiesAction(object));
    });
  }, [searchText]);

  return (
    <>
      <div className="flex flex-col h-40 md:h-64 items-end justify-center px-10 text-white base">
        <h1 data-testid="card" className="text-xl md:text-5xl font-bold">Popular Citites</h1>
        <p className="text-lg md:text-2xl">{results.length > 0 && `${results.length} cities`}</p>
      </div>
      <div className="w-full">
        <input 
          type="text" 
          name="search"
          placeholder="Search for a city"
          onChange={(e) => handleSearch(e)}
          className="focus:outline-none px-5 w-full h-12 md:h-20 md:px-10 md:text-xl dark-primary" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 darker-primary">
        { assertReduxStateAndReturnJSX() || 'No data found'}
      </div>
    </>
  );
};