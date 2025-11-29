import React from "react";

function TextProd({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default TextProd;