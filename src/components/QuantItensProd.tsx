import React, { useState, useEffect } from 'react';

function QuantItensProd() {
  const [qtd, setQtd] = useState(1);

  // useEffect roda quando 'qtd' muda
  useEffect(() => {
    console.log("Quantidade atualizada: " + qtd);
  }, [qtd]);

  return (
    <div className="d-flex gap-3 align-items-center">
      <button className="btn btn-secondary" onClick={() => setQtd(qtd > 1 ? qtd - 1 : 1)}>-</button>
      
      <strong>{qtd}</strong>
      
      <button className="btn btn-primary" onClick={() => setQtd(qtd + 1)}>+</button>
    </div>
  );
}

export default QuantItensProd;