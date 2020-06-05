import express, { request } from 'express';
import routes from './routes';
import path from 'path';
import cors from 'cors';
import { errors } from 'celebrate';

const app = express();

app.use(cors(/* { origin: 'www...' } */))
app.use(express.json()); //forma de mostrar ao express que deve utilizar o fomrato JSON e assim podendo entender a requisiçao POST e PUT que enia JSON ao back-end
app.use(routes); //forma de mostrar ao express que deve utilizar as rotas do arquivo ./routes

// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

// GET: Buscar uma ou mais informaçòes do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação do back-end

// POST http://localhost:3333/users = Criar um usuário
// GET http://localhost:3333/users = Listar usuário
// GET http://localhost:3333/users/5 = Buscar dados do usuário com ID 5

// Request Param: Parâmetros que vem na própria rota que identificam um recurso
// Query Param: Parâmetros que vem na própia rota geralmente opcionais para filtros, paginação
// Request Body: Parâmetros para criação/atualização de informações

// SELECT * FROM users WHERE name = 'Pedro'
// knex('users').where('name', 'Pedro').select('*')

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(3333);
