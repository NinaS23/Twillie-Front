import { Conteiner,SubTitle,ConteinerInside } from "./style";
import { useNavigate } from "react-router-dom";
import homeTwillie from "../../assets/imgs/homeTwillie.png"

export default function TwillieMain() {
  const navigate = useNavigate();

   setTimeout(() => {
    navigate("/main");
  }, 4000); 

  return (
    <Conteiner>
      <ConteinerInside>
        <SubTitle>
      <h1>Twillie é um assistente financeiro , desenvolvido para auxiliar sua vida</h1>
      </SubTitle>
      <div>
        <img src={homeTwillie} alt="pessoas com gráfico" />
      </div>
      </ConteinerInside>
    </Conteiner>
  )
}
