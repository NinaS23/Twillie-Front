import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "../pages/home/home";
import Login from "../pages/login/login";
import SingUp from "../pages/singup/singup";

export default function App(){
    
return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<Home />} />
                <Route path="/login"  element={<Login />} />
                <Route path="/sing-up"  element={<SingUp />} />
            </Routes>
        </BrowserRouter>
    </>
)
}