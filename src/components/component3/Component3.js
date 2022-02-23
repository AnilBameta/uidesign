import React from 'react';
import styles from './component3.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDesktop} from '@fortawesome/free-solid-svg-icons';
import {faPuzzlePiece} from '@fortawesome/free-solid-svg-icons';
import {faHandsHelping} from '@fortawesome/free-solid-svg-icons';
const Component3 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
            <h2>WHAT WE OFFER</h2>
            <p>We offer our customers the best services & solutions, this is our main services list</p>
            </div>
     
     <div className={styles.cardpart}>
            <div className={styles.card1}>
                <div className={styles.cardheading}>
                  <div className={styles.cardheadingbg}>
                  <FontAwesomeIcon icon={faDesktop} className={styles.cardsearchicon}></FontAwesomeIcon>
                  </div>
                </div>
                <div className={styles.cardcontent}>
                   <h3>Responsive & Multipurpose</h3>
                   <p>dwhew wdwdwq hquhw wdw dhwudh dhwq hdhwqdwh whdwqwh hwhwdwddh dwdwdww</p>
                </div>
                <div className={styles.cardbutton}>
                   <button>Read More</button>
                </div>
            </div>
            <div className={styles.card2}>
            <div className={styles.cardheading}>
                  <div className={styles.cardheadingbg}>
                  <FontAwesomeIcon icon={faPuzzlePiece} className={styles.cardsearchicon}></FontAwesomeIcon>
                  </div>
                </div>
                <div className={styles.cardcontent}>
                   <h3>Responsive & Multipurpose</h3>
                   <p>dwhew wdwdwq hquhw wdw dhwudh dhwq hdhwqdwh whdwqwh hwhwdwddh dwdwdww</p>
                </div>
                <div className={styles.cardbutton}>
                   <button>Read More</button>
                </div>
            </div>
            <div className={styles.card3}>
            <div className={styles.cardheading}>
                  <div className={styles.cardheadingbg}>
                  <FontAwesomeIcon icon={faHandsHelping} className={styles.cardsearchicon}></FontAwesomeIcon>
                  </div>
                </div>
                <div className={styles.cardcontent}>
                   <h3>Responsive & Multipurpose</h3>
                   <p>dwhew wdwdwq hquhw wdw dhwudh dhwq hdhwqdwh whdwqwh hwhwdwddh dwdwdww</p>
                </div>
                <div className={styles.cardbutton}>
                   <button>Read More</button>
                </div>
            </div>
        </div>
        </div>
        
    )
}
export default Component3;
