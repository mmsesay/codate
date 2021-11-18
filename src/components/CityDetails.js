import { Link, useParams } from 'react-router-dom';

export const CityDetails = (prop) => {
  const cityData = prop.results;

  const { id } = useParams();

  const assertItemExist = () => {
    const foundItem = cityData.filter((element) => {
      if (element !== undefined) {
        if (element.id === id) return element;
      }
      return null;
    });

    return foundItem;
  };

  const renderfoundItemJSX = () => {
    let jsx;

    const foundItem = assertItemExist();

    if (foundItem) {
      foundItem.forEach((item) => {
        jsx = <div>
          <p>{item.name}</p>
          <p>{item.country}</p>
        </div>;
      });
    } else {
      jsx = <p>No details available</p>;
    }

    return jsx;
  };

  return (
    <div>
        <Link to='/'>back</Link>
      <ul>
        <li>data</li>
      </ul>
      <div>{ renderfoundItemJSX() }</div>
    </div>
  );
};