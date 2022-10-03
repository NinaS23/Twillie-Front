
import { useNavigate } from "react-router-dom";
import { Header, Icon } from "../twillieMainContent/style";
import { api } from "../../services/apiService";
import { TransectionRegister } from "../../components/transectionRegister";
import React from "react";
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
    const [TransectionDone,setTransectionDone] = React.useState(0);
    const [isLoading, setIsLoading] = React.useState(false);
    const [registers , setRegisters] = React.useState([])
    const [enable, setEnable] = React.useState(false);
    const [currentBalance , setCurrentBalance] = React.useState(0)

    const [value, setValue] = React.useState("");
    const [type, setType] = React.useState("");
    const [description, setDescription] = React.useState("");

    const token = localStorage.getItem("token");
    const profilePic = localStorage.getItem("profilePicture")
    const list = [
        { id: 0, name: 'escolha' },
        { id: 1, name: 'Entrada Fixa' },
        { id: 2, name: 'Entrada Váriavel' },
        { id: 3, name: 'Saída Fixa' },
        { id: 4, name: 'Saída Váriavel' }
    ];
    let body = {}

    if (type === "Entrada Fixa") {
        body = {
            description: description,
            fixedEntry: Number(value),
            variableEntry: 0,
            fixedOutput: 0,
            variableOutput: 0
        }
    } else if (type === "Entrada Váriavel") {
        body = {
            description: description,
            fixedEntry: 0,
            variableEntry: Number(value),
            fixedOutput: 0,
            variableOutput: 0
        }
    }else if(type === "Saída Fixa"){
          body ={
            description: description,
            fixedEntry: 0,
            variableEntry: 0,
            fixedOutput: Number(value),
            variableOutput: 0
          }
    }else{
     body ={
            description: description,
            fixedEntry: 0,
            variableEntry: 0,
            fixedOutput: Number(value),
            variableOutput: 0
          }
    }

    async function getBalance(e) {
        try {
            const config = { headers: { Authorization: `Bearer ${token}` } };
         
        api
        .get(`/balance`, config)
        .then(({ data }) => {
            setCurrentBalance(data.lastBalance)
        })
          
        } catch (error) {
            console.log(error)
            alert("can`t getBalance");
        } 
    }

    async function getRegisters(e) {
        try {
            const config = { headers: { Authorization: `Bearer ${token}` } };  
        api
        .get(`/wallet`, config)
        .then(({ data }) => {
            console.log(data)
            setRegisters(data);
        })
          
        } catch (error) {
            console.log(error)
            alert("can`t getBalance");
        } 
    }

    async function postTransection(e) {
        console.log("entrei no post")
        try {
            setIsLoading(true);
            setEnable(true);
            const config = { headers: { Authorization: `Bearer ${token}` } };
            api.post(`/wallet`, body, config);

            setIsLoading(true)
        } catch (error) {
            console.log(error)
            alert(error.response.data);
        } finally {
            setTransectionDone(0)
            setIsLoading(false);
            setEnable(false);
        }
    }
console.log(TransectionDone)
    React.useEffect(() => {
        getBalance();
        getRegisters();
      }, [TransectionDone,isLoading]);

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
                        <Value>RS {currentBalance.toFixed(2).replace(".", ",")}</Value>
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
                                disabled={enable}
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                            ></Input>
                        </Transection>
                        <Transection>
                            <h3>Tipo</h3>
                            <SelectType
                                name="select"
                                className="inputText"
                                disabled={enable}
                                required
                                onChange={e => setType(e.target.value)}
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
                                disabled={enable}
                                required
                                value={value}
                                onChange={e => setValue(e.target.value)}
                            ></Input>
                        </Transection>
                      
                     
                            <SubimitTransection>
                                <ButtonTransection onClick={() => postTransection()}><h2>Registrar</h2></ButtonTransection>
                            </SubimitTransection>
                  
                    </Transections>
                </Center>
                <div>
                    <ListTransections>
                    {registers.length > 0 ? (
                     <h1>tem</h1>
                    ) : (
                       <h1>Sem transações ainda</h1>
                    )}
                    </ListTransections>
                </div>
            </Content>
        </Conteiner>

    )
}

