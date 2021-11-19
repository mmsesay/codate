import { Link } from 'react-router-dom';

const Card = (prop) => {
  const {
    id, name, population, moreInfo,
  } = prop.data;

  return (
    <>
      <Link to={`/detail/${id}`}>
        <div className="text-lg p-3 h-52 md:h-auto md:my-6 flex flex-col items-end justify-between">
          <span className="p-1 text-sm md:text-2xl md:mb-3">
            <i className="far fa-arrow-alt-circle-right fa-lg text-white"></i>
          </span>
          <div className="w-full h-28 md:h-72">
            <img
              src={moreInfo?.cityImageURL}
              alt="city preview image"
              className="w-full h-full rounded-md" />
          </div>
          <div className="text-right text-white md:mt-4">
            <p className="font-bold md:text-3xl">{name?.toUpperCase()}</p>
            <p className="text-sm md:text-xl">Population: {population?.toLocaleString()}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;