import React, { useState } from 'react'
import Search from '../images/Seacrh.svg'
import bell from '../images/solar_bell-outline.svg'
import icon from '../images/Vectorlogo.svg'
import menu from '../images/Vectormobile menu.svg'
import Sidebar from './Sidebar'

const Header = ({ changeTheme }) => {
  const [showBar, setShowBar] = useState(false);
  
  // const toggleShow = () => {
  //   setShowBar(!showBar);
  // }
  
  return (
    <>
    <div className={`${!changeTheme ? 'bg-black text-secondary' : 'bg-tertiary text-black'} bg-tertiary border-b border-light h-[10%] grid items-center`}>
      <div className='flex justify-between bg-blue-400 items-center p-4'>
        <div className='flex justify-between'>
          <img src={icon} alt="..." className="block lg:hidden w-8 mr-2"/>
          <h1 className='text-xl font-bold'>Dashboard</h1>
        </div>
        <img src={menu} alt="..." className='block lg:hidden' onClick={() => setShowBar(!showBar)} />
        <div className='hidden lg:flex'>
            <div className='flex bg-tertiary border border-light rounded-full p-1'>
                <img src={Search} alt="..." className='mx-2' />
                <input type="search" name="search" id="search" placeholder='search...' className='p-1 mr-2 bg-tertiary border-b border-primar' />
            </div>
            <div className='flex mx-5'>
                {/* <img src="#" alt="..." /> */}
                <input type="date" name="date" id="date" className='bg-tertiary' />
                <button className='p-3 ml-2 border border-light rounded-full'><img src={bell} alt="..." className='' /></button>
            </div>
            <select className='flex border border-light rounded-full'>
               <option value="1">
                <img src="#" alt="..." />
                <div>
                    <h1>David David</h1><br />
                    <p>davidaniefoik@gmail.com</p>
                </div>
               </option>
            </select>
        </div>
      </div>
    </div>
    <Sidebar visible={showBar} />
    </>
  )
}

export default Header
