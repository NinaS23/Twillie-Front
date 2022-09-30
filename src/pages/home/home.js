import { useNavigate } from "react-router-dom";
import home from "../../assets/imgs/home.png";
import { HomeContent,HomeGif } from "./style";

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



