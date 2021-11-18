import { Link } from 'react-router-dom';

export const Card = (prop) => {
  const { id, name, country } = prop.data;

  return (
    <div>
      <Link to={`/detail/${id}`}>
        {name}-{country}
      </Link>
      <br />
    </div>
  );
};