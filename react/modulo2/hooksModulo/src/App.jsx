import { useState, useEffect } from 'react'
import Produto from './Produto'

//PRATICANDO useState

// function App() {
//   const [dados, setDados] = useState(null);
//   const [loading, setLoading] = useState(null);

//   async function handleClick(event) {
//     setLoading(true);
//     const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`)
//     const json = await response.json();
//     setDados(json);
//     setLoading(false);
//   }

//   return (
//       <div>
//         <button style={{margin: '.5rem'}} onClick={handleClick}>notebook</button>
//         <button style={{margin: '.5rem'}} onClick={handleClick}>tablet</button>
//         <button style={{margin: '.5rem'}}onClick={handleClick}>smartphone</button>
//         {loading && <p>Carregando...</p>}
//         {!loading && dados && <Produtos dados={dados}/>}
//       </div>
//   )
// }

//PRATICANDO useEffect

const App = () => {
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto');
    if (produtoLocal !== 'null') setProduto(produtoLocal);
  }, []);

  useEffect(() => {
    if (produto !== null) window.localStorage.setItem('produto', produto);
  }, [produto]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <div>
      <h1>Preferência: {produto}</h1>
      <button style={{ marginRight: '1rem' }} onClick={handleClick}>
        notebook
      </button>
      <button onClick={handleClick}>smartphone</button>
      <Produto produto={produto} />
    </div>
  );
};


export default App
