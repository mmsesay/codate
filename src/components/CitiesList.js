import { useEffect } from 'react';
import { Card } from './Card';

export const CitiesList = (prop) => {
  const { results } = prop;

  const assertReduxStateAndReturnJSX = () => {
    let jsx;

    if (results.length > 0) {
      jsx = results.map((city) => (
        city !== undefined && <Card key={city.id} data={city} />
      ));
    } else {
      jsx = <p>Loading...</p>;
    }

    return jsx;
  };

  useEffect(() => {});

  return (
    <div className="base">
      <div className="flex flex-col h-40 bg-blue-500 items-end justify-center px-10 text-white">
        <p className="text-xl font-bold">Popular Citites</p>
        <p className="text-lg">{results.length > 0 && `${results.length} cities`}</p>
      </div>
      {/* <TopSection data={cityBox} /> */}
      <div className="grid grid-cols-2 mt-4">
        { assertReduxStateAndReturnJSX() }
      </div>
    </div>
  );
};