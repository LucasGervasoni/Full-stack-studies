import pool from "./conexao.js";
import { executaQuery } from "./executaQuery.js";

export async function retornaCampeonatos() {
    const conexao = await pool.getConnection();
    const query = 'SELECT id, campeao, vice, ano FROM campeonatos'

    const campeonatos = executaQuery(conexao, query);

    conexao.release();

    return campeonatos;
}