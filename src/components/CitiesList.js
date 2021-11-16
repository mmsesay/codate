import { useSelector } from 'react-redux';

export const CitiesList = () => {
  const state = useSelector((state) => state.codateReducer.cities);

  const assertReduxStateAndReturnJSX = () => {
    let jsx;

    if (state.error) {
      jsx = <p>{state.error}</p>;
    } else if (state.data) {
      jsx = state.data.map((city, index) => (
        <p key={index}>{city.cityName}</p>
      ));
    } else {
      jsx = <p>Loading...</p>;
    }

    return jsx;
  };

  return (
    <div>
      { assertReduxStateAndReturnJSX() }
    </div>
  );
};