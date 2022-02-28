import React from 'react';
import styles from './component16.module.css';
import {GoogleMap,Marker} from '@react-google-maps/api';
import { Wrapper} from "@googlemaps/react-wrapper";


const Component16 = () => {
    return (
        <div className={styles.container}>
            
          <Wrapper
  apiKey={"AIzaSyBJBJBrUmcGT3TgMKiG6vEOVbmEHAL2X7E"}>
  <GoogleMap  mapContainerStyle={{width:"100%",height:'60vh'}}
  zoom={5}
  center={{lat:20.5937 , lng:78.9629}}
  >
    <Marker position={{lat:20.5937 , lng:78.9629} } 
    />
  </GoogleMap>
    </Wrapper>
    <div className={styles.formsec}>
               <input type='text' placeholder='Name'></input>
               <input type='text' placeholder='Email Address'></input>
               <input type='text' placeholder='Message' className={styles.msginput}></input>
               <button>Submit</button>
            </div>

            <div className={styles.footer}>
                  <p>Copyright 2014 startprr, All Rights Reserved.</p>
            </div>
        </div>
        
    )
}
export default Component16;