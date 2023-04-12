import { createContext, useState, useContext, useEffect } from "react";
import { useLocation } from "./LocationContext";


const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
const [weather, setWeather] = useState([]);
const { latitude, longitude } = useLocation();
const [days, setDays] = useState([]); 
const [ınputCity, setInputCity] = useState(); 
// seçili gün.Default değeri 0 sayfa açıldığında seçili gün yok
const [selectedDay ,setSelectedDay] = useState(0); 
const [tempMin, setTempMin] = useState(0); 
const [tempMax, setTempMax] = useState(0); 
const [temp ,setTemp] = useState(0); 

 const GetWeather = async (lati, long) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lati}&lon=${long}&appid=5b83ddaa4fdb46101ced324d3561f78f&units=metric&lang=tr`);
  const result = await response.json();
  return result;
  };

  useEffect(() => {
    const WeatherDatas= async () => {
    const weather = await GetWeather(latitude, longitude);
    setWeather([weather]);
    };
    WeatherDatas();
  }, [latitude, longitude]);

  const weatherData = { weather, tempMin,setTemp, tempMax,setTempMax, setTempMin, setWeather,selectedDay,setSelectedDay ,days,setDays ,ınputCity, setInputCity };
  return (
 <WeatherContext.Provider value={weatherData}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
