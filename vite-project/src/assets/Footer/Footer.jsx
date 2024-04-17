import './Footer.css'; // Importa o arquivo CSS para aplicar estilos

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Todos os direitos reservados.</p>
        <ul className="footer-nav">
          <li><a href="/termos">Termos de Serviço</a></li>
          <li><a href="/privacidade">Política de Privacidade</a></li>
          <li><a href="/contato">Contato</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;