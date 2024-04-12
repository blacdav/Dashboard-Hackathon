import './App.css';
import Header from './components/Header';
import BarChart from './components/BarChart';
import Sidebar from './components/Sidebar';
import LastOrders from './components/LastOrders';
import Analytics from './components/Analytics';
import TopPlatform from './components/TopPlatform';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState(true)

  // const toogle = () => {
  //   setTheme(pTheme => pTheme)
  // }

  return (
    <div className={`${theme ? 'bg-black text-secondary' : 'bg-tertiary text-black'} App pb-5 bg-secondary w-screen`}>
      <div className='flex h-screen w-screen'>
        <div className='hidden lg:block'>
          <Sidebar theme={theme} setTheme={setTheme} />
        </div>
        <div className='w-screen'>
          <Header theme={theme} setTheme={setTheme} />
          <div className='grid grid-cols-1 gap-5 lg:grid-cols-6 h-[93%] lg:h-[90%] overflow-y-scroll'>
            <div className='col-span-4'>
              <BarChart theme={theme} setTheme={setTheme} />
            </div>
            <div className='col-span-2'>
              <Analytics theme={theme} setTheme={setTheme} />
            </div>
            <div className='col-span-4'>
              <LastOrders theme={theme} setTheme={setTheme} />
            </div>
            <div className='col-span-2'>
              <TopPlatform theme={theme} setTheme={setTheme} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
