import { useId } from 'react';
import { useNavigate } from 'react-router-dom';

function CardProd({ 
  title = "Título do card", 
  text = "Descrição prévia do produto", 
  img = "", 
  btnText = "Ver Detalhes", 
  btnLink = "/",
  width = "18rem", 
  margin = "m-3" 
}) {
  
  const navigate = useNavigate();

  // Gera um ID único para este componente específico.
  const idDoCard = useId();

  return (
    // Atribuímos o ID à div MÃE.
    // Agora, cada card no site tem uma identidade única no HTML.
    <div id={idDoCard} className={`card ${margin} bg-white`} style={{ width }}>
      
      <img src={img} className="card-img-top" alt={title} />
      
      <div className="card-body">
        <h5 className="card-title">
            {title}
        </h5>
        
        <p className="card-text">{text}</p>
        
        <button 
          className="btn btn-primary" 
          onClick={() => navigate(btnLink)}
        >
          {btnText}
        </button>
      </div>
      
      {/*Exibindo o id do card*/}
      <div className="" style={{fontSize: '0.7rem'}}>
        ID: <code>{idDoCard}</code>
      </div>
    </div>
  );
}

export default CardProd;