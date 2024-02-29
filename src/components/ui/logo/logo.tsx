import { Link } from 'react-router-dom';

type LogoProps = {
  width: number;
  height: number;
}

function Logo({ width, height }: LogoProps): JSX.Element {
  return(
    <Link className="header__logo-link header__logo-link--active" to="/">
      <img
        className="header__logo"
        src="img/logo.svg"
        alt="6 cities logo"
        width={width}
        height={height}
      />
    </Link>
  );
}

export default Logo;
