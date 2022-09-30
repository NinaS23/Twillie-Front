import styled from "styled-components";

const Rigth = styled.div`
background-color: #FFFFFF;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
img{
  
    width: 100px;
    
}
@media (max-width: 796px) {
    width: 100%;

  }
  @media (max-width: 375px) {
     img{
         margin-top: 4%;
     }
    width: 100%;
  
  }
`

const Conteiner = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100vw;
height: 100vh;


`
const Inputs = styled.div`
`


export{
    Conteiner,
    Rigth,
    Inputs 
}