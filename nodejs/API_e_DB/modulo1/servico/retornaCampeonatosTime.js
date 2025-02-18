import pool from "./conexao.js";
import { executaQuery } from "./executaQuery.js";


export async function retornaCampeonatosTime(time) {
  const conexao = await pool.getConnection();
  const query = 'SELECT id, campeao, vice, ano FROM campeonatos WHERE campeao = "'+time+'"'

  const campeonatos = executaQuery(conexao, query);

  conexao.release();

  return campeonatos;
}