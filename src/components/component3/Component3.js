import React from 'react';
import styles from './component3.module.css';

const Component3 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
            <h1>WHAT WE OFFER</h1>
            <p>We offer our customers the best services & solutions, this is our main services list</p>
            </div>
     
     <div className={styles.cardpart}>
            <div className={styles.card1}>1</div>
            <div className={styles.card2}>2</div>
            <div className={styles.card3}>3</div>
        </div>
        </div>
        
    )
}
export default Component3;
