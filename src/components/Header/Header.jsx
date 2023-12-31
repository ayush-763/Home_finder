import React, { useState } from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'
const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const getMenuStyles = (menuOpened) => {
    if(document.documentElement.clientWidth <= 800){
      return {right: !menuOpened && "-100%"}
    }
  }
  return (
    <section className='h-wrapper'>
      <div className='h-container flexCenter paddings innerWidth'>
        <img src='./logo.png' alt="logo" width={100}></img>
        <OutsideClickHandler onOutsideClick={()=>setMenuOpened(false)}/>
        <div className='h-menu flexCenter' style={getMenuStyles(menuOpened)}>
          <a href="">Residencies</a>
          <a href="">Our Value</a>
          <a href="">Contact us</a>
          <a href="">Get Started</a>
          <button className='button'>Contact</button>
        </div>
        <div className='menu-icon' onClick={()=>setMenuOpened((prev)=>!prev)}>
          <BiMenuAltRight size={30}/>
        </div> 
      </div>
    </section>
  )
}

export default Header