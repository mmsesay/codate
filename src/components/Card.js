import { Link } from 'react-router-dom';

export const Card = (prop) => {
  const { id, name } = prop.data;

  return (
    <Link to={`/detail/${id}`}>
      <div className="text-lg p-3 m-2 bg-gray-400 h-40 flex flex-col items-end justify-between">
        <span className="p-1 text-sm">
          <i className="far fa-arrow-alt-circle-right fa-lg text-white"></i>
        </span>
        <div>
          <p>{name}</p>
          <p className="text-sm">{2424242424}</p>
        </div>
      </div>
    </Link>
  );
};