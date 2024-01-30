import React from 'react'
import icon from '../images/Vectorlogo.svg'
import dashboard from '../images/Frame 12dashboard.svg'
import scaleup from '../images/trend-upd2.svg'
import profile from '../images/profile-2user.svg'
import box from '../images/Frame 12box.svg'
import disc from '../images/discount-shape.svg'
import bright from '../images/Grouplight.svg'
import dark from '../images/Vectordark.svg'
import info from '../images/info-circled7.svg'
import setting from '../images/Frame 12setting.png'
import logout from '../images/Frame 12logout.svg'
import login from '../images/arrow-rightarrowright.svg'

const Sidebar = () => {
  

  return (
    <div className='bg-tertiary flex flex-col pl-2 w-14 lg:w-16 h-screen bg-secondary border-r border-light justify-between z-30 items-start h-90 fixed md:relative' id='togglebar'>
      <div className='flex flex-col gap-3 justify-center mt-16 lg:mt-0'>
        <img src={icon} alt="..." className="pt-3 hidden lg:flex"/>
        <ul className='flex flex-col justify-center gap-3'>
            <li><img src={dashboard} alt="..." /></li>
            <li><img src={scaleup} alt="..." /></li>
            <li><img src={profile} alt="..." /></li>
            <li><img src={box} alt="..." /></li>
            <li><img src={disc} alt="..." /></li>
            <li><img src={info} alt="..." /></li>
        </ul>
        <ul className='bg-tertiary p-1 rounded-full grid gap-3'>
            <li><img src={bright} alt="..." className='bg-primary rounded-full p-1' /></li>
            <li><img src={dark} alt="..." className='bg-light rounded-full p-1' /></li>
        </ul>
      </div>
      <ul className='flex flex-col gap-3 items-center lg:mb-3'>
        <li><img src={login} alt="..." /></li>
        <li><img src={setting} alt="..." /></li>
        <li><img src={logout} alt="..." /></li>
      </ul>
    </div>
  )
}

export default Sidebar
