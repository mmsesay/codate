export const CityDetails = (prop) => {
  const { link, name } = prop.data;
  console.log(prop);
  return (
    <button key={link}>{name}</button>
  );
};