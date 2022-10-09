import styled from "styled-components";
import DeleteIcon from "../deleteIcon/delete";

export function TransectionRegister({value,cardId, description, fixedEntry, variableEntry, fixedOutput, variableOutput }) {
 
    return (
        <TransectionBlock>
            <Divisor>
                <Register>
                    <h3>{description}</h3>
                    <h2>fixed entry: RS {fixedEntry.toFixed(2).replace(".", ",")}</h2>
                    <h2>fixed output: -RS {fixedOutput.toFixed(2).replace(".", ",")}</h2>
                    <h2>variable entry: RS {variableEntry.toFixed(2).replace(".", ",")}</h2>
                    <h2>variable output: -RS {variableOutput.toFixed(2).replace(".", ",")}</h2>
                </Register>
                <BalanceRegister>
                    <ValueRegister>RS  {value.toFixed(2).replace(".", ",")}</ValueRegister>
                    <Trash>
                      <DeleteIcon 
                      cardId={cardId}
                      />
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
height: 60%;
position: relative;
width: 90%;
border-radius:9px;

`

const Divisor = styled.div`
display: flex;
justify-content: space-between;
padding-right: 20px;
padding-left: 20px;
align-items: center;
`

const Register = styled.div`
display: flex;
flex-direction:column;
h2{
font-family: 'RocknRoll One';
font-style: normal;
font-weight: 400;
font-size: 10px;
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
color: #0A193C;
}
`
const BalanceRegister = styled.div`
  display: flex;
  width: 180px;
  @media (max-width: 796px) {
   margin-left: 10%;

  }
  
`

const ValueRegister = styled.h2`

font-family: 'RocknRoll One';
font-style: normal;
font-weight: 400;
font-size: 20px;
margin-right:10%;
line-height: 29px;
display: flex;
color: #0A193C;

`

const Trash = styled.div`
display: flex;
margin-top: 6%;
position: absolute;
width: 20px;
right: 0;
align-items: center;
ion-icon{

    color: black;
}
`
