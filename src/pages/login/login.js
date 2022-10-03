import logo from "../../assets/imgs/logo.png";
import FormsLoginSigin from "../../components/formsLoginSIngin./FormsLoginSigin";
import { Conteiner,Rigth,Left,Inputs } from "./style";


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
                           pathFront={"/home"}
                           pathBack={"/sing-in"}
                        />

                    </Inputs>
                </Rigth>
        </Conteiner>
        </>
    )
}
