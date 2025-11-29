import React from "react";

function Descricao({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}

export default Descricao;