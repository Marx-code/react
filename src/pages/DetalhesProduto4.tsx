import React from 'react';
import { useNavigate } from 'react-router-dom';

//useLocation
import { Routes, Route, useLocation } from 'react-router-dom';

import Nav from '../components/nav';
import TextProd from '../components/textProd';
import AvaliacaoProd from '../components/AvalicaoProd';
import Descricao from '../components/DescDetalhadaProd';
import QuantItensProd from '../components/QuantItensProd';
import ImagemProd from '../components/ImagemProd';
import PrecoProd from '../components/PrecoProd';

function DetalhesProduto() {
  const navigate = useNavigate();
   const location = useLocation();

  return (
    
    <div>

        <Nav />
      <div className="container mt-5 text-center">

        {/*Exibindo o uso do hook na tela*/}
      <div className="container text-center mt-3">
        <span className="badge bg-info text-dark">
            Hook useLocation: Você está na rota: {location.pathname}
        </span>
      </div>

        <TextProd title = "Produto 4" text = "Descrição do produto 4"/>
        <AvaliacaoProd stars='⭐⭐⭐⭐⭐'/>



      <ImagemProd url='https://i.ibb.co/HLHs9HMz/Gemini-Generated-Image-j7hw6wj7hw6wj7hw.png' width={300} />
      <PrecoProd value='R$ 44,44' />


      <QuantItensProd />



        <Descricao title='Descrição detalhada' text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates dicta maiores eum ipsa quisquam assumenda qui neque ducimus quidem corporis, quis perferendis dignissimos nulla debitis incidunt obcaecati repellat magnam repellendus?' />
        
      
      
      
        <button className="btn btn-secondary" onClick={() => navigate('/')}>
          Voltar para a Home
        </button>
      </div>
    </div>
  );
}

export default DetalhesProduto;