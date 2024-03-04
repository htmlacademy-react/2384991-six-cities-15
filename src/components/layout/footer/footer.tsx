import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const.ts';
import Logo from '../../ui/logo/logo.tsx';

function Footer(): JSX.Element {
  return(
    <footer className="footer container">
      <Link className="footer__logo-link" to={ AppRoute.Root }>
        <Logo width={64} height={33}/>
      </Link>
    </footer>
  );
}

export default Footer;


