import React, { useState } from "react";
import styles from "./component7.module.css";
import { images } from "./imgData";
import { allImages } from "./imgData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Component7 = () => {
  const [click, setClick] = useState(true);
  const clicked = () => {
    setClick(!click);
    console.log(click);
  };

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2>SAMPLE WORKS</h2>
        <p>
          Let's take a look at some of the best of our works here , we love them
          and hope you too
        </p>
      </div>
      <div className={styles.photosection}>
        <div className={styles.photocontainer}>
          {click
            ? images.map((item) => (
                <div className={styles.photo}>
                  <div className={styles.bgcontainer}>
                    <FontAwesomeIcon
                      icon={faSearch}
                      className={styles.topicon}
                    ></FontAwesomeIcon>
                    <h6>Corporate Brochure</h6>
                    <p>Illustration/Print</p>
                    <FontAwesomeIcon
                      icon={faHeart}
                      className={styles.bottomicon}
                    ></FontAwesomeIcon>
                  </div>
                  <img
                    className={styles.onephoto}
                    src={`/images//Component7/${item.img}`}
                    alt="not available"
                  ></img>
                </div>
              ))
            : allImages.map((item) => (
                <div className={styles.photo}>
                  <div className={styles.bgcontainer}>
                    <FontAwesomeIcon
                      icon={faSearch}
                      className={styles.topicon}
                    ></FontAwesomeIcon>
                    <h6>Corporate Brochure</h6>
                    <p>Illustration/Print</p>
                    <FontAwesomeIcon
                      icon={faHeart}
                      className={styles.bottomicon}
                    ></FontAwesomeIcon>
                  </div>
                  <img
                    className={styles.onephoto}
                    src={`/images//Component7/${item.img}`}
                    alt="not available"
                  ></img>
                </div>
              ))}
        </div>
      </div>
      <div className={styles.longbutton}>
        {click ? (
          <button onClick={clicked}>View all works</button>
        ) : (
          <button onClick={clicked}>All works</button>
        )}
      </div>
    </div>
  );
};
export default Component7;
