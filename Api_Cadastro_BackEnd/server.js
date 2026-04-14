import express from 'express';
import pkg from '@prisma/client';
import cors from 'cors';

const { PrismaClient } = pkg;
const prisma = new PrismaClient();
const app = express();
app.use(express.json());
app.use(cors());


// ADICIONE ISSO AQUI:
async function main() {
  try {
    await prisma.$connect();
    console.log("✅ CONEXÃO COM O MONGODB ESTABELECIDA COM SUCESSO!");
  } catch (e) {
    console.error("❌ ERRO CRÍTICO DE CONEXÃO COM O MONGODB:");
    console.error(e.message);
    process.exit(1); // Fecha o servidor se não conectar
  }
}

main();




//HTTP Post - criar usuário
app.post('/users', async (req,res) => {

    const {email, name, age} = req.body;
    const ageAsNumber = Number(age)
    

    if(isNaN(ageAsNumber)){
        return res.status(400).json({message: "O campo 'age' ou 'idade' deve ser um número válido."})
    }

    try{
    const addUser = await prisma.user.create({
            data: {
                email: email,      // Use a variável que você desestruturou no topo
                name: name,       // Use a variável que você desestruturou no topo
                age: ageAsNumber  // <--- ISSO PRECISA SER ASSIM (Sem req.body)
            }
        });
        return res.status(201).json(addUser);
    }
    catch(error){
        console.log("Falha ao criar usuário: ", error);

        if(error.code === 'P2002'){
            return res.status(409).json({
                message: `O email ${email} já está cadastrado.`,
                field: "email"
            });
        }

        return res.status(500).json({message: "Erro interno do servidor. "});

    }
});



//HTTP Get - Listar usuários
app.get('/users', async (req, res) => {
    try {
        // Primeiro, tentamos buscar tudo sem filtros para testar a conexão
        const users = await prisma.user.findMany();
        return res.status(200).json(users);
        
    } catch (error) {
        console.error("❌ ERRO DETALHADO NO GET /USERS:", error);
        
        // Retornamos o erro real para a tela do navegador para sabermos o que corrigir
        return res.status(500).json({
            message: "Erro interno nos usuários.",
            error: error.message,
            code: error.code
        });
    }
});

//HTTP Put - Editar usuário
app.put('/users/:id', async (req, res) => {

    const userId = req.params.id;
    const { email, name, age } = req.body;


    let updateData = {};
    if(email !== undefined) updateData.email = email;
    if(name !== undefined) updateData.name = name; 

    if(age !== undefined) {
        updateData.age = Number(age);
     }
    
    try {
        const updatedUser = await prisma.user.update({
            where: {
                id: userId,
            },
            data: 
               updateData
        
    });

        return res.status(200).json(updatedUser);

    } catch (error) {
        console.error("❌ ERRO REAL DO PRISMA:", error); 
        
        if (error.code === 'P2002') {
            return res.status(409).json({ message: "Este email já está cadastrado!" });
        }

        if (error.code === 'P2025') {
            return res.status(404).json({ message: "Usuário não encontrado." });
        }

        // Isso manda a causa real para o Thunder Client
        return res.status(500).json({ 
            message: "Erro interno do servidor.",
            debug: error.message 
      
        });
    }
      
 });
    

//HTTP Delete - deletar usuário
app.delete('/users/:id', async (req,res) => {

   const userId = req.params.id;

    try {
        await prisma.user.delete({

            where: {
                id: userId
            }
        });

        return res.status(204).json({
            message: `Usuario Deletado com sucesso`
        });

    } catch (error) {
        console.error("Erro ao deletar o usuário:", error);
        
        
        if (error.code === 'P2025') {
            return res.status(404).json({ message: "Usuário não encontrado para exclusão." });
        }

        
        return res.status(500).json({ message: "Erro interno do servidor." });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor Express rodando na porta ${PORT}.`);
});
