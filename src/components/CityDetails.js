import { Link, useParams } from 'react-router-dom';

export const CityDetails = (prop) => {
  const cityData = prop.results;

  const { id } = useParams();

  const assertItemExist = () => {
    const foundItem = cityData.filter((element) => {
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
            <div className="flex flex-col h-40 bg-blue-500 items-end justify-center px-10 text-white">
              <p className="text-xl font-bold">{item.name}</p>
              <p className="text-lg">{item.country}</p>
              <p className="text-sm">{item.population.toLocaleString()} Population</p>
            </div>
            <div className="text-sm px-5 text-white font-semibold">CITY/TOWN BREAKDOWN</div>
            <div>
              <div className="flex items-center justify-between bg-gray-300 font-bold w-full px-3 h-20 border-b">
                <p>City</p>
                <p className="text-sm">{item?.name}</p>
              </div>
              <div className="flex items-center justify-between bg-gray-300 font-bold w-full px-3 h-20 border-b">
                <p>City Mayor</p>
                <p className="text-sm">{item?.moreInfo?.mayor || 'Unknown'}</p>
              </div>
              <div className="flex items-center justify-between bg-gray-300 font-bold w-full px-3 h-20 border-b">
                <p>City Population</p>
                <p className="text-sm">{item?.population?.toLocaleString() || 'Unknown'}</p>
              </div>
              <div className="flex items-center justify-between bg-gray-300 font-bold w-full px-3 h-20 border-b">
                <p>Country</p>
                <p className="text-sm">{item?.country || 'Unknown'}</p>
              </div>
              <div className="flex items-center justify-between bg-gray-300 font-bold w-full px-3 h-20 border-b">
                <p>Continent</p>
                <p className="text-sm">{item?.moreInfo?.continent || 'Unknown'}</p>
              </div>
              <div className="flex items-center justify-between bg-gray-300 font-bold w-full px-3 h-20 border-b">
                <p>TimeZone</p>
                <p className="text-sm">{item?.timeZone || 'Unknown'}</p>
              </div>
              <div className="flex items-center justify-between bg-gray-300 font-bold w-full px-3 h-20 border-b">
                <p>Climate</p>
                <p className="text-sm">{item?.moreInfo?.climate?.weather?.string_value || 'Unknown'}</p>
              </div>
              <div className="flex items-center justify-between bg-gray-300 font-bold w-full px-3 h-20 border-b">
                <p>GDP growth</p>
                <p className="text-sm">{Math.round(item.moreInfo.economy.gdpGrowthRate.percent_value * 100) || 'Unknown'}%</p>
              </div>
              <div className="flex items-center justify-between bg-gray-300 font-bold w-full px-3 h-20 border-b">
                <p>Business</p>
                <p className="text-sm">{item?.moreInfo?.business?.businessFreedom?.label || 'Unknown'}</p>
              </div>
              <div className="flex items-center justify-between bg-gray-300 font-bold w-full px-3 h-20 border-b">
                <p>Corruption</p>
                <p className="text-sm">{item?.moreInfo?.business?.corruptionFreedom?.label || 'Unknown'}</p>
              </div>
              <div className="flex items-center justify-between bg-gray-300 font-bold w-full px-3 h-20 border-b">
                <p>Restriction</p>
                <p className="text-sm">{item?.moreInfo?.business?.labourRestriction?.label || 'Unknown'}</p>
              </div>
              <div className="flex items-center justify-between bg-gray-300 font-bold w-full px-3 h-20 border-b">
                <p>Public transport per month</p>
                <p className="text-sm">$ {item?.moreInfo?.costOfLiving?.publicTransport?.currency_dollar_value || 'Unknown'}</p>
              </div>
              <div className="flex items-center justify-between bg-gray-300 font-bold w-full px-3 h-20 border-b">
                <p>Restaurant Meal</p>
                <p className="text-sm">$ {Math.round(item?.moreInfo?.costOfLiving?.restaurantMeal?.currency_dollar_value) || 'Unknown'}</p>
              </div>
              <div className="flex items-center justify-between bg-gray-300 font-bold w-full px-3 h-20 border-b">
                <p>Top University</p>
                <p className="text-sm">{item?.moreInfo?.education?.bestUniversity?.string_value || 'Unknown'}</p>
              </div>
              <div className="flex items-center justify-between bg-gray-300 font-bold w-full px-3 h-20 border-b">
                <p>Health care Expenditure</p>
                <p className="text-sm">{Math.round(item.moreInfo.healthCare.healthCost.float_value * 100) || 'Unknown'}%</p>
              </div>
              <div className="flex items-center justify-between bg-gray-300 font-bold w-full px-3 h-20 border-b">
                <p>Life Expentancy</p>
                <p className="text-sm">{Math.floor(item.moreInfo.healthCare.lifeExpentancy.float_value) || 'Unknown'} years</p>
              </div>
              <div className="flex items-center justify-between bg-gray-300 font-bold w-full px-3 h-20 border-b">
                <p>Large Apartment Cost</p>
                <p className="text-sm">$ {item?.moreInfo?.housing?.largeApartment?.currency_dollar_value?.toLocaleString() || 'Unknown'}</p>
              </div>
              <div className="flex items-center justify-between bg-gray-300 font-bold w-full px-3 h-20 border-b">
                <p>Medium Apartment Cost</p>
                <p className="text-sm">$ {item?.moreInfo?.housing?.mediumApartment?.currency_dollar_value?.toLocaleString() || 'Unknown'}</p>
              </div>
              <div className="flex items-center justify-between bg-gray-300 font-bold w-full px-3 h-20 border-b">
                <p>Small Apartment Cost</p>
                <p className="text-sm">$ {item?.moreInfo?.housing?.smallApartment?.currency_dollar_value?.toLocaleString() || 'Unknown'}</p>
              </div>
              <div className="flex items-center justify-between bg-gray-300 font-bold w-full px-3 h-20 border-b">
                <p>Crime rate</p>
                <p className="text-sm">{Math.round(item.moreInfo.safety.crimeRate.float_value * 100) || 'Unknown'}%</p>
              </div>
              <div className="flex items-center justify-between bg-gray-300 font-bold w-full px-3 h-20 border-b">
                <p>Gun death rate</p>
                <p className="text-sm">{Math.round(item.moreInfo.safety.gunDeathRate.int_value) || 'Unknown'}%</p>
              </div>
              <div className="flex items-center justify-between bg-gray-300 font-bold w-full px-3 h-20 border-b">
                <p>Internet Access</p>
                <p className="text-sm">{item.moreInfo.network.downloadSpeed !== undefined ? 'Available' : 'Partially' }</p>
              </div>
              {
                item.moreInfo.network.downloadSpeed
                && <div className="flex items-center justify-between bg-gray-300 font-bold w-full px-3 h-20 border-b">
                  <p>Download speed</p>
                  <p className="text-sm">{Math.round(item.moreInfo.network.downloadSpeed.float_value)} (Mbps)</p>
                </div>
              }
              {
                item.moreInfo.network.uploadSpeed
                && <div className="flex items-center justify-between bg-gray-300 font-bold w-full px-3 h-20 border-b">
                  <p>Upload speed</p>
                  <p className="text-sm">{Math.round(item.moreInfo.network.uploadSpeed.float_value)} (Mbps)</p>
                </div>
              }
            </div>
          </div>;
      });
    } else {
      jsx = <p>No details available</p>;
    }

    return jsx;
  };

  return (
    <div>
      <Link to='/' className="flex items-center justify-between p-5">
        <i className="fas fa-chevron-left fa-lg text-white"></i>
        <p className="mx-16">town/city views</p>
        <div>
          <i className="fas fa-microphone fa-lg text-white mr-5"></i>
          <i className="fas fa-cog fa-lg text-white"></i>
        </div>
      </Link>

      <div>{ renderfoundItemJSX() }</div>
    </div>
  );
};