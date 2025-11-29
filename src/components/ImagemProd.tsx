import React from "react";

function ImagemProd({ url, width }: { url: string; width: string | number }) {
  return (
    <img 
      src={url} 
      style={{ width: width }} 
      alt="Imagem"
    />
  );
}

export default ImagemProd;