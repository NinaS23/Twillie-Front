import styled from "styled-components";
export  function TransectionRegister({description,type}){
    return (
        <TransectionBlock>
            <Divisor>
                <Register>
                    <h2>{description}</h2>
                    <h3>{type}</h3>
                </Register>
                <BalanceRegister>
                    <ValueRegister>valor</ValueRegister>
                    <Trash>
                        <ion-icon name="trash-bin-outline"></ion-icon>
                    </Trash>
                </BalanceRegister>
            </Divisor>
        </TransectionBlock>
    )
}

const TransectionBlock = styled.div`
background-color: #6375A9;
box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
margin-top: 2%;
margin-left: 4%;
height: 40%;
width: 90%;
border-radius:9px;

`

const Divisor = styled.div`
display: flex;
justify-content: space-between;
padding-right: 20px;
padding-left: 20px;
align-items: center;
padding-top: 30px;
`

const Register = styled.div`
display: flex;
flex-direction: column;
h2{
font-family: 'RocknRoll One';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 29px;
display: flex;
align-items: center;
color: #FFFFFF;
}
h3{
font-family: 'kanit';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 29px;
display: flex;
align-items: center;
color: #FFFFFF;
}
`
const BalanceRegister = styled.div`
  display: flex;

`

const ValueRegister = styled.h2`
margin-right: 10%;
font-family: 'RocknRoll One';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 29px;
display: flex;
color: #FFFFFF;

`

const Trash = styled.div`
display: flex;
align-items: center;
ion-icon{
    margin-right: 2%;
    color: #0A193C;
}
`
