import React, { Component, useEffect, useState } from "react";
import styles from "./component13.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Component13 = () => {
    return (
        <div className={styles.container}>
           <div className= {styles.wrapper}>
                 <div className={styles.header}>
                      <h2>REAL CHEAP PRICES</h2>
                      <p>We offer all our services in real prices in comparison with similar companies</p>
                 </div>
                 <div className={styles.content}>
                   <div className={styles.cardcontainer}>
                       <div className={styles.card}>
                         <div className={styles.upbtn}>
                           <button> STANDARD PLAN</button>
                         </div>
                         <div className={styles.num}>
                            <h1>19.99 Monthly</h1>
                         </div>
                         <div className={styles.list}>
                           <ul>
                               <li>5 Projects</li>
                               <li> 5 GB Storage</li>
                               <li>Unlimited Users</li>
                               <li>10 GB Bandwidth</li>
                               <li>Enhanced Security</li>
                           </ul>
                         </div>
                         <div className={styles.downbtn}>
                            <button>SIGN UP NOW</button> 
                         </div>
                       </div>
                       <div className={styles.card}>
                         <div className={styles.upbtn}>
                           <button> STANDARD PLAN</button>
                         </div>
                         <div className={styles.num}>
                            <h1>19.99 Monthly</h1>
                         </div>
                         <div className={styles.list}>
                           <ul>
                               <li>5 Projects</li>
                               <li> 5 GB Storage</li>
                               <li>Unlimited Users</li>
                               <li>10 GB Bandwidth</li>
                               <li>Enhanced Security</li>
                           </ul>
                         </div>
                         <div className={styles.downbtn}>
                            <button>SIGN UP NOW</button> 
                         </div>
                       </div>
                       <div className={styles.card}>
                         <div className={styles.upbtn}>
                           <button> STANDARD PLAN</button>
                         </div>
                         <div className={styles.num}>
                            <h1>19.99 Monthly</h1>
                         </div>
                         <div className={styles.list}>
                           <ul>
                               <li>5 Projects</li>
                               <li> 5 GB Storage</li>
                               <li>Unlimited Users</li>
                               <li>10 GB Bandwidth</li>
                               <li>Enhanced Security</li>
                           </ul>
                         </div>
                         <div className={styles.downbtn}>
                            <button>SIGN UP NOW</button> 
                         </div>
                       </div>
                       <div className={styles.card}>
                         <div className={styles.upbtn}>
                           <button> STANDARD PLAN</button>
                         </div>
                         <div className={styles.num}>
                            <h1>19.99 Monthly</h1>
                         </div>
                         <div className={styles.list}>
                           <ul>
                               <li>5 Projects</li>
                               <li> 5 GB Storage</li>
                               <li>Unlimited Users</li>
                               <li>10 GB Bandwidth</li>
                               <li>Enhanced Security</li>
                           </ul>
                         </div>
                         <div className={styles.downbtn}>
                            <button>SIGN UP NOW</button> 
                         </div>
                       </div>

                   </div>
                 </div>
           </div>
        </div>
    )
}
export default Component13;