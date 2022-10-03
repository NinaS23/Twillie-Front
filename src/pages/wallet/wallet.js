
import { useNavigate } from "react-router-dom";
import { Header, Icon } from "../twillieMainContent/style";
import {
    Conteiner,
    Content,
    Cards,
    Card,
    Trash,
    IconsTransections,
    Value,
    Transections,
    Transection,
    Input,
    ListTransections,
    Option,
    SelectType,
    TransectionBlock,
    Divisor,
    Register,
    BalanceRegister,
    ValueRegister,
    SubimitTransection,
    ButtonTransection,
    Center
} from "./style";

export default function Wallet() {
    const navigate = useNavigate()
    const profilePic = localStorage.getItem("profilePicture")
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
                    <img src={profilePic} alt="foto de perfil" />
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
                <Center>
                    <Transections>
                        <Transection>
                            <h3>descrição</h3>
                            <Input
                                id="description"
                                type="text"
                                required
                            ></Input>
                        </Transection>
                        <Transection>
                            <h3>Tipo</h3>
                            <SelectType
                                name="select"
                                className="inputText"
                                required
                            >
                                {list.map((item, index) => (
                                    <Option value={item.name}>{item.name}</Option>
                                ))}
                            </SelectType>
                        </Transection>
                        <Transection>
                            <h3>Valor</h3>
                            <Input
                                id="number"
                                type="text"
                                required
                            ></Input>
                        </Transection>
                        <SubimitTransection>
                            <ButtonTransection><h2>Registrar</h2></ButtonTransection>
                        </SubimitTransection>
                    </Transections>
                </Center>
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

