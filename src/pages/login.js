import styled from "styled-components";
import logo from "../assets/imgs/logo.png"
import FormsLoginSigin from "../components/FormsLoginSigin";


export default function Login(){
    return(
        <>
        <Conteiner>
        <Left>
            <h1>Welcome To Twillie</h1>
            <p>the best place to organize your life</p>
        </Left>    
            <Rigth>
                    <img src={logo} alt="twillie logo" />
                    <Inputs>

                        <FormsLoginSigin
                           type={"login"}
                        />

                    </Inputs>
                </Rigth>
        </Conteiner>
        </>
    )
}

const Left = styled.div`
display: flex;
flex-direction: column;
padding-left: 5%;
background-color: #2D4CAD;
width: 60%;
h1{
    margin-top: 30%;
    color: #f5fffb;
    font-family: 'passione one', serif;
    font-weight: 600;
    font-size: 50px;
    line-height: 58px;
}
p{
    color: #f5fffb;
    font-family: 'passione one', serif;
    margin-left: 2%;
    font-weight: 400;
    font-size: 26px;
    line-height: 10px;
}
@media (max-width:768px) {
    width: 100%;
    height: 20%;
    h1{
        margin-top: 5% ;
    }
    p{
        margin-bottom: 5%;
    }
    width: 100%;
    justify-content: center;
    padding-left: 0%;
    align-items: center;
}
@media (max-width:425px) {
    width: 100%;
    height: 20%;
    justify-content: center;
    padding-left: 0%;
    align-items: center;
    h1{
        margin-top: 5% ;
        font-size: 36px;
    }
    p{
        margin-bottom: 5%;
        font-size: 18px;
    }
}

`
const Rigth = styled.div`
background-color: #FFFFFF;
width: 40%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
img{
    margin-top: 5%;
    width: 90px;
}
@media (max-width: 796px) {
    width: 100%;
    height: 64%;
  }
  @media (max-width: 375px) {
     img{
         margin-top: 15%;
     }
    width: 100%;
    height: 64%;
  }
`

const Conteiner = styled.div`
display: flex;
position: relative;
width: 100vw;
height: 100vh;
@media (max-width:768px) {
    flex-direction:column;

}

`
const Inputs = styled.div`
`

