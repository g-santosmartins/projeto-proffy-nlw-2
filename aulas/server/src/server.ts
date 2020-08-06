/**
 * GET - buscar dados ou listar informação
 * POST - Criar alguma nova info
 * PUT - atualizar uma info existente
 * DELETE - deletar uma info existente
 * 
 * Corpo (request body) Dados para criação de atualização de um registro
 * Route params: indendificar qual recuso eu quero atualizar ou deletar
 * Query params: paginação, listagem
 * Cors permite a integração com varios endereços de localhost, no caso 3000 e 3333
 */

import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors())

app.use(express.json())

app.use(routes);

app.listen(3333);