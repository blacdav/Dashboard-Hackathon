import './App.css';
import Header from './components/Header';
import BarChart from './components/BarChart';
import Sidebar from './components/Sidebar';
import LastOrders from './components/LastOrders';
import Analytics from './components/Analytics';
import TopPlatform from './components/TopPlatform';

function App() {
  
  return (
    <div className="App bg-secondary w-screen">        
      <div className='flex h-screen w-screen'>
        <div className='hidden lg:block'>
        <Sidebar /> 
        </div>
        <div className='w-screen'>
          <Header />
          <div className='grid grid-cols-1 gap-5 lg:grid-cols-6 h-[90%] overflow-y-scroll'>
            <div className='col-span-4'>
              <BarChart />
            </div>
            <div className='col-span-2'>
              <Analytics />
            </div>
            <div className='col-span-4'>
              <LastOrders />
            </div>
            <div className='col-span-2'>
              <TopPlatform />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
