import React from 'react'
import { useState,useEffect } from "react";
import { useWeather } from "../context/WeatherContext";
import { list } from 'postcss';

function LeftAside() {
const { weather,selectedDay ,ınputCity,setInputCity } = useWeather();
const filteredList=weather[0]?.list.filter(item => item.dt_txt.includes("15:00:00"));
const [minTemp,setMinTemp]=useState(0);
const [maxTemp,setMaxTemp]=useState(0);
const [temp,setTemp]=useState(0);
const [ descriptionWeather,setDescriptionWeather] =useState("");
const [date,setDate] =useState("");

  useEffect(() => {

   if (weather.length > 0) {
    if(filteredList[0]?.main.temp_min )
    {
     //seçili kayıt yoksa apideki ilk data getirilir   
if(selectedDay=== 0)
{  
  setTemp(filteredList[0]?.main.temp);
  setDescriptionWeather(filteredList[0]?.weather[0].description);
  //console.log("dene1",weather[0]?.list?.[0]?.weather[0].description);
  setDate(new Date(filteredList[0]?.dt_txt).toLocaleDateString());
  setMaxTemp(filteredList[0]?.main.temp_max);
  setMinTemp(filteredList[0]?.main.temp_min);

}
else {
 if(selectedDay){
  // diğer günlerin seçim durumında sol detay kısmının bilgilerinin değişmesi
  setTemp(selectedDay.main.temp);
  setDescriptionWeather(selectedDay?.weather[0].description);
  setDate(new Date(selectedDay?.dt_txt).toLocaleDateString());
  setMaxTemp(selectedDay.main.temp_max);
  setMinTemp(selectedDay.main.temp_min);
 }
}
}
 }
  }, [weather,selectedDay]);

  return (
    <div>  
<div className='flex flex-col justify-center items-center h-full'>
 <p className='mt-10  text-orange-300 font-extrabold text-2xl ' > Weather App</p> 
<div className=' mt-10 flex flex-row  justify-center items-center'>
  <p className='text-white font-bold text-2xl mt-7'>
  <i className='material-icons'>location_on </i>{ınputCity}
</p>
</div>
  <p className='text-xl mt-5 font-bold text-white'>{date}</p>

<div className=' flex flex-col  mt-10'>

 <div className='flex flex-row  justify-center'>
    <span className='font-extrabold text-orange-400 text-5xl'>{temp} </span>
  <span className=' text-orange-400   text-5xl'> °C </span>
  </div>

  <div className='mt-2 flex justify-center'>
  <span className='text-2xl font-extrabold  text-orange-400'> 
     {descriptionWeather.toUpperCase()}
  
  </span>
</div>

  <div className='mt-10 flex justify-around'>
  <span className='text-2xl font-extrabold text-orange-400'> max</span>
  <span className='text-2xl ms-4 font-extrabold text-orange-400'> min</span>
</div>

<div className=' flex justify-around'>
<div>
<span className='text-2xl font-extrabold text-orange-300'>  {maxTemp}  </span>
<span className='text-2xl font-extrabold text-orange-300'>°C</span>
</div>


<div>
<span className='text-2xl  font-extrabold ms-8 text-orange-300'>{minTemp}</span>
<span className='text-2xl  font-extrabold text-orange-300'>°C</span>
</div>
</div>

</div>



</div>
    </div>
  )


}

export default LeftAside;
