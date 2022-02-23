import React from "react";
import styles from "./component6.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
const {CircularProgress} =require('@material-ui/core');

const Component6 = () => {
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
          <h2>OUR POWERFUL SKILLS</h2>
          <p>
            We're good and experienced at different thngs and areas and we
            promise about quality of our works
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.percentcardcontainer}>
          <div className={styles.percentcard}>
              <div className={styles.percent}>
                <div className={styles.number}>50%</div>
                <CircularProgress size="100px" variant='determinate'  value='50' className={styles.progress}/>
              </div>
              <div className={styles.content}>
                WEB DESIGN
              </div>
            </div>
            <div className={styles.percentcard}>
              <div className={styles.percent}>
                <div className={styles.number}>60%</div>
                <CircularProgress size="100px" variant='determinate'  value='60' className={styles.progress} />
              </div>
              <div className={styles.content}>
                ADVERTISEMENT
              </div>
            </div>
            <div className={styles.percentcard}>
              <div className={styles.percent}>
                <div className={styles.number}>65%</div>
                <CircularProgress size="100px" variant='determinate'   value='65' className={styles.progress}/>
              </div>
              <div className={styles.content}>
                WEB DEVELOPMENT
              </div>
            </div>
            <div className={styles.percentcard}>
              <div className={styles.percent}>
                <div className={styles.number}>70%</div>
                <CircularProgress size="100px" variant='determinate' value='70' className={styles.progress}/>
              </div>
              <div className={styles.content}>
                SPEED OPTIMIZATION
              </div>
            </div>
            <div className={styles.percentcard}>
              <div className={styles.percent}>
                <div className={styles.number}>75%</div>
                <CircularProgress size="100px" variant='determinate'  value='75' className={styles.progress}/>
              </div>
              <div className={styles.content}>
                CUSTOMER SUPPORT
              </div>
            </div>
            <div className={styles.percentcard}>
              <div className={styles.percent}>
                <div className={styles.number}>80%</div>
                <CircularProgress size="100px" variant='determinate'  value='80' className={styles.progress}/>
              </div>
              <div className={styles.content}>
                MARKETING
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Component6;
