# 🚀 Full Stack User Management System
> Uma solução robusta de gerenciamento de usuários com integração real entre Frontend, Backend e Banco de Dados Cloud.

Este projeto demonstra o domínio do ecossistema JavaScript moderno, focando em **escalabilidade**, **persistência de dados** e **experiência do usuário (UX)**.

---

## 🌐 Deploy Online

Para visualizar a aplicação funcionando em tempo real, acesse o link abaixo:

[![Acessar Projeto](https://img.shields.io/badge/Acessar%20Projeto-Online-brightgreen?style=for-the-badge&logo=render)](https://manager-frontend-tsbm.onrender.com)

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

1. **Integridade de Dados**: Implementei uma camada de tratamento no Backend para garantir que dados de formulário (Strings) fossem convertidos corretamente para tipos numéricos antes da persistência no MongoDB via Prisma.
2. **Segurança e CORS**: Configurei políticas de compartilhamento de recursos (CORS) para permitir a comunicação segura entre o domínio do React (Hospedado no Render) e a API Node.js.
3. **Ambiente Cloud**: Configurei clusters no MongoDB Atlas e realizei o Deploy Full Stack no Render, garantindo alta disponibilidade da aplicação.

---

## ⚙️ Como Executar o Projeto (Localmente)

Siga os passos abaixo para rodar a aplicação em sua máquina local.

### 1. Clonar o Repositório
```bash
git clone [https://github.com/gabrielSSDuarteDev/FullStack-User-Manager.git](https://github.com/gabrielSSDuarteDev/FullStack-User-Manager.git)
cd FullStack-User-Manager
