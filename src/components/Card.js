export const Card = (prop) => {
  const { link, name } = prop.data;

  const handleCityDetail = () => {
    console.log(link, name);
  };

  return (
    <button onClick={() => handleCityDetail()}>{name}</button>
  );
};