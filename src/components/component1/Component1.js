import React from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {mobile, tablet} from '../responsive';

const Container1 = styled.div`
  background-image: url('../../../public/images/pexels-moose-photos-1586973.jpg');
  background-color: transparent;
    display: flex;
    background-size: cover;
    background-position: right;
   
`;

const Left = styled.div`
    flex:1;
    height:600px;
    text-align: center;
    display:flex;
    align-items: center;
`;

const Content = styled.div`
margin-top:100px;
`;

const DownBtn = styled.button`
 width:40px;
    height:40px;
    border-radius: 50%;
    border-width: 5px;;
    color: rgb(59, 194, 183);
    border-color:rgb(59, 194, 183);
    cursor: pointer;
`;

const P = styled.p`
font-size: 15px;
margin: 0;
display: block;
`;

const H1 = styled.h1`
 margin:0;
   font-size:38px;
`;

const H2 = styled.h2`
margin-top:35px;
`;

const H5 = styled.h5`
background-color: white;
    display:inline;
    padding:5px;
    font-size: 13px;
`;

const Right = styled.div`
flex:1;
${mobile({display:'none'})};
${tablet({display:'none'})};
`


const Component1 = () => {
  return (
    <Container1>
      <Left>
        <Content>
          <P>What are you waiting for</P>
          <H1>Let's be creative!</H1>
          <H5>Unique,NEXT GENERATION & HIGHLY FLEXIBLE</H5>
          <H2>START DOING THAT</H2>
          <DownBtn> 
          <FontAwesomeIcon style = {{fontSize:'22px'}} icon={faAngleDown}></FontAwesomeIcon>
           </DownBtn>
        </Content>
      </Left>
      <Right></Right>
    </Container1>
  );
};
export default Component1;
