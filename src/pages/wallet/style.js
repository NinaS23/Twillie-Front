import styled from "styled-components";

const Conteiner = styled.div`
width: 100vw;


`
const Trash = styled.div`
display: flex;
align-items: center;
ion-icon{
    margin-right: 2%;
    color: #0A193C;
}
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
margin-top: 1.5%;
margin-left: 2.5%;
div{
  width: 100%;
}

  @media (max-width: 796px) {
   display: flex;
   margin-left: 0%;
   flex-direction: column;
   width: 70%;
  }
`

const Center = styled.div`

@media (max-width: 796px) {
  display: flex;
width: 100%;
align-items: center;
flex-direction: column;
justify-content: center;
 
  }
`
const Transection = styled.div`
width: 30%;
margin-left: 2%;
h3{
    font-family: 'RocknRoll One';
    color: #0A193C;
    font-size: 13px;
    margin-bottom: 2%;
}
@media (max-width: 796px) {
   margin-top: 3%;
   margin-left: 15%;
  }
`

const Input = styled.input`
width: 100%;
border-radius: 18px;
border-style: none;
background-color: #e9e4ee;


`

const SelectType = styled.select`
width: 100%;
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


const TransectionBlock = styled.div`
background-color: #6375A9;
box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
margin-top: 2%;
margin-left: 4%;
height: 40%;
width: 90%;
border-radius:9px;

`

const Divisor = styled.div`
display: flex;
justify-content: space-between;
padding-right: 20px;
padding-left: 20px;
align-items: center;
padding-top: 30px;
`

const BalanceRegister = styled.div`
  display: flex;

`

const ValueRegister = styled.h2`
margin-right: 10%;
font-family: 'RocknRoll One';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 29px;
display: flex;
color: #FFFFFF;

`
const Register = styled.div`
display: flex;
flex-direction: column;
h2{
font-family: 'RocknRoll One';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 29px;
display: flex;
align-items: center;
color: #FFFFFF;
}
h3{
font-family: 'kanit';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 29px;
display: flex;
align-items: center;
color: #FFFFFF;
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
   width: 60%;
  }
`
export {
    Card,
    Cards,
    Conteiner,
    Content,
    Register,
    BalanceRegister,
    ValueRegister,
    Divisor,
    TransectionBlock,
    Option,
    Input,
    IconsTransections,
    ListTransections,
    SelectType,
    Transection,
    Transections,
    Value,
    Trash,
    SubimitTransection,
    ButtonTransection,
    Center
}