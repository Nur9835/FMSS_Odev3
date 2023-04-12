import React, { useEffect } from "react";
import { useLocation } from "../context/LocationContext";
import { useWeather } from "../context/WeatherContext";

const SelectLocation = () => {
//sehir bilgilerinin olduğu json
const city = require("../cities.json");
const { setLatitude, setlongitude } = useLocation(); 
const { weather, setTempMax,setTempMin,ınputCity,setInputCity,setTemp} = useWeather(); 
const handleChange = (e) => { //şehir seçiminde
const  selectCity= city.find((item) => item.name === e.target.value);
const selectLatitude = selectCity.latitude;
const selectLong = selectCity.longitude;
    setLatitude(selectLatitude);
    setlongitude(selectLong);
  };

  useEffect(() => { // api bilgisinde değişiklik olduğunda şehri değiştir
    if (weather.length > 0) {
      setInputCity(weather[0].city.name);
      setTempMin(weather[0]?.list?.[0].main.temp_min);
      setTempMax(weather[0]?.list?.[0].main.temp_max);
      setTemp(weather[0]?.list?.[0].main.temp);

    }
  }, [weather]);

  return (
    <div className="p-4">
      <form >

        <select onChange={handleChange} 
        className="min-w-50 rounded text-white bg-amber-500   border-orange-700  border-2">
          <option value="" diabled selected hidden>
            {ınputCity}
          </option>
          {city.map((item, i) => (
            <option key={i} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default SelectLocation;
