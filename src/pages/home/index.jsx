import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../assets/services/api";
import Button from "../../components/Button";
import TopBackground from "../../components/Button/TopBackground";

import {
  Container,
  Form,
  ContainerInputs,
  Input,
  InputLabel,
  Title,
} from "./styles";

function Home() {
  const inputName = useRef("user.name");
  const inputAge = useRef("user.age");
  const inputEmail = useRef("user.email");

  const navigate = useNavigate();

  function handleCadastro() {
    navigate("/cadastrar-novo-usuario");
  }

  async function registerNewUser() {
    await api.post("/usuarios", {
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value,
    });
    
  }

  return (
    <Container>
      <TopBackground />

      <Title>Cadastro Usuários</Title>
      <Form>
        <ContainerInputs>
          <div>
            <InputLabel>
              Nome<span> *</span>
            </InputLabel>
            <Input type="text" placeholder="Nome do usuário" ref={inputName} />
          </div>

          <div>
            <InputLabel>
              Idade<span> *</span>
            </InputLabel>
            <Input
              type="number"
              placeholder="Idade do usuário"
              ref={inputAge}
            />
          </div>
        </ContainerInputs>
        <div style={{ width: "100%" }}>
          <InputLabel>
            E-mail<span> *</span>
          </InputLabel>
          <Input
            type="email"
            placeholder="E-mail do usuário"
            ref={inputEmail}
          />
        </div>

        <Button type="button" onClick={registerNewUser} theme="primary">
          cadastrar novo usuario
        </Button>
      </Form>

      <Button type="button" onClick={() => navigate("/cadastrar-novo-usuario")}>
        Novos Usuários
      </Button>
    </Container>
  );
}

export default Home;
