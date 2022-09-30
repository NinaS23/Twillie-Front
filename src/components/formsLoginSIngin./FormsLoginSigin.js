import { Input,Form, ButtonRegister,SubTitle,StyledLink } from "./style"


export default function FormsLoginSigin({
    type
}) {
    if (type === "register")
        return (
            <>
                <Input placeholder="email" type="email" ></Input>
                <Input placeholder="password" type="password" ></Input>
                <Input placeholder="name" type="password" ></Input>
                <Input placeholder="picture url" type="password" ></Input>
                <ButtonRegister>
                    <h3>
                        sing up
                    </h3>
                </ButtonRegister>
                <SubTitle>
                    <StyledLink to={"/login"}><h4>let`s go back to login</h4></StyledLink>
                </SubTitle>
            </>
        )
    if (type === "login") {
        return (
            <>
                <Input placeholder="email" type="email" ></Input>
                <Input placeholder="password" type="password" ></Input>
                <ButtonRegister>
                    <h3>
                        Log in
                    </h3>
                </ButtonRegister>
                <SubTitle>
                    <StyledLink to={"/sing-up"}><h4>still don't have an account? click here and sign up</h4></StyledLink>
                </SubTitle>
               
            </>
        )
    }

}



