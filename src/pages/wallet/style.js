import styled from "styled-components";

const Conteiner = styled.div`
width: 100vw;


`

const IconsTransections = styled.div`
position: absolute;

margin-left: 15%;
ion-icon{
    color: #0A193C;
}
`

const Content = styled.div`
background-color: white;
position:absolute;
  top:70px;
  right:0px;
  bottom:0px;
  left:0px;

`

const Cards = styled.div`
background-color: #FFFFFF;
width: 100%;
height: 27%;
display: flex;
align-items: center;
@media (max-width: 796px) {
   overflow-y: auto;

  }

`

const Card = styled.div`
background-color: #6375A9;
box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
display: flex;
padding-right: 4%;
padding-left: 4%;
flex-direction: column;
justify-content: space-evenly;
margin-left: 4%;
height: 81px;
width: calc(30% - 20px);
border-radius:9px;
h2{
margin-right: 70%;
color: #FFFFFF;
font-family: 'RocknRoll One';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
}
@media (max-width: 796px) {
   width: 200px;
   h2{
       font-size: 11px;
   }
  }
div{
    display: flex;
  
   
}
`

const Value = styled.h1`
font-family: 'RocknRoll One';
font-style: normal;
font-weight: 400;
font-size: 120%;
line-height: 29px;
display: flex;
align-items: center;
color: #FFFFFF;
@media (max-width: 796px) {
   font-size: 12px;
  }

`
const Transections = styled.div`
background-color: #FFFFFF;
display: flex;
align-items: center;
justify-content: center;
height: 10%;
width: 100%;
margin-top: 1.5%;
margin-left: 4%;
div{
  width: 100%;
}

  @media (max-width: 796px) {
   display: flex;
   margin-left: 4%;
   flex-direction: column;
   width: 70%;
  }
`

const Center = styled.div`

@media (max-width: 796px) {
  display: flex;
width: 100%;
flex-direction: column;
margin-left: 4%;
 
  }
`
const Transection = styled.div`
h3{
    font-family: 'RocknRoll One';
    color: #0A193C;
    font-size: 13px;
    margin-bottom: 2%;
}
@media (max-width: 796px) {
   margin-top: 3%;
   margin-left: 15%;
   h3{
     margin-right: 13%;
   }
  }

`

const Input = styled.input`
width: 70%;
border-radius: 18px;
border-style: none;
background-color: #e9e4ee;
@media (max-width: 796px) {
    width: 100%;
    margin-top: 2%;
  }

`

const SelectType = styled.select`
width: 50%;
border-radius: 18px;
border-style: none;
background-color: #e9e4ee;
font-family: 'RocknRoll One';
color: #0A193C;


`

const Option = styled.option`

`



const ListTransections = styled.div`
margin-top: 3%;
margin:4px, 4px;
padding:4px;
background-color: #FFFFFF;
width: 100%;
height: 250px;
overflow-y: auto;
align-content: center;
@media (max-width: 796px) {
  margin-top: 4%;
  }


`





const SubimitTransection = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color:#FFFFFF;
margin-top: 1%;
@media (max-width: 796px) {
  margin-top: 3%;
margin-right: 15%;
  }

`
const ButtonTransection = styled.button`
width: 80%;
height: 30px;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
border-style: none;
 border-radius:18px;
 background-color:#6375A9;
 &:hover {
    background-color: lightblue;
    cursor: pointer;
  }
 h2{
  font-family: 'RocknRoll One';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 29px;
  display: flex;
  align-items: center;
  color:#FFFFFF ;
 }
 @media (max-width: 796px) {
   margin-left: 14%;
   width: 50%;
  }
`

const Information = styled.div`
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
h1{
  margin-top: 5%;
  font-family: 'RocknRoll One';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 29px;
  display: flex;
  align-items: center;
  color:  #0A193C;
}
@media (max-width: 796px) {
margin-left: 11%;
  }
`
export {
    Card,
    Cards,
    Conteiner,
    Content,
    Option,
    Input,
    IconsTransections,
    ListTransections,
    SelectType,
    Transection,
    Transections,
    Value,
    SubimitTransection,
    ButtonTransection,
    Center,
    Information
}