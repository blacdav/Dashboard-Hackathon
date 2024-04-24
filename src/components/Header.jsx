import React from 'react'
import Search from '../images/Seacrh.svg'
import bell from '../images/solar_bell-outline.svg'
import icon from '../images/logo.svg'
import menu from '../images/menu.svg'

const Header = ({visible, setVisible, display}) => {
  
  return (
    <>
    <div className={`${display ? 'bg-tertiary' : 'bg-black text-tertiary'} border-b border-light h-[10%] grid items-center`}>
      <div className='flex justify-between bg-blue-400 items-center p-4'>
        <div className='flex justify-between'>
          <img src={icon} alt="..." className={`flex lg:hidden w-8 mr-2`}/>
          <h1 className='text-xl font-bold'>Dashboard</h1>
        </div>
        <img src={menu} alt="..." className={`${display ? 'fill-tertiary' : ''} block lg:hidden`} onClick={() => setVisible(!visible)} />
        <div className='hidden lg:flex'>
            <div className={`${display ? 'bg-tertiary' : 'bg-black'} flex border border-light rounded-full p-1`}>
                <img src={Search} alt="..." className='mx-2' />
                <input type="search" name="search" id="search" placeholder='search...' className={`${display ? 'bg-tertiary' : 'bg-black'} p-1 mr-2 outline-none border-none`} />
            </div>
            <div className='flex mx-5'>
                {/* <img src="#" alt="..." /> */}
                <input type="date" name="date" id="date" className={`${display ? 'bg-tertiary' : 'bg-black    '}`} />
                <button className='p-3 ml-2 border border-light rounded-full'><img src={bell} alt="..." className={`${display ? '' : 'fill-tertiary stroke-tertiary'}`} /></button>
            </div>
            <select className={`${display ? 'bg-tertiary' : 'bg-black'} flex border border-light rounded-full`}>
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
    </>
  )
}

export default Header
