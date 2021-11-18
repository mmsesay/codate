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
        city !== undefined && <div className="card"><Card key={city.id} data={city} /></div>
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
      // console.log(object);
      dispatch(setCitiesAction(object));
    });
  }, [searchText]);

  return (
    <div className="">
      <div className="flex flex-col h-40 items-end justify-center px-10 text-white base">
        <p className="text-xl font-bold">Popular Citites</p>
        <p className="text-lg">{results.length > 0 && `${results.length} cities`}</p>
      </div>
      <div className="w-full">
        <input 
          type="text" 
          name="search"
          placeholder="Search for a city"
          onChange={(e) => handleSearch(e)}
          className="focus:outline-none px-5 w-full h-12 dark-primary" />
      </div>
      <div className="grid grid-cols-2 darker-primary">
        { assertReduxStateAndReturnJSX() || 'No data found'}
      </div>
    </div>
  );
};