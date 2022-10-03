import { Inputs, Form, ButtonRegister, SubTitle, StyledLink } from "./style"
import { ThreeDots } from "react-loader-spinner";
import { api } from "../../services/apiService";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function FormsLoginSigin({
    type,
    pathBack,pathFront
}) {
    const [email, setEmail] = React.useState("");
    const [loginEmail , setLoginEmail] = React.useState("")
    const [loginPassword , setLoginPassword] = React.useState("")
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("")
    const [picture, setPicture] = React.useState("")
    

    const [isLoading, setIsLoading] = React.useState(false);
    const [enable, setEnable] = React.useState(false);
    const navigate = useNavigate();

    async function sendFormes(e) {
        try {
            e.preventDefault();
            setIsLoading(true);
            setEnable(true);
            let body = {}
            if (type === "register") body = { email, password, name, picture };
            if (type === "login") body = { email:loginEmail, password:loginPassword }
            const request = await api.post(`${pathBack}`, body);

            if(type === "login"){
                console.log(request.data.name)
            const token = request.data.token;
            const profilePicture = request.data.picture; 
            const userName = request.data.name;

            localStorage.setItem("token", token);
            localStorage.setItem("profilePicture", profilePicture);
            localStorage.setItem("userName", userName);
            }

            navigate(pathFront);
        } catch (error) {
            alert(
                'Invalid email or password, check your credentials',
            );
        } finally {
            setEnable(false)
            setIsLoading(false);
        }
    }

    if (type === "register")
        return (
            <>
                <Form onSubmit={sendFormes}>
                    <div>
                        <Inputs
                            placeholder="email"
                            type="email"
                            value={email}
                            required
                            disabled={enable}
                            onChange={e => setEmail(e.target.value)}
                        ></Inputs>
                        <Inputs
                            placeholder="password"
                            type="password"
                            required
                            disabled={enable}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        ></Inputs>
                        <Inputs
                            placeholder="name"
                            type="text"
                            required
                            disabled={enable}
                            value={name}
                            onChange={e => setName(e.target.value)}
                        ></Inputs>
                        <Inputs
                            placeholder="picture url"
                            type="text"
                            required
                            disabled={enable}
                            value={picture}
                            onChange={e => setPicture(e.target.value)}
                        ></Inputs>
                    </div>
                    {isLoading ? (
                        <ButtonRegister disabled>
                            <div>
                                <ThreeDots
                                    height={30}
                                    width={50}
                                    radius="9"
                                    color="#ffffff"
                                    ariaLabel="three-dots-loading"
                                    wrapperStyle={{}}
                                    wrapperClassName=""
                                    visible={true}
                                />
                            </div>
                        </ButtonRegister>
                    ) : (
                        <ButtonRegister type="subimit">
                            <h3>
                                sing up
                            </h3>
                        </ButtonRegister>
                    )}
                    <SubTitle>
                        <StyledLink to={"/login"}><h4>clique aqui e volte ao login</h4></StyledLink>
                    </SubTitle>
                </Form>
            </>
        )
    if (type === "login") {
        return (
            <>
                <Form onSubmit={sendFormes}>
                    <div>
                        <Inputs
                            placeholder="email"
                            type="email"
                            required
                            disabled={enable}
                            value={loginEmail}
                            onChange={e => setLoginEmail(e.target.value)}
                        ></Inputs>
                        <Inputs
                            placeholder="password"
                            type="password"
                            required
                            disabled={enable}
                            value={loginPassword}
                            onChange={e => setLoginPassword(e.target.value)}
                        ></Inputs>
                    </div>
                    {isLoading ? (
                        <ButtonRegister disabled>
                            <div>
                                <ThreeDots
                                    height={30}
                                    width={40}
                                    radius="9"
                                    color="#ffffff"
                                    ariaLabel="three-dots-loading"
                                    wrapperStyle={{}}
                                    wrapperClassName=""
                                    visible={true}
                                />
                            </div>
                        </ButtonRegister>
                    ) : (
                        <ButtonRegister type="subimit">
                            <h3>
                                sing in
                            </h3>
                        </ButtonRegister>
                    )}
                    <SubTitle>
                        <StyledLink to={"/sing-up"}><h4>não tem uma conta? clique aqui e cadastre-se</h4></StyledLink>
                    </SubTitle>
                </Form>
            </>
        )
    }

}



