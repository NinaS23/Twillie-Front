import styled from "styled-components";


const Conteiner = styled.div`
display: flex;
height: 100vh;
width: 100vw;
flex-direction: column;

`

const Icon = styled.div`
 margin-right: 5%;
  ion-icon {
    color: white;
    width: 45px;
    height: 30px;

  }
`

const Options = styled.div`
background-color: #FFFFFF;
width:60%;
margin-top: 11%;
@media (max-width: 912px) {
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

`

const ImageConteiner = styled.div`
background-color: #FFFFFF;
width: 40%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
img{
    margin-top: calc(120px - 20px);
    width: 300px;
    height: 290px;
}
@media (max-width: 912px) {
    display: none;
  }


`
const Header  = styled.div`
background-color: blue;
display: flex;
justify-content: space-between;
align-items: center;
height: 70px;
div{
    display: flex;
}
h2{
margin-left: 6%;
width: 30px;
font-family: 'RocknRoll One';
font-style: normal;
font-weight: 400;
font-size: 28px;
line-height: 52px;
display: flex;
align-items: center;
color: #FFFFFF;
}
img{
margin-left: 10%;
width: 50px;
height: 50px;
border-radius: 50px;
}

`

const Content = styled.div`
display: flex;
@media (max-width: 912px) {
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;
  }
`
const ButtonOptions = styled.button`
 height: 20%;
 width: 60%;
 margin-left: 5%;
 margin-top: 7%;
 border-radius: 40px;
 background-color: #6375A9;
  border-style: none;
  &:hover {
      background-color: lightblue;
      filter: brightness(0.9);
      cursor: pointer;
  }
  h3{
    font-family: 'kanit', serif;
    font-weight: 400;
    font-size: 16px;
    color:#FFFFFF;
    line-height: 10px;
  }
  @media (max-width: 912px) {
    height: 10%;
    width: 60%;
    h3{
        margin-left: 0%;
        font-size: 20px;
    }
  }
`

export{
    ButtonOptions,
    Conteiner,
    Content,
    Header,
    Icon,
    Options,
    ImageConteiner
}