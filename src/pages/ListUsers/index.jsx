import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../assets/services/api";
import { Button } from "../../components/Button/styles";
import TopBackground from "../../components/Button/TopBackground";
import Trash from "../../assets/trash.svg";

import {
  Container,
  Title,
  ContainerUsers,
  CardUsers,
  TrashIcon,
  AvatarUser,
} from "./styles";

function ListUsers() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    async function getUsers() {
      try {
        const { data } = await api.get("/usuarios");
        setUsers(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    }
    getUsers();
  }, []);

  async function deleteUsers(id) {
    try {
      await api.delete(`/usuarios/${id}`);

      const updatedUsers = users.filter((user) => user.id !== id);
      setUsers(updatedUsers);
    } catch (error) {
      console.error("Erro ao deletar usuário:", error);
    }
  }

  return (
    <Container>
      <TopBackground />
      <Title>Novos Usuários</Title>

      <ContainerUsers>
        {users.map((user) => (
          <CardUsers key={user.id}>
            <AvatarUser
              src={`https://avatar.iran.liara.run/public?username=${user.id}`}
            />
            <div>
              <h3>{user.name}</h3>
              <p>{user.age} anos</p>
              <p>{user.email}</p>
            </div>
            <TrashIcon
              src={Trash}
              alt="Ícone de lixeira"
              onClick={() => deleteUsers(user.id)}
            />
          </CardUsers>
        ))}
      </ContainerUsers>

      <Button type="button" onClick={() => navigate("/")}>
        Voltar
      </Button>
    </Container>
  );
}

export default ListUsers;

