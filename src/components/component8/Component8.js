import React from "react";
import styles from "./component8.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { faHourglass } from "@fortawesome/free-solid-svg-icons";
import { faTicket } from "@fortawesome/free-solid-svg-icons";


const Component8 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.headingfont}>
          <div className={styles.keyiconbg}>
            <FontAwesomeIcon
              icon={faBriefcase}
              className={styles.keyicon}
            ></FontAwesomeIcon>
          </div>
        </div>
        <div className={styles.heading}>
          <h2>COMPANY FACTS</h2>
          <p>
            We do love to work and increase our counter number, this is what we have done till now
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.numcardcontainer}>
              <div className={styles.numcard}>
                 <h1>218</h1>
                 <FontAwesomeIcon
              icon={faCheckSquare}
              className={styles.numcardicon}
            ></FontAwesomeIcon>
              <p>COMPLETED PROJECTS</p>
              </div>
              <div className={styles.numcard}>
              <h1>360</h1>
                 <FontAwesomeIcon
              icon={faHourglass}
              className={styles.numcardicon}
            ></FontAwesomeIcon>
              <p>HOURS OF WORK</p>
              </div>
              <div className={styles.numcard}>
              <h1>135</h1>
                 <FontAwesomeIcon
              icon={faTicket}
              className={`${styles.numcardicon} ${styles.numcardicon3}`}
            ></FontAwesomeIcon>
              <p>SOLVED TICKETS</p>
              </div>
              <div className={styles.numcard}>
              <h1>174</h1>
                 <FontAwesomeIcon
              icon={faThumbsUp}
              className={styles.numcardicon}
            ></FontAwesomeIcon>
              <p>SATISFIED CLIENTS</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Component8;
