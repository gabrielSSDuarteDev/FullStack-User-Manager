import "./style.scss";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";
import { IoTrashSharp } from "react-icons/io5";
import { FaPenToSquare } from "react-icons/fa6";
import api from "../../services/api";
import { useEffect, useState, useRef } from "react";



function Home() {

  // Estados para armazenar usuários, estado de carregamento e campos do formulário
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [editUserId, setEditUserId] = useState(null);


  // Função para buscar usuários na API
  async function getUsers() {

    // Requisição para buscar usuários com tratamento de erros
    try {
      setIsLoading(true);
      const response = await api.get('/users');
      setUsers(response.data);
      console.log(response.data);
    }
    catch (error) {
      console.error("Erro ao buscar usuários:", error);
      toast.error("Erro ao buscar usuários. Tente novamente.");
    }
    finally {
      setIsLoading(false);
    };
  };




  // Função para adicionar um novo usuário
  async function handleAddUser() {

    // Validação básica dos campos e tratamento de erros
    if (!name || !age || !email) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    };
    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        toast.error("Por favor, insira um e-mail válido.");
        return;
      }
    } catch (error) {
      console.error("Erro ao validar o e-mail:", error);
      toast.error("Ocorreu um erro ao validar o e-mail. Tente novamente.");
      return;
    };

    // Requisição para adicionar usuário com tratamento de erros
    try {
      setIsLoading(true);
      await api.post('/users', {
        name: name,
        age: age,
        email: email
      });
    } catch (error) {
      console.error("Erro ao adicionar usuário:", error);
      toast.error("Ocorreu um erro ao adicionar o usuário. Tente novamente.");
      return;
    }
    finally {
      setIsLoading(false);
    };

    // Recarregar a lista de usuários após adicionar um novo usuário
    getUsers()
    setName('');
    setAge('');
    setEmail('');

  }

  //Função para deletar usuário
  async function handleDeleteUser(id) {

    const result = await Swal.fire({
      title: 'Confirma Exclusão?',
      text: "Esta ação não pode ser desfeita. Deseja realmente excluir?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, Excluir',
      cancelButtonText: 'Cancelar',
      reverseButtons: true,


      customClass: {
        popup: 'swal2-popup',
        confirmButton: 'swal2-confirm',
        cancelButton: 'swal2-cancel',
        title: 'swal2-title',
      }
    });

    if (!result.isConfirmed) {
      toast('Ação de exclusão cancelada.', { icon: '❌', className: 'toast_info' });
      return;
    }

    //Requisão para deletar usuário com tratamento de erros
    try {
      setIsLoading(true);
      await api.delete(`/users/${id}`);
      getUsers(
      );
    }
    catch (error) {
      console.error("Erro ao deletar usuário:", error);
      toast.error("Ocorreu um erro ao deletar o usuário. Tente novamente.");

    }
    finally {
      setIsLoading(false);
    };
  };

  //Função para iniciar edição de usuário
  function startEditUser(user) {
    setEditUserId(user.id);
    setName(user.name);
    setAge(user.age);
    setEmail(user.email);
    toast('Modo de edição ativado. Após a edição clique em "Salvar Edição"', {
      icon: '✏️',
      className: 'toast_info',
    });

  }
  //Função para editar usuário
  async function handleSaveEdit() {


    const id = editUserId;
    // Tratamento de erros ao editar usuário
    if (!name || !age || !email) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        toast.error("Por favor, insira um e-mail válido.");
        return;
      };
    }
    catch (error) {
      console.error("Erro ao validar o e-mail:", error);
      toast.error("Ocorreu um erro ao validar o e-mail. Tente novamente.");
      return;
    };

    // Enviar a requisição de edição
    try {
      setIsLoading(true);
      await api.put(`/users/${id}`, {
        name: name,
        age: age,
        email: email
      });
      toast.success("Usuário editado com sucesso!");
    }
    catch (error) {
      console.error("Erro ao editar usuário:", error);
      toast.error("Ocorreu um erro ao editar o usuário. Tente novamente.");
      return;
    }
    finally {
      setIsLoading(false);
    };

    // Recarregar a lista de usuários após a edição
    getUsers()
    setName('');
    setAge('');
    setEmail('');
    setEditUserId(null);
  }

  // Carregar usuários ao montar o componente
  useEffect(() => {
    getUsers();
  }, []);


  // Opções de toast fora do JSX
  const toastOptions = {
    className: 'toasterComponment',
    style: {},
    error: {
      className: 'toast_error',
      style: {},
    },
    success: {
      className: 'toast_success',
      style: {},
    },
    info: {
      className: 'toast_info',
      style: {},
    }
  };

  return (

    <div className="container">


      <h1>Gerenciamento de Usuários</h1>
      <div className="main_content_grid">
        <Toaster position="top-right" reverseOrder={false} toastOptions={toastOptions} />
        <div className="coluna_Cadastro">
          <form>
            <h1>
              {editUserId ? 'Editar Usuário' : 'Adicionar Usuário'}
            </h1>
            <input
              name="nome"
              type="text"
              placeholder="Nome:"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              name="idade"
              type="number"
              placeholder="Idade:"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />

            <input
              name="email"
              type="email"
              placeholder="E-mail:"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              type="button"
              onClick={editUserId ? handleSaveEdit : handleAddUser}
            >
              {editUserId ? 'Salvar Edição' : 'Adicionar Usuário'}
            </button>
            {editUserId && (
              <button
                type="button"
                className="cancelar_Button"
                onClick={() => {
                  setEditUserId(null);
                  setName('');
                  setAge('');
                  setEmail('');
                  toast('Edição cancelada.', { icon: '❌', className: 'toast_info' });
                }}
              >
                Cancelar Edição
              </button>
            )}
          </form>
        </div>

        <div className="coluna_ListaUsuarios">
          <header>
            <h1>Lista de Usuários ({users.length})</h1>
          </header>


          <div className="status_Messages">
            {isLoading ? (
              <p>Carregando usuários</p>
            ) : (
              users.length === 0 ? (
                <p>Nenhum usuário cadastrado</p>
              ) : null
            )}
          </div>



          {(!isLoading) && users.map((user) => (
            <div key={user.id} className="cardUser">

              <div>
                <p>Nome:  <span>{user.name}</span></p>
                <p>Idade: <span>{user.age}</span></p>
                <p>Email: <span>{user.email}</span></p>
              </div>

              <div className="buttons">
                <button
                  type="button"
                  className="editar"
                  onClick={() => startEditUser(user)}>
                  <FaPenToSquare /> Editar
                </button>

                <button
                  type="button"
                  className="excluir"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  <IoTrashSharp /> Excluir

                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default Home;
