import pool from "./conexao.js";
import { executaQuery } from "./executaQuery.js";

export async function retornaCampeonatosID(id) {
  const conexao = await pool.getConnection();
  const query = 'SELECT id, campeao, vice, ano FROM campeonatos WHERE id = '+id

  const campeonatos = executaQuery(conexao, query);

  conexao.release();

  return campeonatos;
}