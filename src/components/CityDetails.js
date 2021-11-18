import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getCityAction } from '../redux/codate/codate';

export const CityDetails = (prop) => {
  console.log(prop);
  const city = prop;

  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id, city);

  if (id) { dispatch(getCityAction({ id })); }

  return (
    <ul>
      <Link to='/'>back</Link>
      <li>data</li>
    </ul>
    // <button key={link}>{name}</button>
  );
};