import React from 'react'
  const Card = ({day, img, max, min, weather}) => {

//burda day olarak gelen veri apideki tarih ve saat bilgisi 
//bu apiden gelen tarih bilgisinden sadece o ilgili günün adı alınacak
const date = new Date(day);
const dayName = date.toLocaleDateString("en-US", { weekday: "short" }); 
// console.log(dayName);

  return (
<div className=' border-amber-300  p-6 rounded-lg'>
<div className='flex-col '>
<p className='text-center text-bold font-bold '>{`${ dayName}`}</p>
<div className='flex justify-center items-center'>
<img alt="weather img" src={img}  width="50px" height="50px" />
</div>

<div className='flex font-semibold  justify-around mt-3'>
{ <div className='text-sm ' > {max}°</div> }
 <div className=' text-sm  ms-1'> {min}°</div> 
</div>
</div>
 </div>
  )
}

export default Card
