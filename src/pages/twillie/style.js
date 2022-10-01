import styled from "styled-components";



const ConteinerInside = styled.div`
background-color: #6375A9;
position: relative;
width: 89%;
height: 89%;
img{
  float:right;
  display:block;
  margin-right: 5%;
}
@media (max-width: 796px) {
   img{
     margin-top: 40%;
     border-radius: 197px;
   }
   @media (max-width: 365px) {
   img{
     margin-top: 50%;
  
     border-radius: 197px;
   }
  }
}
`

const SubTitle = styled.div `
width: 43%;
margin-top: 5%;
margin-left: 5%;
h1{
font-family: 'RocknRoll One', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 36px;
line-height: 30px;
display: flex;
align-items: center;
color: #FFFFFF;
}
`


const Conteiner = styled.div`
background-color: #2D4CAD;
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`



export{
    Conteiner,
    ConteinerInside,
    SubTitle
}