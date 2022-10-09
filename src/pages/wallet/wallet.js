
import { useNavigate } from "react-router-dom";
import {  Icon } from "../twillieMainContent/style";
import { api } from "../../services/apiService";
import { TransectionRegister } from "../../components/transectionRegister";
import React from "react";
import {
    Information,
    Conteiner,
    Content,
    Cards,
    Card,
    IconsTransections,
    Value,
    Header,
    Transections,
    Transection,
    Input,
    ListTransections,
    SubimitTransection,
    ButtonTransection,
    Center
} from "./style";


export default function Wallet() {
    const navigate = useNavigate()
    const [transectionDone,setTransectionDone] = React.useState(0);
    const [isLoading, setIsLoading] = React.useState(false);
    const [registers , setRegisters] = React.useState([]);
    const [enable, setEnable] = React.useState(false);
    const [currentBalance , setCurrentBalance] = React.useState(0);

    const [variableEntry, setVariableEntry] = React.useState("");
    const [variableOutput, setVariableOutput] = React.useState("");
    const [fixedOutput, setFixedOutput] = React.useState("");
    const [fixedEntry, setFixedEntry] = React.useState("");
    const [description, setDescription] = React.useState("");

    const token = localStorage.getItem("token");
    const profilePic = localStorage.getItem("profilePicture");

    let entry = Number(variableEntry) + Number(fixedEntry);
    let outPut = Number(variableOutput) + Number(fixedOutput);

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
            const body = {
                "fixedEntry": Number(fixedEntry),
                "variableEntry":Number(variableEntry),
                "fixedOutput": Number(fixedOutput),
                "variableOutput":Number(variableOutput),
                "description":description
              }
            const config = { headers: { Authorization: `Bearer ${token}` } };
            api.post(`/wallet`, body, config);
         
          setIsLoading(true)
        } catch (error) {
            alert(error.response.data);
        } finally {
            setIsLoading(false);
            setEnable(false);
        }
    }
console.log(isLoading)
    React.useEffect(() => {
        getBalance();
        getRegisters();
      }, [isLoading]);

    return (
        <Conteiner>
            <Header>
                <div onClick={() => navigate("/main")}>
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
                        <Value>RS {entry.toFixed(2).replace(".", ",")}</Value>
                    </Card>
                    <Card>
                        <div>
                            <h2>Saída</h2>
                            <IconsTransections>
                                <ion-icon name="arrow-down-circle-outline"></ion-icon>
                            </IconsTransections>
                        </div>
                        <Value>-RS {outPut.toFixed(2).replace(".", ",")}</Value>
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
                            <h3>Entrada fixa</h3>
                            <Input
                                id="description"
                                type="text"
                                required
                                disabled={enable}
                                value={fixedEntry}
                                onChange={e => setFixedEntry(e.target.value)}
                            ></Input>
                        </Transection>
                        <Transection>
                            <h3>Entrada Variável</h3>
                            <Input
                                id="description"
                                type="text"
                                required
                                disabled={enable}
                                value={variableEntry}
                                onChange={e => setVariableEntry(e.target.value)}
                            ></Input>
                        </Transection>
                        <Transection>
                            <h3>Saída Fixa</h3>
                            <Input
                                id="description"
                                type="text"
                                required
                                disabled={enable}
                                value={fixedOutput}
                                onChange={e => setFixedOutput(e.target.value)}
                            ></Input>
                        </Transection>
                        <Transection>
                            <h3>Saída Váriavel</h3>
                            <Input
                                id="number"
                                type="text"
                                disabled={enable}
                                required
                                value={variableOutput}
                                onChange={e => setVariableOutput(e.target.value)}
                            ></Input>
                        </Transection>
                    </Transections>
                    <SubimitTransection>
                        <ButtonTransection onClick={() => postTransection()}><h2>Registrar</h2></ButtonTransection>
                    </SubimitTransection>
                </Center>
                <div>
                    <ListTransections>
                        {registers.length > 0 ? (
                          registers.map((e)=>{
                              console.log(e)
                              return(
                                  <TransectionRegister 
                                    value={e.balancevalue}
                                    description={e.description}
                                    fixedEntry={e.fixedEntry}
                                    fixedOutput={e.fixedOutput}
                                    variableEntry={e.variableEntry}
                                    variableOutput={e.variableOutput}
                                    balancevalue={e.balancevalue}
                                    cardId={e.id}
                                    key={e.id}
                                  />
                              )
                          })
                        ) : (
                            <Information>
                                <h1>Sem transações ainda</h1>
                            </Information>
                        )}
                    </ListTransections>
                </div>
            </Content>
        </Conteiner>

    )
}

