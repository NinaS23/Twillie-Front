import styled from "styled-components";
import logo from "../assets/imgs/logo.png";
import FormsLoginSigin from "../components/FormsLoginSigin";
import { devices } from "../sizes/sizesScreen";

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
padding-top: 16%;
padding-left: 5%;
background-color: #5897D6;
width: 60%;
h1{
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
    padding-bottom: 5%;
    justify-content: center;
    padding-left: 0%;
    align-items: center;
}
@media (max-width:425px) {
    width: 100%;
    padding-bottom: 5%;
    justify-content: center;
    padding-left: 0%;
    align-items: center;
    h1{
        font-size: 36px;
    }
    p{
        font-size: 18px;
    }
}

`
const Rigth = styled.div`
background-color: #FFFFFF;
width: 40%;
display: flex;
flex-direction: column;
padding-top: 5%;
align-items: center;
img{
    width: 90px;
}
`

const Conteiner = styled.div`
display: flex;
width: 100%;
height: 100vh;
@media (max-width:768px) {
    flex-direction:column;
}

`
const Inputs = styled.div`
`