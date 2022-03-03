import React, { useState } from 'react';
import styled from 'styled-components';
import Container from '../Container.styles';
import Wrapper from '../Wrapper.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch, faBars} from '@fortawesome/free-solid-svg-icons';
import {mobile, tablet, laptop, desktop , tv} from '../responsive';

const Wrapper1 = styled(Wrapper)`
height:100px;
border-bottom: solid black 1px;
`
const Left = styled.div`
flex:1;
 display:flex;
 align-items: center;
 gap:10px;
`;

const Logo = styled.div`
text-align: end;
margin-top: 10px;
`;

const Img = styled.img`
height: 40px;
width: 40px;
`;

const LogoName = styled.div`
text-align: start;
`;

const Right = styled.div`
 flex:2;
 display: flex;
 align-items: center;
 justify-content: end;
 gap:5px;

 ${mobile({
     display: 'none'
 })};

${tablet({
     display: 'none'
 })}

${laptop({
     display: 'none'
 })}
`;

const NavBtn = styled.div`
width:80px;
    height:35px;
    border:none;
    font-size: 11px;
    color:black;
    font-weight: 600;
    border-radius: 5px;  
    background-color: white; 
    justify-content: center;
    display: flex;
    align-items: center;

    &:hover {
    background-color: rgb(59, 194, 183);
    color:white;
    cursor: pointer;
    }
`;

const SearchIcon = styled.div`
 width:60px;
    color:rgb(59, 194, 183);
    transform: rotateY(180deg);

    &:hover {
        cursor: pointer;
    }
`

const BarDropDown = styled.div`
 display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -20px;
`;

const BarIcon = styled.div`
 ${mobile({
     display:'inline',
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: '30%'
 })};
 ${tablet({
     display:'inline',
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: '40%'
 })};
 ${laptop({
        display:'inline',
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: '60%'
 })};
 ${desktop({
     display:'none'
 })};
 ${tv({
     display:'none'
 })};
`
const Component2 = () => {

    const [barValue,setBarValue] = useState(false);

    const barFunc = () => {
        setBarValue(!barValue)
    }

    const navButton = ['Home','Portfolio','Blog','Pages','Features','Mega Menu','Contact']
return(
    
    <Container>
        <Wrapper1>
     <Left>
         <Logo>
       <Img src='logo512.png'  alt= "not available"/>
       </Logo>
       <LogoName>
       <h2>STARTUPRR</h2>
       </LogoName>
     </Left>
     <Right>
     
      {
          navButton.map(navItems => (
              <NavBtn>{navItems}</NavBtn>
          ))
      }
      <SearchIcon>
      <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
      </SearchIcon>
     </Right>
     <BarIcon><FontAwesomeIcon icon={faBars}  onClick={barFunc}></FontAwesomeIcon></BarIcon>
     
     
     </Wrapper1>
    {
        (barValue) && 
            <BarDropDown>
                 {
             navButton.map(navItems => (
                 <NavBtn>{navItems}</NavBtn>
             ))
         }
   
                </BarDropDown>
        }
        
        </Container>
        
)
}
export default Component2;
