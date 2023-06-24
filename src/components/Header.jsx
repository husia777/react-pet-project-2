function Header() {
    return (
      <nav className="blue accent-3">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">
            React Shop
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="https://github.com/husia777/react-pet-project-2">Repo</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  
export default Header;