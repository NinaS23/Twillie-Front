import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import homeTwillie from "../../assets/imgs/homeTwillie.png"
import { Header, Icon } from "../twillieMainContent/style";

export default function Wallet() {
    const navigate = useNavigate()
    const list = [
        { id: 0, name: 'escolha' },
        { id: 1, name: 'Entrada Fixa' },
        { id: 2, name: 'Entrada Váriavel' },
        { id: 3, name: 'Saída Fixa' },
        { id: 4, name: 'Saída Váriavel' }
    ];

    return (
        <Conteiner>
            <Header>
                <div>
                    <img src={homeTwillie} alt="foto de perfil" />
                    <h2>wallet</h2>
                </div>
                <Icon onClick={() => navigate("/login")}>
                    <ion-icon name="exit"></ion-icon>
                </Icon>
            </Header>
            <Content>
                <Cards>
                    <Card>
                        <div>
                            <h2>Entrada</h2>
                            <IconsTransections>
                                <ion-icon name="arrow-up-circle-outline"></ion-icon>
                            </IconsTransections>
                        </div>
                        <Value>RS 450,00</Value>
                    </Card>
                    <Card>
                        <div>
                            <h2>Saída</h2>
                            <IconsTransections>
                                <ion-icon name="arrow-down-circle-outline"></ion-icon>
                            </IconsTransections>
                        </div>
                        <Value>-RS 450,00</Value>
                    </Card>
                    <Card>
                        <div>
                            <h2>Saldo</h2>
                            <IconsTransections>
                                <ion-icon name="cash-outline"></ion-icon>
                            </IconsTransections>
                        </div>
                        <Value>RS 00,00</Value>
                    </Card>
                </Cards>
                <Transections>
                    <Transection>
                        <h3>descrição</h3>
                        <Input id="description" type="text" ></Input>
                    </Transection>
                    <Transection>
                        <h3>Tipo</h3>
                        <SelectType
                            name="select"
                            className="inputText"

                        >
                            {list.map((item, index) => (
                                <Option value={item.name}>{item.name}</Option>
                            ))}
                        </SelectType>
                    </Transection>
                    <Transection>
                        <h3>Valor</h3>
                        <Input id="number" type="text"  ></Input>
                    </Transection>
                </Transections>
                <div>
                <ListTransections>
                        <TransectionBlock>
                            <Divisor>
                                <Register>
                                    <h2>description bla bla bla bla</h2>
                                    <h3>tipo da transição</h3>
                                </Register>
                                <BalanceRegister>
                                    <ValueRegister>valor</ValueRegister>
                                    <Trash>
                                        <ion-icon name="trash-bin-outline"></ion-icon>
                                    </Trash>
                                </BalanceRegister>
                            </Divisor>
                        </TransectionBlock>
                        <TransectionBlock>
                            <Divisor>
                                <Register>
                                    <h2>description bla bla bla bla</h2>
                                    <h3>tipo da transição</h3>
                                </Register>
                                <BalanceRegister>
                                    <ValueRegister>valor</ValueRegister>
                                    <Trash>
                                        <ion-icon name="trash-bin-outline"></ion-icon>
                                    </Trash>
                                </BalanceRegister>
                            </Divisor>
                        </TransectionBlock>
                        <TransectionBlock>
                            <Divisor>
                                <Register>
                                    <h2>description bla bla bla bla</h2>
                                    <h3>tipo da transição</h3>
                                </Register>
                                <BalanceRegister>
                                    <ValueRegister>valor</ValueRegister>
                                    <Trash>
                                        <ion-icon name="trash-bin-outline"></ion-icon>
                                    </Trash>
                                </BalanceRegister>
                            </Divisor>
                        </TransectionBlock>
                    </ListTransections>
                </div>
            </Content>
        </Conteiner>

    )
}

const Conteiner = styled.div`
width: 100vw;


`
const Trash = styled.div`
display: flex;
align-items: center;
ion-icon{
    margin-right: 2%;
    color: #0A193C;
}
`

const IconsTransections = styled.div`
position: fixed;
margin-left: 15%;
ion-icon{
    color: #0A193C;
}
`

const Content = styled.div`
background-color: white;
position:absolute;
  top:70px;
  right:0px;
  bottom:0px;
  left:0px;

`

const Cards = styled.div`
background-color: #FFFFFF;
width: 100%;
height: 27%;
display: flex;
align-items: center;
@media (max-width: 796px) {
   overflow-y: auto;

  }

`

const Card = styled.div`
background-color: #6375A9;
box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
display: flex;
padding-right: 4%;
padding-left: 4%;
flex-direction: column;
justify-content: space-evenly;
margin-left: 4%;
height: 81px;
width: calc(30% - 20px);
border-radius:9px;
h2{
margin-right: 70%;
color: #FFFFFF;
font-family: 'RocknRoll One';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
}
@media (max-width: 796px) {
   width: 200px;
   h2{
       font-size: 11px;
   }
  }
div{
    display: flex;
  
   
}
`

const Value = styled.h1`
font-family: 'RocknRoll One';
font-style: normal;
font-weight: 400;
font-size: 120%;
line-height: 29px;
display: flex;
align-items: center;
color: #FFFFFF;
@media (max-width: 796px) {
   font-size: 12px;
  }

`
const Transections = styled.div`
background-color: #FFFFFF;
display: flex;
align-items: center;
justify-content: center;
height: 10%;
margin-top: 3%;
padding-right: 40px;


`
const Transection = styled.div`
width: 30%;
margin-left: 2%;
h3{
    font-family: 'RocknRoll One';
    color: #0A193C;
    font-size: 13px;
    margin-bottom: 2%;
}
`

const Input = styled.input`
width: 100%;
border-radius: 18px;
border-style: none;
background-color: #e9e4ee;


`

const SelectType = styled.select`
width: 100%;
border-radius: 18px;
border-style: none;
background-color: #e9e4ee;
font-family: 'RocknRoll One';
color: #0A193C;


`

const Option = styled.option`

`



const ListTransections = styled.div`
margin-top: 2%;
margin:4px, 4px;
padding:4px;
background-color: #FFFFFF;
width: 100%;
height: 250px;
overflow-y: auto;
align-content: center;


`


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

