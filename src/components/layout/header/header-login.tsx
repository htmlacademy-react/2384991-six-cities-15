import Logo from '../../ui/logo/logo.tsx';

function HeaderLogin(): JSX.Element {
  return(
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link" href="main.html">
              <Logo width={81} height={41}/>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
export default HeaderLogin;
