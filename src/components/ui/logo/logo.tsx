type LogoProps = {
  width: number;
  height: number;
}

function Logo({ width, height }: LogoProps): JSX.Element {
  return(
    <img
      className="header__logo"
      src="img/logo.svg"
      alt="6 cities logo"
      width={width}
      height={height}
    />
  );
}

export default Logo;
