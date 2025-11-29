import React from "react";

function AvaliacaoProd({ stars }: { stars: string }) {
  return (
    <div className="d-flex align-items-center gap-2">
      <span className="text-warning fs-5">{stars}</span>
      <span className="text-secondary">Avaliação</span>
    </div>
  );
}

export default AvaliacaoProd;