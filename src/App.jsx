import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import BarChart from './components/BarChart';
import Sidebar from './components/Sidebar';
import LastOrders from './components/LastOrders';
import Analytics from './components/Analytics';
import TopPlatform from './components/TopPlatform';

function App() {
  const [showBar, setShowBar] = useState(true);
  const [theme, setTheme] = useState(true)

  return (
    <div className={`${theme ? 'bg-tertiary text-black' : 'bg-black text-secondary'} App pb-5 h-screen w-screen`}>
      <div className='flex h-screen w-screen'>
        <div className='hidden lg:block'>
          <Sidebar visible={showBar} display={theme} setDisplay={setTheme} />
        </div>
        <div className='w-screen'>
          <Header visible={showBar} setVisible={setShowBar} display={theme} />
          <div className='grid grid-cols-1 gap-5 lg:grid-cols-6 h-[93%] lg:h-[90%] overflow-y-scroll'>
            <div className='col-span-4'>
              <BarChart display={theme} />
            </div>
            <div className='col-span-2'>
              <Analytics display={theme} />
            </div>
            <div className='col-span-4'>
              <LastOrders display={theme} />
            </div>
            <div className='col-span-2'>
              <TopPlatform display={theme} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
