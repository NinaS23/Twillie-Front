import { useNavigate } from "react-router-dom";
import home from "../assets/imgs/home.png"
import styled from "styled-components";

export default function Home() {
    const navigate = useNavigate();

    setTimeout(() => {
      navigate("/login");
    }, 3000);
    
    return (
        <HomeContent>
            <HomeGif src={home} alt="twillie logo" />
        </HomeContent>
    )
}



const HomeContent = styled.div`
justify-content: center;
display: flex;
align-items: center;
width: 100%;
height: 100vh;

`
const HomeGif = styled.img`

`