import { api } from "../../services/apiService";
import Modal from "react-modal";
import { useState } from "react";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";

Modal.setAppElement(".root");

function DeleteIcon({ cardId, render }) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");

  function modalDelete() {
    setIsOpen(!isOpen);
  }

  async function deletePost() {
    setLoading(true);
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      await api.delete(`wallet/${cardId}`, config);
      setLoading(false);
      modalDelete();
    } catch (e) {
      console.log(e);
      modalDelete();
      alert("Não foi possível excluir o post");
      setLoading(false);
    }
  }

  
  return (
    <Conteudo>
      <ion-icon onClick={()=>modalDelete()} name="trash-bin-outline"></ion-icon>
      <Modal
        isOpen={isOpen}
        className="_"
        overlayClassName="_"
        contentElement={(props, children) => (
          <ModalStyle {...props}>{children}</ModalStyle>
        )}
        overlayElement={(props, contentElement) => (
          <OverlayStyle {...props}>{contentElement}</OverlayStyle>
        )}
      >
        <div className="question">
          quer mesmo deletar este registro?
        </div>
        <div className="option">
          <button className="goBack" onClick={modalDelete} disabled={loading}>
           Não
          </button>
          {loading ? (
            <Carregando>
              <ThreeDots color="#FFFFFF" width={50} />
            </Carregando>
          ) : (
            <button className="delete" onClick={deletePost}>
              Sim
            </button>
          )}
        </div>
      </Modal>
    </Conteudo>
  );
}

export default DeleteIcon;

const Conteudo = styled.div`
  svg {
    color: #ffffff;
    cursor: pointer;
  }
  width: 14px;
  height: 14px;
`;

const ModalStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border-color:#2B6EF5;
  border-radius: 40px;
  width: 597px;
  height: 262px;
  padding: 38px 120px 65px 120px;
  .option {
    width: 298px;
    display: flex;
    justify-content: space-between;
    background-color: #FFFFFF;
    margin-left: 40px;
  }
  .question {
    font-family: "passione one";
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 41px;
    text-align: center;
    color: #6375A9;
    background-color:#FFFFFF;
  }
  button {
    border: none;
    cursor: pointer;
    width: 134px;
    height: 37px;
    border-radius: 5px;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
  }
  .goBack {
    color: #FFFFFF;
    background-color: #6375A9;
  }
  .delete {
    color: #FFFFFF;
    background-color: #6375A9;
  }
  @media (max-width: 700px) {
    width: 400px;
    height: 200px;
    padding: 18px 50px 18px 50px;
    .pergunta {
      font-size: 24px;
      width: 280px;
    }
    .opcao {
      width: 250px;
      justify-content: space-evenly;
      margin: auto;
    }
    button {
      width: 100px;
      height: 37px;
      font-size: 14px;
    }
  }
  @media (max-width: 500px) {
    width: 320px;
    height: 140px;
    padding: 20px 50px 50px 50px;
    .pergunta {
      font-size: 14px;
      width: 280px;
      margin-bottom: 20px;
    }
    .opcao {
      width: 180px;
      margin: auto;
      justify-content: space-between;
    }
    button {
      width: 85px;
      height: 30px;
      font-size: 12px;
    }
  }
`;

const OverlayStyle = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background: rgba(255, 255, 255, 0.9); ;
`;

const Carregando = styled.div`
  border: none;
  border-radius: 5px;
  width: 134px;
  height: 37px;
  background-color: #1877f2;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  @media (max-width: 700px) {
    width: 100px;
    height: 37px;
  }
  @media (max-width: 500px) {
    width: 85px;
    height: 30px;
  }
`;