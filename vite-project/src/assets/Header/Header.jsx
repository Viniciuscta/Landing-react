import './Header.css'; // Importa o arquivo CSS para aplicar estilos

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="/sobre" className="nav-link">Sobre</a>
          </li>
          <li className="nav-item">
            <a href="/servicos" className="nav-link">Serviços</a>
          </li>
          <li className="nav-item">
            <a href="/contato" className="nav-link">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;