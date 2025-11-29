import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Footer() {
  return (
    <footer className="bg-dark text-center text-lg-start text-white mt-5 ">
  <div className="container p-4">
    <div className="row">
      <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 className="text-uppercase">Minha Empresa</h5>
        <p>
          Criamos soluções digitais sob medida. Sites, sistemas e estratégias que geram resultado.
        </p>
      </div>

      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase">Links úteis</h5>
        <ul className="list-unstyled mb-0">
          <li><a href="#!" className="text-white text-decoration-none">Início</a></li>
          <li><a href="#!" className="text-white text-decoration-none">Serviços</a></li>
          <li><a href="#!" className="text-white text-decoration-none">Portfólio</a></li>
          <li><a href="#!" className="text-white text-decoration-none">Contato</a></li>
        </ul>
      </div>

      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase">Contato</h5>
        <ul className="list-unstyled mb-0">
          <li>Email: contato@minhaempresa.com</li>
          <li>Tel: (11) 99999-9999</li>
          <li>São Paulo - SP</li>
        </ul>
      </div>
    </div>
  </div>

  <div className="text-center p-3 bg-secondary">
    © 2025 Minha Empresa — Todos os direitos reservados
  </div>
</footer>

  );
}


export default Footer;












