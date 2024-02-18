import Logo from '../../ui/logo/logo.tsx';

function HeaderLogin(): JSX.Element {
  return(
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <Logo />
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
export default HeaderLogin;
