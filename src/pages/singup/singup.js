import logo from "../../assets/imgs/logo.png";
import FormsLoginSigin from "../../components/formsLoginSIngin./FormsLoginSigin";
import { Rigth,Conteiner,Inputs } from "./style";

export default function SingUp(){
    return(
        <>
        <Conteiner>
          
            <Rigth>
            <img src={logo} alt="" />
                    <Inputs>

                        <FormsLoginSigin
                          type={"register"}
                        />

                    </Inputs>
                </Rigth>
        </Conteiner>
        </>
    )
}


