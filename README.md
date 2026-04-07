# 🚀 Full Stack User Management System
> Uma solução robusta de gerenciamento de usuários com integração real entre Frontend, Backend e Banco de Dados Cloud.

Este projeto demonstra o domínio do ecossistema JavaScript moderno, focando em **escalabilidade**, **persistência de dados** e **experiência do usuário (UX)**.

---

## 🛠️ Tecnologias Utilizadas

### **Backend**
- **Node.js & Express**: API RESTful de alta performance.
- **Prisma ORM**: Modelagem de dados e consultas otimizadas.
- **MongoDB Atlas**: Banco de Dados NoSQL escalável na nuvem.

### **Frontend**
- **React.js (Vite)**: Interface dinâmica e componentizada.
- **Axios**: Comunicação assíncrona com a API.
- **Styled Components**: Estilização moderna e isolada.

---

## 📸 Demonstração da Aplicação

| Interface do Usuário | Monitoramento no MongoDB Atlas |
| :---: | :---: |
| <img src="https://github.com/user-attachments/assets/0c83cb98-2423-42ae-9b56-55be28898534" width="400" alt="Interface do Usuário"> | <img src="https://github.com/user-attachments/assets/2ccb3cf7-08b4-4878-9cf6-4cc74eafeae2" width="400" alt="Monitoramento MongoDB"> |

---
## 💡 Desafios Técnicos & Aprendizados
Durante o desenvolvimento, foquei em resolver problemas reais de engenharia de software:

1.  **Integridade de Dados**: Implementei uma camada de tratamento no Backend para garantir que dados de formulário (Strings) fossem convertidos corretamente para tipos numéricos antes da persistência no MongoDB via Prisma.
2.  **Segurança e CORS**: Configurei políticas de compartilhamento de recursos (CORS) para permitir a comunicação segura entre o domínio do React (Porta 5173) e a API Node.js (Porta 3000).
3.  **Ambiente Cloud**: Configurei clusters no MongoDB Atlas, garantindo que a aplicação não dependa de um banco local para funcionar, facilitando o deploy futuro.

---

## ⚙️ Como Executar o Projeto

Siga os passos abaixo para rodar a aplicação em sua máquina local.

### 1. Clonar o Repositório
```bash
git clone [https://github.com/SEU_USUARIO/FullStack-User-Manager.git](https://github.com/SEU_USUARIO/FullStack-User-Manager.git)
cd FullStack-User-Manager
```
### 2. Configuração do Backend (API)
O backend utiliza **Node.js** com **Prisma ORM**. 

1. **Acesse a pasta do servidor:**
   ```bash
   cd Api_Cadastro_BackEnd
   
2. **Instale as dependências:**
   ```bash
   npm install
3. **Configure as Variáveis de Ambiente**
   ```bash Crie um arquivo chamado .env na raiz da pasta Api_Cadastro_BackEnd e adicione sua string de conexão do MongoDB:
   DATABASE_URL="sua_url_do_mongodb_atlas"
4. **Sincronize o Banco de Dados (Prisma)**
   ```bash Gere o cliente do Prisma para permitir a comunicação com o banco:
   npx prisma generate
5. **Inicie o servidor**
   ```bash
   npx tsx server.ts
   ````
### 3. Configuração do Frontend (Interface)

Com o servidor Backend rodando, abra um **novo terminal** para configurar a interface em React:

1. **Acesse a pasta do frontend:**
```bash
cd Projeto_Cadastro_FrontEnd
````
2. **Instale as dependências do projeto**
```bash
npm install
````
3. **Inicie o servidor de desenvolvimento (Vite)**
```bash
npm run dev
````

---

## 👨‍💻 Créditos e Contato

Este projeto foi desenvolvido como parte do meu portfólio de **Desenvolvedor Full Stack**. Sinta-se à vontade para entrar em contato, dar sugestões ou fazer um fork do projeto!

### Vamos nos conectar?

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gabrielssdurtedev/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/gabrielSSDuarteDev)

---

   
   



