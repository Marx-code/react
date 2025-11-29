import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ProvaSocial(props) {
  return (
    <>
    <div className="text-center p-3 m-2 border rounded shadow-sm" style={{ maxWidth: "250px" }}>
      <img
        src={props.img}
        alt={props.nome}
        className="rounded-circle mb-2"
        width="60"
        height="60"
        style={{ objectFit: "cover" }}
      />
      <p className="fst-italic mb-1">“{props.texto}”</p>
      <h6 className="fw-bold">{props.nome}</h6>
    </div>
    </>
  );
}

export default ProvaSocial;
