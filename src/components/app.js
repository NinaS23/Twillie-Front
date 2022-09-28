import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "../pages/home";
import Login from "../pages/login";
import SingUp from "../pages/singup";

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