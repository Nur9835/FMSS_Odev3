
import Layout from './component/Layout';
import LeftAside from './component/LeftAside';
import RightAside from './component/RightAside';



import { LocationProvider } from './context/LocationContext'

import { WeatherProvider } from './context/WeatherContext'



function App() {
  return (
    <LocationProvider> 
   <WeatherProvider>  
  <Layout > 
 <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-6 h-screen p-10'>

 <aside className='col-span-1 lg:col-span-2 bg-cyan-500 
h-full md:bg-bulut  md:bg-bottom lg:bg-demo2 
 bg-no-repeat bg-bottom bg-contain'> 
<LeftAside/>

 </aside>
<aside className='col-span-1 lg:col-span-4 bg-amber-500 h-full '>
<div className='flex flex-col justify-center items-center mt-8 '> 
<RightAside/> 
   </div>
</aside>
 </div>
 </Layout>

</WeatherProvider>
  </LocationProvider>
 
  );
}

export default App;
