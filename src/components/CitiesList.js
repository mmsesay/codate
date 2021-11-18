import { useEffect } from 'react';
import { Card } from './Card';

export const CitiesList = (prop) => {
  const { results } = prop;

  const assertReduxStateAndReturnJSX = () => {
    let jsx;

    if (results) {
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
    <div>
      { assertReduxStateAndReturnJSX() }
    </div>
  );
};