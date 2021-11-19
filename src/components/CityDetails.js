import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import worldMap from '../assets/worldmap.png';

const CityDetails = (prop) => {
  const cityData = prop.results;

  const { id } = useParams();

  const assertItemExist = () => {
    const foundItem = cityData?.filter((element) => {
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
            <div className="flex items-center justify-between h-40 md:h-64">
              <img src={worldMap} alt="world map" className="w-40 md:w-96 h-32 md:ml-32 md:h-64 object-contain" />
              <div className="flex flex-col items-end justify-center px-5 md:px-32 text-white">
                <p className="text-xl md:text-5xl font-bold">{item.name.toUpperCase()}</p>
                <p className="text-lg md:text-2xl">{item.country.toUpperCase()}</p>
                <p className="text-sm md:text-lg">{item.population.toLocaleString()} Population</p>
              </div>
            </div>
            <div className="text-sm  md:text-lg px-5 md:px-40 text-white dark-primary py-2">CITY/TOWN BREAKDOWN</div>
            <ul className="details text-gray-200">
              <li className="flex items-center justify-between font-bold w-full px-3 md:px-56 h-20 md:text-xl">
                <p>City</p>
                <p>{item?.name}</p>
              </li>
              <li className="flex items-center justify-between font-bold w-full px-3 md:px-56 h-20 md:text-xl">
                <p>City Mayor</p>
                <p>{item?.moreInfo?.mayor || 'Unknown'}</p>
              </li>
              <li className="flex items-center justify-between font-bold w-full px-3 md:px-56 h-20 md:text-xl">
                <p>City Population</p>
                <p>{item?.population?.toLocaleString() || 'Unknown'}</p>
              </li>
              <li className="flex items-center justify-between font-bold w-full px-3 md:px-56 h-20 md:text-xl">
                <p>Country</p>
                <p>{item?.country || 'Unknown'}</p>
              </li>
              <li className="flex items-center justify-between font-bold w-full px-3 md:px-56 h-20 md:text-xl">
                <p>Continent</p>
                <p>{item?.moreInfo?.continent || 'Unknown'}</p>
              </li>
              <li className="flex items-center justify-between font-bold w-full px-3 md:px-56 h-20 md:text-xl">
                <p>TimeZone</p>
                <p>{item?.timeZone || 'Unknown'}</p>
              </li>
              <li className="flex items-center justify-between font-bold w-full px-3 md:px-56 h-20 md:text-xl">
                <p>Climate</p>
                <p>{item?.moreInfo?.climate?.weather?.string_value || 'Unknown'}</p>
              </li>
              <li className="flex items-center justify-between font-bold w-full px-3 md:px-56 h-20 md:text-xl">
                <p>GDP growth</p>
                <p>{Math.round(item.moreInfo.economy.gdpGrowthRate.percent_value * 100) || 'Unknown'}%</p>
              </li>
              <li className="flex items-center justify-between font-bold w-full px-3 md:px-56 h-20 md:text-xl">
                <p>Business</p>
                <p>{item?.moreInfo?.business?.businessFreedom?.label || 'Unknown'}</p>
              </li>
              <li className="flex items-center justify-between font-bold w-full px-3 md:px-56 h-20 md:text-xl">
                <p>Corruption</p>
                <p>{item?.moreInfo?.business?.corruptionFreedom?.label || 'Unknown'}</p>
              </li>
              <li className="flex items-center justify-between font-bold w-full px-3 md:px-56 h-20 md:text-xl">
                <p>Restriction</p>
                <p>{item?.moreInfo?.business?.labourRestriction?.label || 'Unknown'}</p>
              </li>
              <li className="flex items-center justify-between font-bold w-full px-3 md:px-56 h-20 md:text-xl">
                <p>Public transport per month</p>
                <p>$ {item?.moreInfo?.costOfLiving?.publicTransport?.currency_dollar_value || 'Unknown'}</p>
              </li>
              <li className="flex items-center justify-between font-bold w-full px-3 md:px-56 h-20 md:text-xl">
                <p>Restaurant Meal</p>
                <p>$ {Math.round(item?.moreInfo?.costOfLiving?.restaurantMeal?.currency_dollar_value) || 'Unknown'}</p>
              </li>
              <li className="flex items-center justify-between font-bold w-full px-3 md:px-56 h-20 md:text-xl">
                <p>Top University</p>
                <p>{item?.moreInfo?.education?.bestUniversity?.string_value || 'Unknown'}</p>
              </li>
              <li className="flex items-center justify-between font-bold w-full px-3 md:px-56 h-20 md:text-xl">
                <p>Health care Expenditure</p>
                <p>{Math.round(item.moreInfo.healthCare.healthCost.float_value * 100) || 'Unknown'}%</p>
              </li>
              <li className="flex items-center justify-between font-bold w-full px-3 md:px-56 h-20 md:text-xl">
                <p>Life Expentancy</p>
                <p>{Math.floor(item.moreInfo.healthCare.lifeExpentancy.float_value) || 'Unknown'} years</p>
              </li>
              <li className="flex items-center justify-between font-bold w-full px-3 md:px-56 h-20 md:text-xl">
                <p>Large Apartment Cost</p>
                <p>$ {item?.moreInfo?.housing?.largeApartment?.currency_dollar_value?.toLocaleString() || 'Unknown'}</p>
              </li>
              <li className="flex items-center justify-between font-bold w-full px-3 md:px-56 h-20 md:text-xl">
                <p>Medium Apartment Cost</p>
                <p>$ {item?.moreInfo?.housing?.mediumApartment?.currency_dollar_value?.toLocaleString() || 'Unknown'}</p>
              </li>
              <li className="flex items-center justify-between font-bold w-full px-3 md:px-56 h-20 md:text-xl">
                <p>Small Apartment Cost</p>
                <p>$ {item?.moreInfo?.housing?.smallApartment?.currency_dollar_value?.toLocaleString() || 'Unknown'}</p>
              </li>
              <li className="flex items-center justify-between font-bold w-full px-3 md:px-56 h-20 md:text-xl">
                <p>Crime rate</p>
                <p>{Math.round(item.moreInfo.safety.crimeRate.float_value * 100) || 'Unknown'}%</p>
              </li>
              <li className="flex items-center justify-between font-bold w-full px-3 md:px-56 h-20 md:text-xl">
                <p>Gun death rate</p>
                <p>{Math.round(item.moreInfo.safety.gunDeathRate.int_value) || 'Unknown'}%</p>
              </li>
              <li className="flex items-center justify-between font-bold w-full px-3 md:px-56 h-20 md:text-xl">
                <p>Internet Access</p>
                <p>{item.moreInfo.network.downloadSpeed !== undefined ? 'Available' : 'Partially' }</p>
              </li>
              {
                item.moreInfo.network.downloadSpeed
                && <div className="flex items-center justify-between font-bold w-full px-3 md:px-56 h-20 md:text-xl">
                  <p>Download speed</p>
                  <p>{Math.round(item.moreInfo.network.downloadSpeed.float_value)} (Mbps)</p>
                </div>
              }
              {
                item.moreInfo.network.uploadSpeed
                && <div className="flex items-center justify-between font-bold w-full px-3 md:px-56 h-20 md:text-xl">
                  <p>Upload speed</p>
                  <p>{Math.round(item.moreInfo.network.uploadSpeed.float_value)} (Mbps)</p>
                </div>
              }
            </ul>
          </div>;
      });
    } else {
      jsx = <p>No details available</p>;
    }

    return jsx;
  };

  useEffect(() => {
    assertItemExist();
  }, []);

  return (
    <div>
      <Link to='/' className="flex items-center justify-between p-5 md:px-32 dark-primary text-gray-200">
        <i className="fas fa-chevron-left fa-lg text-gray-200"></i>
        <p className="mx-16 font-lato font-bold text-sm md:text-lg">town/city views</p>
        <div>
          <i className="fas fa-microphone fa-lg text-gray-200 mr-5"></i>
          <i className="fas fa-cog fa-lg text-gray-200"></i>
        </div>
      </Link>

      <div>{ renderfoundItemJSX() }</div>
    </div>
  );
};

export default CityDetails;