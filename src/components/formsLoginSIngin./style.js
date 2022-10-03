import styled from "styled-components";
import { Link } from 'react-router-dom';

const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
background-color: #FFFFFF;
height: 100%;
`
const Inputs = styled.input`
   height: 30px;
   width: 100%;
    margin-top: 5%;
    background-color: aliceblue;
    border-style: outset;
  border-color: #5897D6;
  border-width: 1px;
  border-radius: 18px;
  ::placeholder{

    font-family: 'kanit', serif;
    font-weight: 400;
    font-size: 13px;
    line-height: 10px;
  }

`
const RedirectRoute = styled.div`
a{
  justify-content: center;
  color: #FFFFFF;
  font-size: 20px;
  font-weight: 300;
  
}

`

const ButtonRegister = styled.button`
 height: 30px;
 width: 80%;
 margin-left: 3%;
 margin-top: 5%;
 border-radius: 18px;
 background-color: #0A73E9;
  border-style: none;
  &:hover {
    background-color: lightblue;
    cursor: pointer;
  }
  h3{
    font-family: 'kanit', serif;
    font-weight: 400;
    font-size: 16px;
    color:#FFFFFF;
    line-height: 10px;
  }
  div{
    justify-content: center;
  }
`
const SubTitle = styled.div`
width:100% ;
height: 10px;
margin-top: 47px;
h4{
    font-family: 'passione one', serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 10px;
}  
`
const StyledLink = styled(Link)`
text-align: center;
color: #333333;
text-decoration: overline;

`
export{
    StyledLink,
    SubTitle,
    ButtonRegister,
    RedirectRoute,
    Inputs,
    Form
}