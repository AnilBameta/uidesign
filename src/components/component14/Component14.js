import React from 'react';
import styles from './component14.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Component14 = () => {
    return (
        <div className={styles.container}>
          <div className={styles.wrapper}>
              <div className={styles.imgsec}>
                <img src ='https://i.ibb.co/DG69bQ4/2.png' alt='not available'></img>
              </div>
              <div className={styles.contentsec}>
                <h2>STARTUPRR! We Do It And Hope You Too</h2>
              </div>
              <div className={styles.btnsec}>
              <button>
                  <p>PURCHASE IT NOW </p>
                  <span><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></span>
                  </button>
              </div>
         </div>
        </div>
    )
}
export default Component14;