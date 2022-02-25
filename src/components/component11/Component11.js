import React, { useEffect, useState } from "react";
import styles from "./component11.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretLeft, faSquareCaretRight, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import {quotes} from './data';

const Component11 = () => {
    const [currentValue, setCurrentValue] = useState(0)
    const [quoteData,setQuoteData] = useState(quotes[currentValue]);

    useEffect(()=>{
        setQuoteData(quotes[currentValue])
    },[currentValue])
   const left = () => {
          if(currentValue === 0) {
              setCurrentValue(quotes.length-1)
          }
          else {
              setCurrentValue(currentValue-1)
          }
   }

   const right = () => {
    if(currentValue === quotes.length-1) {
        setCurrentValue(0)
    }
    else {
        setCurrentValue(currentValue+1)
    }
   }

    return (
        <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.headingfont}>
          <div className={styles.keyiconbg}>
            <FontAwesomeIcon
              icon={faQuoteLeft}
              className={styles.keyicon}
            ></FontAwesomeIcon>
          </div>
        </div>
        <div className={styles.longbtn}>
          <button>
              
              <h6>{quoteData?.name}</h6> <p>{quoteData?.desig}</p>  </button>
        </div>
        <div className={styles.quote}>
         {`'' ${quoteData?.quote} ''`} 
           
        </div>
        <div className={styles.sliderbtn}>
            <div className={styles.slidericon}>
        <FontAwesomeIcon
              icon={faSquareCaretLeft}  
              onClick={left}
            ></FontAwesomeIcon>
            </div>
            <div className={styles.slidericon}>
            <FontAwesomeIcon
              icon={faSquareCaretRight}
              onClick={right}
            ></FontAwesomeIcon>
            </div>
        </div>
        </div>
        </div>
    )
}
export default Component11;