import { Link, useParams } from 'react-router-dom';

export const CityDetails = (props) => {
  // const { link, name } = prop.data;
  const { name } = useParams();
  console.log(props);
  console.log(name);

  return (
    <ul>
      <Link to='/'>back</Link>
      <li>data</li>
    </ul>
    // <button key={link}>{name}</button>
  );
};