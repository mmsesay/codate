import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export const CityDetails = (prop) => {
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
            <div className="flex flex-col h-40  items-end justify-center px-10 text-white">
              <p className="text-xl font-bold">{item.name.toUpperCase()}</p>
              <p className="text-lg">{item.country.toUpperCase()}</p>
              <p className="text-sm">{item.population.toLocaleString()} Population</p>
            </div>
            <div className="text-sm px-5 text-white dark-primary py-2">CITY/TOWN BREAKDOWN</div>
            <ul className="details text-gray-200">
              <li className="flex items-center justify-between font-bold w-full px-3 h-20">
                <p>City</p>
                <p className="text-sm">{item?.name}</p>
              </li>
              <li className="flex items-center justify-between font-bold w-full px-3 h-20">
                <p>City Mayor</p>
                <p className="text-sm">{item?.moreInfo?.mayor || 'Unknown'}</p>
              </li>
              <li className="flex items-center justify-between font-bold w-full px-3 h-20">
                <p>City Population</p>
                <p className="text-sm">{item?.population?.toLocaleString() || 'Unknown'}</p>
              </li>
              <li className="flex items-center justify-between font-bold w-full px-3 h-20">
                <p>Country</p>
                <p className="text-sm">{item?.country || 'Unknown'}</p>
              </li>
              <li className="flex items-center justify-between font-bold w-full px-3 h-20">
                <p>Continent</p>
                <p className="text-sm">{item?.moreInfo?.continent || 'Unknown'}</p>
              </li>
              <li className="flex items-center justify-between font-bold w-full px-3 h-20">
                <p>TimeZone</p>
                <p className="text-sm">{item?.timeZone || 'Unknown'}</p>
              </li>
              <li className="flex items-center justify-between font-bold w-full px-3 h-20">
                <p>Climate</p>
                <p className="text-sm">{item?.moreInfo?.climate?.weather?.string_value || 'Unknown'}</p>
              </li>
              <li className="flex items-center justify-between font-bold w-full px-3 h-20">
                <p>GDP growth</p>
                <p className="text-sm">{Math.round(item.moreInfo.economy.gdpGrowthRate.percent_value * 100) || 'Unknown'}%</p>
              </li>
              <li className="flex items-center justify-between font-bold w-full px-3 h-20">
                <p>Business</p>
                <p className="text-sm">{item?.moreInfo?.business?.businessFreedom?.label || 'Unknown'}</p>
              </li>
              <li className="flex items-center justify-between font-bold w-full px-3 h-20">
                <p>Corruption</p>
                <p className="text-sm">{item?.moreInfo?.business?.corruptionFreedom?.label || 'Unknown'}</p>
              </li>
              <li className="flex items-center justify-between font-bold w-full px-3 h-20">
                <p>Restriction</p>
                <p className="text-sm">{item?.moreInfo?.business?.labourRestriction?.label || 'Unknown'}</p>
              </li>
              <li className="flex items-center justify-between font-bold w-full px-3 h-20">
                <p>Public transport per month</p>
                <p className="text-sm">$ {item?.moreInfo?.costOfLiving?.publicTransport?.currency_dollar_value || 'Unknown'}</p>
              </li>
              <li className="flex items-center justify-between font-bold w-full px-3 h-20">
                <p>Restaurant Meal</p>
                <p className="text-sm">$ {Math.round(item?.moreInfo?.costOfLiving?.restaurantMeal?.currency_dollar_value) || 'Unknown'}</p>
              </li>
              <li className="flex items-center justify-between font-bold w-full px-3 h-20">
                <p>Top University</p>
                <p className="text-sm">{item?.moreInfo?.education?.bestUniversity?.string_value || 'Unknown'}</p>
              </li>
              <li className="flex items-center justify-between font-bold w-full px-3 h-20">
                <p>Health care Expenditure</p>
                <p className="text-sm">{Math.round(item.moreInfo.healthCare.healthCost.float_value * 100) || 'Unknown'}%</p>
              </li>
              <li className="flex items-center justify-between font-bold w-full px-3 h-20">
                <p>Life Expentancy</p>
                <p className="text-sm">{Math.floor(item.moreInfo.healthCare.lifeExpentancy.float_value) || 'Unknown'} years</p>
              </li>
              <li className="flex items-center justify-between font-bold w-full px-3 h-20">
                <p>Large Apartment Cost</p>
                <p className="text-sm">$ {item?.moreInfo?.housing?.largeApartment?.currency_dollar_value?.toLocaleString() || 'Unknown'}</p>
              </li>
              <li className="flex items-center justify-between font-bold w-full px-3 h-20">
                <p>Medium Apartment Cost</p>
                <p className="text-sm">$ {item?.moreInfo?.housing?.mediumApartment?.currency_dollar_value?.toLocaleString() || 'Unknown'}</p>
              </li>
              <li className="flex items-center justify-between font-bold w-full px-3 h-20">
                <p>Small Apartment Cost</p>
                <p className="text-sm">$ {item?.moreInfo?.housing?.smallApartment?.currency_dollar_value?.toLocaleString() || 'Unknown'}</p>
              </li>
              <li className="flex items-center justify-between font-bold w-full px-3 h-20">
                <p>Crime rate</p>
                <p className="text-sm">{Math.round(item.moreInfo.safety.crimeRate.float_value * 100) || 'Unknown'}%</p>
              </li>
              <li className="flex items-center justify-between font-bold w-full px-3 h-20">
                <p>Gun death rate</p>
                <p className="text-sm">{Math.round(item.moreInfo.safety.gunDeathRate.int_value) || 'Unknown'}%</p>
              </li>
              <li className="flex items-center justify-between font-bold w-full px-3 h-20">
                <p>Internet Access</p>
                <p className="text-sm">{item.moreInfo.network.downloadSpeed !== undefined ? 'Available' : 'Partially' }</p>
              </li>
              {
                item.moreInfo.network.downloadSpeed
                && <div className="flex items-center justify-between font-bold w-full px-3 h-20">
                  <p>Download speed</p>
                  <p className="text-sm">{Math.round(item.moreInfo.network.downloadSpeed.float_value)} (Mbps)</p>
                </div>
              }
              {
                item.moreInfo.network.uploadSpeed
                && <div className="flex items-center justify-between font-bold w-full px-3 h-20">
                  <p>Upload speed</p>
                  <p className="text-sm">{Math.round(item.moreInfo.network.uploadSpeed.float_value)} (Mbps)</p>
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
      <Link to='/' className="flex items-center justify-between p-5 dark-primary text-gray-200">
        <i className="fas fa-chevron-left fa-lg text-gray-200"></i>
        <p className="mx-16 font-lato font-bold">town/city views</p>
        <div>
          <i className="fas fa-microphone fa-lg text-gray-200 mr-5"></i>
          <i className="fas fa-cog fa-lg text-gray-200"></i>
        </div>
      </Link>

      <div>{ renderfoundItemJSX() }</div>
    </div>
  );
};