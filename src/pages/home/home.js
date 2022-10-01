import { useNavigate } from "react-router-dom";
import logo from "../../assets/imgs/logo.png";
import { HomeContent,HomeGif } from "./style";

export default function Home() {
    const navigate = useNavigate();

    setTimeout(() => {
      navigate("/login");
    }, 3000);
    
    return (
        <HomeContent>
            <HomeGif src={logo} alt="twillie logo" />
        </HomeContent>
    )
}



