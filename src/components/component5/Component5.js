import React from 'react';
import styles from './component5.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPuzzlePiece} from '@fortawesome/free-solid-svg-icons';
import {faDesktop} from '@fortawesome/free-solid-svg-icons';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {faList} from '@fortawesome/free-solid-svg-icons';
import {faLifeRing} from '@fortawesome/free-solid-svg-icons';

 

const Component5 = () => {
    return (
          <div className={styles.container}>
              <div className={styles.wrapper}>
              <div className={styles.cardcontainer}>
    
                   <div className={styles.card}>
                   <div className={styles.cardicon}>
                   <FontAwesomeIcon icon={faDesktop} className={styles.desktopicon}></FontAwesomeIcon> 
                   </div>
                   <div className={styles.cardcontent}>
                       <h4>RESPONSIVE & MULTIPURPOSE</h4>
                       
                       <span>Desktops,Tablets & Phones</span>
                       <br />
                       <p>This is one of the best technology in the market which one can use</p>
                   </div>
                   </div>

                   <div className={styles.card}>
                   <div className={styles.cardicon}>
                   <FontAwesomeIcon icon={faLifeRing} className={styles.desktopicon}></FontAwesomeIcon> 
                   </div>
                   <div className={styles.cardcontent}>
                       <h4>RESPONSIVE & MULTIPURPOSE</h4>
                       <span>Desktops,Tablets & Phones</span>
                       <br />
                       <p>This is one of the best technology in the market which one can use</p>
                   </div>
                   </div>

                   <div className={styles.card}>
                   <div className={styles.cardicon}>
                   <FontAwesomeIcon icon={faPuzzlePiece} className={styles.desktopicon}></FontAwesomeIcon> 
                   </div>
                   <div className={styles.cardcontent}>
                       <h4>RESPONSIVE & MULTIPURPOSE</h4>
                       <span>Desktops,Tablets & Phones</span>
                       <br />
                       <p>This is one of the best technology in the market which one can use</p>
                   </div>
                   </div>

                   <div className={styles.card}>
                   <div className={styles.cardicon}>
                   <FontAwesomeIcon icon={faStar} className={styles.desktopicon}></FontAwesomeIcon> 
                   </div>
                   <div className={styles.cardcontent}>
                       <h4>RESPONSIVE & MULTIPURPOSE</h4>
                       <span>Desktops,Tablets & Phones</span>
                       <br />
                       <p>This is one of the best technology in the market which one can use</p>
                   </div>
                   </div>

                   <div className={styles.card}>
                   <div className={styles.cardicon}>
                   <FontAwesomeIcon icon={faList} className={styles.desktopicon}></FontAwesomeIcon> 
                   </div>
                   <div className={styles.cardcontent}>
                       <h4>RESPONSIVE & MULTIPURPOSE</h4>
                       <span>Desktops,Tablets & Phones</span>
                       <br />
                       <p>This is one of the best technology in the market which one can use</p>
                   </div>
                   </div>

                   <div className={styles.card}>
                   <div className={styles.cardicon}>
                   <FontAwesomeIcon icon={faShoppingCart} className={styles.desktopicon}></FontAwesomeIcon> 
                   </div>
                   <div className={styles.cardcontent}>
                       <h4>RESPONSIVE & MULTIPURPOSE</h4>
                       <span>Desktops,Tablets & Phones</span>
                       <br />
                       <p>This is one of the best technology in the market which one can use</p>
                   </div>
                   </div>
                   
     
              </div>
              </div>
              
          </div>
    )
}
export default Component5;