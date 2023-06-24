function Footer() {
  return (
    <footer className="page-footer blue accent-3">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a
            className="grey-text text-lighten-4 right"
            href="https://github.com/husia777/react-pet-project-2"
          >
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
