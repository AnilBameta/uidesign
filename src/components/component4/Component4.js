import React from 'react';
import styles from './component4.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDesktop} from '@fortawesome/free-solid-svg-icons';
import {faPuzzlePiece} from '@fortawesome/free-solid-svg-icons';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {faKey} from '@fortawesome/free-solid-svg-icons';

const Component4 = () => {
    return (
        <div className={styles.container}>
          <div className={styles.headingfont}>
              <div className={styles.keyiconbg}>
              <FontAwesomeIcon icon={faKey} className={styles.keyicon}></FontAwesomeIcon>
              </div>
          </div>
          <div className={styles.heading}>
              <h2>AMAZING FEATURES</h2>
              <p>With unlimited features that we offer, we promise it's possible to make everything that was impossible for you!</p>
          </div>
          <div className={styles.content}>
              <div className={styles.leftcontent}>
                <div className={styles.leftcontentcontainer}>
                    <div className={styles.wrapper}>
                        <div className={styles.iconspart}>
                    <FontAwesomeIcon icon={faDesktop} className={styles.desktopicon}></FontAwesomeIcon>
                    </div>
                    <div className={styles.contentpart}>
                    <h4>RESPONSIVE & MULTIPURPOSE</h4> 
                    <p> We give the best responsive designs and the content can be used</p> 
                    </div>
                    </div>
                    <div className={styles.leftcontentcontainer}>
                    <div className={styles.wrapper}>
                        <div className={styles.iconspart}>
                    <FontAwesomeIcon icon={faPuzzlePiece} className={styles.desktopicon}></FontAwesomeIcon>
                    </div>
                    <div className={styles.contentpart}>
                    <h4>EASY CUSTOMIZATION</h4> 
                    <p> We give the best responsive designs and the content can be used</p> 
                    </div>
                    </div>
                    </div>
                    <div className={styles.leftcontentcontainer}>
                    <div className={styles.wrapper}>
                        <div className={styles.iconspart}>
                    <FontAwesomeIcon icon={faStar} className={styles.desktopicon}></FontAwesomeIcon>
                    </div>
                    <div className={styles.contentpart}>
                    <h4>UNLIMITED FEATURES</h4> 
                    <p> We give the best responsive designs and the content can be used</p> 
                    </div>
                    </div>
                    </div>
                </div>
              </div>
              <div className={styles.rightcontent}>
                  <div className={styles.box1}>
                      <img src='../../../public/images/sharon-mccutcheon-62vi3TG5EDg-unsplash.jpg' alt= 'not available'></img>
                  </div>
                  <div className={styles.box2}>
                      <img src='../../../public/images/sharon-mccutcheon-NkQD-RHhbvY-unsplash.jpg' alt= 'not available'></img>
                  </div>
              </div>
          </div>
        </div>
    )
} 
export default Component4;