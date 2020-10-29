import express from 'express';
import path from 'path'
import cors from 'cors'

import 'express-async-errors' 

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler'

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname,'..','uploads')))
app.use(errorHandler)
//rota = conjuneto
//recurso = usuario

//metodos http = get,post, put, delete 
//paramentros

//get = buscar informação
//post = criando uma informação]
//put = editar uma informação
//delete = deletar uma informação

//query params: http://localhost:3333/users?search=diego
//route params: http://localhost:3333/users/1 (indentificar um recurso)
//body: http://localhost:3333/users/ (vem as informações)



app.listen(3333);
//tipos de banco
//driver nativo - escreve igual no banco,
// query builder(faz a query em js)
// ORM - utiliza por meio de classes