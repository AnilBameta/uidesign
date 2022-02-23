import React from "react";
import styles from "./component1.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown} from '@fortawesome/free-solid-svg-icons';

const Component1 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.content}>
          <p>What are you waiting for</p>
          <h1>Let's be creative!</h1>
          <h5>Unique,NEXT GENERATION & HIGHLY FLEXIBLE</h5>
          <h2>START DOING THAT</h2>
          <button className={styles.downbtn}> 
          <FontAwesomeIcon style = {{fontSize:'22px'}} icon={faAngleDown}></FontAwesomeIcon>
           </button>
        </div>
      </div>
      <div className={styles.right}></div>
    </div>
  );
};
export default Component1;
