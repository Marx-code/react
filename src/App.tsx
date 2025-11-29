import 'bootstrap/dist/css/bootstrap.min.css';

//useLocation
import { Routes, Route, useLocation } from 'react-router-dom';

import Nav from './components/nav.tsx';
import CardProd from './components/cardProd.tsx';
import Footer from './components/footer.tsx';
import ProvaSocial from './components/provSocial.tsx';

import DetalhesProduto1 from './pages/DetalhesProduto1.jsx';
import DetalhesProduto2 from './pages/DetalhesProduto2.jsx';
import DetalhesProduto3 from './pages/DetalhesProduto3.jsx';
import DetalhesProduto4 from './pages/DetalhesProduto4.jsx';

// --- COMPONENTE HOME ---
function Home() {
  // 2. Instanciando o hook useLocation
  const location = useLocation();

  return (
    <div className="gap-4 bg-light bg-gradient">
      <div className=''>
        <Nav />
      </div>

      {/*Exibindo o uso do hook na tela */}
      <div className="container text-center mt-3">
        <span className="badge bg-info text-dark">
            Hook useLocation: Você está na rota: {location.pathname}
        </span>
      </div>

      <div className="d-flex justify-content-center gap-4 m-5">
        <CardProd width="30rem" btnLink="/produto/destaque" btnText='Sem destino' text="Descrição de um Componente de produto apenas ilustrativo" img='https://i.ibb.co/HLHs9HMz/Gemini-Generated-Image-j7hw6wj7hw6wj7hw.png' />

        <CardProd width="30rem" btnLink="/produto/destaque" btnText='Sem destino' text="Descrição de um Componente de produto apenas ilustrativo" img='https://i.ibb.co/HLHs9HMz/Gemini-Generated-Image-j7hw6wj7hw6wj7hw.png' />

        <CardProd width="30rem" btnLink="/produto/destaque" btnText='Sem destino' text="Descrição de um Componente de produto apenas ilustrativo" img='https://i.ibb.co/HLHs9HMz/Gemini-Generated-Image-j7hw6wj7hw6wj7hw.png' />
      </div>

      <div className="text-center">
        <h3 className="mb-4">Produtos Mais Populares</h3>
        <div className="d-flex justify-content-center flex-wrap gap-4 m-5">
          {/* Note o btnLink apontando para a rota que vamos criar */}
          <CardProd 
            width="18rem" 
            title='Produto 1' 
            btnText='Ver Detalhes' 
            btnLink="/detalhes1" 
            img='https://i.ibb.co/1GZn0k9G/Gemini-Generated-Image-cnhyl0cnhyl0cnhy.png'
          />
          <CardProd width="18rem" title='Produto 2' btnText='Ver Detalhes' btnLink="/detalhes2" img='https://i.ibb.co/1GZn0k9G/Gemini-Generated-Image-cnhyl0cnhyl0cnhy.png' />
          <CardProd width="18rem" title='Produto 3' btnText='Ver Detalhes' btnLink="/detalhes3" img='https://i.ibb.co/1GZn0k9G/Gemini-Generated-Image-cnhyl0cnhyl0cnhy.png' />
          <CardProd width="18rem" title='Produto 4' btnText='Ver Detalhes' btnLink="/detalhes4" img='https://i.ibb.co/1GZn0k9G/Gemini-Generated-Image-cnhyl0cnhyl0cnhy.png' />
        </div>
      </div>

      <div className='text-center m-5'>
        <h3>O que Nosso Clientes Dizem?</h3>
        <div className='row justify-content-center'>
          <ProvaSocial img="https://img.freepik.com/fotos-gratis/jovem-barbudo-com-camisa-listrada_273609-5677.jpg?semt=ais_hybrid&w=740&q=80" nome="Carlos" texto="Legal!" />
        </div>
      </div>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/detalhes1" element={<DetalhesProduto1 />} />
        <Route path="/detalhes2" element={<DetalhesProduto2 />} />
        <Route path="/detalhes3" element={<DetalhesProduto3 />} />
        <Route path="/detalhes4" element={<DetalhesProduto4 />} />

    </Routes>
  );
}

export default App;