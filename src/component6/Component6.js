import React from 'react';
import styles from './component6.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPuzzlePiece} from '@fortawesome/free-solid-svg-icons';
import {faBriefcase} from '@fortawesome/free-solid-svg-icons';

const Component6 = () => {
    return (
      <div className={styles.container}>
      <div className={styles.wrapper}>
      <div className={styles.headingfont}>
              <div className={styles.keyiconbg}>
              <FontAwesomeIcon icon={faBriefcase} className={styles.keyicon}></FontAwesomeIcon>
              </div>
          </div>

      </div>
      </div>
    )
}
export default Component6;