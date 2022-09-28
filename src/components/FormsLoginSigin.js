import styled from "styled-components";
import { Link } from 'react-router-dom';

export default function FormsLoginSigin({
    type
}) {
    if (type === "register")
        return (
            <>
                <h1>registro</h1>
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
                    <StyledLink to={"sing-up"}><h4>still don't have an account? click here and sign up</h4></StyledLink>
                </SubTitle>
               
            </>
        )
    }

}



const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: 295px;
padding-top: 20%;
`
const Input = styled.input`
   height: 30px;
   width: 100%;
    margin-top: 8%;
    background-color: aliceblue;
    border-style: outset;
  border-color: #5897D6;
  border-width: 1px;
  ::placeholder{

    font-family: 'kanit', serif;
    font-weight: 400;
    font-size: 13px;
    line-height: 10px;
  }

`
const RedirectRoute = styled.div`
a{
  justify-content: center;
  color: #FFFFFF;
  font-size: 20px;
  font-weight: 300;
  
}

`

const ButtonRegister = styled.button`
 height: 30px;
 width: 80%;
 margin-left: 10%;
 margin-top: 10%;
 background-color: #5897D6;
  border-style: none;
  &:hover {
    background-color: lightblue;
  }
  h3{
    font-family: 'kanit', serif;
    font-weight: 400;
    font-size: 16px;
    color:#FFFFFF;
    line-height: 10px;
  }

`
const SubTitle = styled.div`
width:100% ;
height: 10px;
margin-top: 100px;
h4{
    font-family: 'passione one', serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 10px;
}  
`
const StyledLink = styled(Link)`
text-align: center;
color: #333333;
text-decoration: overline;

`