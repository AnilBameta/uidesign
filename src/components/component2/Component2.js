import React, { useState } from 'react';
import styles from './component2.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {faBars} from '@fortawesome/free-solid-svg-icons';
const Component2 = () => {

    const [barValue,setBarValue] = useState(false);

    const barFunc = () => {
        setBarValue(!barValue)
    }

    const navButton = ['Home','Portfolio','Blog','Pages','Features','Mega Menu','Contact']
return(
    <>
    <div className={styles.container}>
     <div className={styles.left}>
         <div className={styles.logo}>
       <img className = {styles.image} src='logo512.png'  alt= "not available"/>
       </div>
       <div className={styles.logoname}>
       <h2>STARTUPRR</h2>
       </div>
     </div>
     <div className={styles.right}>
     
      {
          navButton.map(navItems => (
              <button className={styles.navbtn}>{navItems}</button>
          ))
      }
      <FontAwesomeIcon icon={faSearch} className={styles.searchicon}></FontAwesomeIcon>
     </div>
     <FontAwesomeIcon icon={faBars} className={styles.baricon} onClick={barFunc}></FontAwesomeIcon>
     
    </div>
    {
        (barValue) && 
            <div className={styles.barDropDown}>
                 {
             navButton.map(navItems => (
                 <button className={styles.navbtn}>{navItems}</button>
             ))
         }
   
                </div>
        }
        </>
)
}
export default Component2;
