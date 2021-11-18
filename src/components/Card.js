import { Link } from 'react-router-dom';

export const Card = (prop) => {
  const {
    id, name, population, moreInfo,
  } = prop.data;

  return (
    <Link to={`/detail/${id}`}>
      <div className="text-lg p-3 h-52 flex flex-col items-end justify-between">
        <span className="p-1 text-sm">
          <i className="far fa-arrow-alt-circle-right fa-lg text-white"></i>
        </span>
        <div className="w-full h-28">
          <img 
            src={moreInfo.cityImageURL}
            alt="city preview image"
            className="w-full h-full rounded-md" />
        </div>
        <div className="text-right">
          <p>{name}</p>
          <p className="text-sm">{population.toLocaleString()}</p>
        </div>
      </div>
    </Link>
  );
};