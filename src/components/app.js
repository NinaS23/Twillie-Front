import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "../pages/home/home";
import Login from "../pages/login/login";
import SingUp from "../pages/singup/singup";
import TwillieMain from "../pages/twillie/twillie";
import TwillieMainContent from "../pages/twillieMainContent/twillieMainContent";
import Wallet from "../pages/wallet/wallet";

export default function App(){
    
return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<Home />} />
                <Route path="/login"  element={<Login />} />
                <Route path="/sing-up"  element={<SingUp />} />
                <Route path="/home"  element={<TwillieMain />} />
                <Route path="/main"  element={<TwillieMainContent />} />
                <Route path="/wallet"  element={<Wallet />} />
            </Routes>
        </BrowserRouter>
    </>
)
}