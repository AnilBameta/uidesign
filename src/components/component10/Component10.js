import React, { useEffect, useState } from "react";
import styles from "./component10.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faVaadin} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {members} from './data';

const Component10 = () => {

    const [data,setData] = useState([])
    const [start,setStart] = useState(0)
    const [end,setEnd] = useState(4)


    const right = () => {
        if(end === members.length) {
           setStart(0);
           setEnd(4);
        }
        else {
            setStart(end);
        setEnd(end+4);
        }
        
    }
    useEffect(() =>{
        let da = members.slice(start,end).map((item) => {
        return item;
    })
    setData(da)
},[start])
console.log(data)

    const left = () => {
        if(start === 0)
        {
          setEnd(members.length);
          setStart(members.length-4)
        }
        else{
            setEnd(start)
            setStart(start-4);
        }
        
     
    }

    
    return (
       <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.header}>
             <div className={styles.left}>
             <FontAwesomeIcon
              icon={faArrowCircleLeft}
              className={styles.headericon}
             onClick={left}></FontAwesomeIcon>
             </div>
             <div className={styles.center}>
              <h2>TEAM MEMBERS</h2>
              <p>We are some creative people with powerful knowledge & awesome skills behind the secne bringing you the bests</p>
             </div>
             <div className={styles.right}>
             <FontAwesomeIcon
              icon={faArrowCircleRight}
              className={styles.headericon}
              onClick={right}></FontAwesomeIcon>
             </div>
            </div>
            <div className={styles.content}>
              <div className={styles.cardcontainer}>

                {
                    data.map(dataValue => (
                        <div className= {styles.membercard}>
                        <div className={styles.cardimg}>
                        
                        <div className={styles.imgbg}>
                                <div className={styles.box}> <FontAwesomeIcon
              icon={faInstagram}
              className={styles.imgbgicon}
              onClick={right}></FontAwesomeIcon> </div>
                                <div className={styles.box}><FontAwesomeIcon
              icon={faFacebook}
              className={styles.imgbgicon}
              onClick={right}></FontAwesomeIcon> </div>
                                <div className={styles.box}> <FontAwesomeIcon
              icon={faTwitter}
              className={styles.imgbgicon}
              onClick={right}></FontAwesomeIcon></div>
                                <div className={styles.box}><FontAwesomeIcon
              icon={faVaadin}
              className={styles.imgbgicon}
              onClick={right}></FontAwesomeIcon> </div>
                                </div>  



                        <img src={`/images/Component10/${dataValue.img}`}   alt='not available' ></img>
                        
                        </div>
                        <div className={styles.cardbtn}>
                         <button>{dataValue.name}</button>
                        </div>
                        <div className={styles.cardtxt}>
                           <div className={styles.desig}>
                                {dataValue.desig} 
                                </div>
                           <div className={styles.mail}>
                           <FontAwesomeIcon
              icon={faEnvelope}
              className={styles.cardicon}
              onClick={right}></FontAwesomeIcon>
                               <p>{dataValue.mail} </p>
                               </div>
                           <div className={styles.phn}> 
                           <FontAwesomeIcon
              icon={faPhone}
              className={styles.cardicon}
              onClick={right}></FontAwesomeIcon>
              <p>{dataValue.phn}</p></div>
                        </div>
                   

                 
                 </div>
                  ))

                }

              </div>
            </div>
          </div>
       </div>
    )
}
export default Component10;