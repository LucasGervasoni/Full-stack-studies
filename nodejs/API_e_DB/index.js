import express from 'express';
import pool from './serviço/conexao.js';

const app = express();

app.listen(9000, async () => {
    const data = new Date();
    console.log("Servidor node iniciado em: "+data);

    const conexao = await pool.getConnection();

    console.log(conexao.threadId);

    conexao.release();
})