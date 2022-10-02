import { useNavigate } from "react-router-dom";
import homeTwillie from "../../assets/imgs/homeTwillie.png";
import grafico from "../../assets/imgs/grafico.png";
import { Conteiner, Header, Icon, Options, ImageConteiner, ButtonOptions, Content } from "./style";



export default function TwillieMainContent() {
  const navigate = useNavigate()
    return (
        <Conteiner>
            <Header>
                <div>
                    <img src={homeTwillie} alt="foto de perfil" />
                    <h2>Wolf</h2>
                </div>
                <Icon onClick={() => navigate("/login")}>
                <ion-icon name="exit"></ion-icon>
                </Icon>
            </Header>
            <Content>
                <Options>
                    <ButtonOptions onClick={() => navigate("/wallet")}><h3>Wallet</h3></ButtonOptions>
                    <ButtonOptions><h3>investimento</h3></ButtonOptions>
                    <ButtonOptions><h3>gráfico</h3></ButtonOptions>
                </Options>
                <ImageConteiner>
                    <img src={grafico} alt="animação de pessoas" />
                </ImageConteiner>
            </Content>
        </Conteiner>
    )
}


