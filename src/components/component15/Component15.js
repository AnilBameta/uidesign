import React from 'react';
import styles from './component15.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faTwitch} from '@fortawesome/free-brands-svg-icons';
import {faPinterest} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faVaadin} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faAmazon} from '@fortawesome/free-brands-svg-icons';
import {faAirbnb} from '@fortawesome/free-brands-svg-icons';
import {faAws} from '@fortawesome/free-brands-svg-icons';

const Component15 = () => {
    const fontarr = [faAirbnb,faAmazon,faAws,faInstagram,faVaadin,faYoutube,faLinkedin,faPinterest,faTwitch,faFacebook,faTwitter]
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.heading}> 
                <div className={styles.headingicon}>
                <img className = {styles.image} src='logo512.png'  alt= "not available"/>
                </div>
                <div className={styles.headingname}>
                    <h2>STARTUPRR</h2></div>
                </div>
                <div className={styles.font}>
                <div className={styles.fontcontainer}>
                    {
                        fontarr.map(fonts =>(
                            <div className={styles.fontcard}>
                             <FontAwesomeIcon icon={fonts}></FontAwesomeIcon>
                            </div>
    ))
                      
                    }
                 
                </div>
                     </div>
                
            </div>

        </div>
    )
}
export default Component15;