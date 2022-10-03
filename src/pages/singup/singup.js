
import logo from "../../assets/imgs/logo.png";
import FormsLoginSigin from "../../components/formsLoginSIngin./FormsLoginSigin";
import { Rigth, Conteiner, Inputs } from "./style";

export default function SingUp() {

    return (
        <>
        <Conteiner>
          
            <Rigth>
            <img src={logo} alt="logo twillie" />
                    <Inputs>

                        <FormsLoginSigin
                          type={"register"}
                          pathFront={"/login"}
                          pathBack={"/sing-up"}
                        />

                    </Inputs>
                </Rigth>
        </Conteiner>
        </>
    )
}


