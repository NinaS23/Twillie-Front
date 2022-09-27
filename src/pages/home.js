import { useNavigate } from "react-router-dom";
import homeGif from "../assets/imgs/home.gif"
import styled from "styled-components";

export default function Home() {
    const navigate = useNavigate();

    setTimeout(() => {
      navigate("/login");
    }, 6000);
    
    return (
        <HomeContent>
            <HomeGif src={homeGif} alt="twillie logo" />
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