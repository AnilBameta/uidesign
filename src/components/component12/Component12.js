import React, { useEffect, useState } from "react";
import styles from "./component11.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretLeft, faSquareCaretRight, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const Component12 = () => {

    const left = () => {

    }
    const right = () => {

    }
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
              <div className={styles.cardcontainer}>
                <div><FontAwesomeIcon
              icon={faSquareCaretLeft}  
              onClick={left}
            ></FontAwesomeIcon></div>
              <div></div>
                <div><FontAwesomeIcon
              icon={faSquareCaretRight}
              onClick={right}
            ></FontAwesomeIcon></div>
              </div>
            </div>

        </div>
    )
}