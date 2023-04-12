import React from 'react'
import Card from './Card'
import { useWeather } from "../context/WeatherContext";
import { useState,useEffect } from "react";
import InputLocation from '../component/InputLocation';

const RightAside = (props) => {
const { weather,selectedDay ,setSelectedDay,setDays,days} = useWeather();
const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (weather) {
   // apiden ücretsiz çekilen data kısmında günlük hava durumu 1 den fazla kayıt içerdiğinden
  // 1 günden alınan hava durum bilgisi  saat 15:00:00'dan çekilmiştir

  const filteredList=weather[0]?.list.filter(item => item.dt_txt.includes("15:00:00"));
   console.log("tüm data: ",weather[0]?.list)
    console.log("filtreli data: ",filteredList);
    setDays(filteredList);
    }
  }, [weather]);

  const handleMouseOver = () => {
    setIsHovering(true);
  };
  
  // mouse üzerine geldiğinde simge çıkması için
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  // diğer günlere tıklandığında seçilidatanın o gün olması için
  const handleDay = (index) => {
    setSelectedDay(index);
  };
  const cursorStyle = isHovering ? { cursor: "pointer" } : {};
  return (
    <div>
  <div className='flex-col justify-center items-center text-white'>

  <InputLocation/>
 <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-6 mt-10 gap-3 p-2'>


 {days?.map((item, key) => {

 // seçili gün.Default değeri 0 sayfa açıldığında seçili gün yok
const isDay= key === selectedDay;
        

          const img = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
   
          return (
            <span          
            key={key}
            onClick={() => handleDay(item)}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut} 
            style={cursorStyle}
            className={` transition ${ isDay ? "border-4 border-orange-900  bg-orange-500 "  :  " border-2 border-orange-700 bg-orange-400"
            }`}
          >
          <Card
              img={img}
              day={item.dt_txt}
              max={item.main.temp_max}
              min={item.main.temp_min}
              weather={item.weather[0].main}
   
            />
            </span>

);
})}
</div>

</div>
</div>

);

};


export default RightAside;
