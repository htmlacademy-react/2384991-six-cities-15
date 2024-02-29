import Logo from '../../ui/logo/logo.tsx';

function Footer(): JSX.Element {
  return(
    <footer className="footer container">
      <a className="footer__logo-link" href="main.html">
        <Logo width={64} height={33}/>
      </a>
    </footer>
  );
}

export default Footer;


