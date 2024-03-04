import { Outlet, useLocation, Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../const';
import { getAuthorizationStatus } from '../../../utils/authorization-status';
import { getLayoutState } from '../../../utils/layout-state';
import Logo from '../../ui/logo/logo';
import Footer from '../footer/footer';

function Layout(): JSX.Element {
  const { pathname } = useLocation();
  const { rootClassName, linkClassName, shouldRenderUser } = getLayoutState(pathname as AppRoute);
  const authorizationStatus = getAuthorizationStatus();

  return(
    <div className={`page ${rootClassName}`}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className={`header__logo-link ${linkClassName}`} to={ AppRoute.Root }>
                <Logo width={81} height={41}/>
              </Link>
            </div>
            { shouldRenderUser ? (
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={ AppRoute.Favorites }>
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      { authorizationStatus === AuthorizationStatus.Auth ? (
                        <>
                          <span className="header__user-name user__name">
                            Oliver.conner@gmail.com
                          </span><span className="header__favorite-count">3</span>
                        </>
                      ) : <span className="header__login">Sign in</span> }
                    </Link>
                  </li>
                  { authorizationStatus === AuthorizationStatus.Auth ? (
                    <li className="header__nav-item">
                      <a className="header__nav-link" href="#">
                        <span className="header__signout">Sign out</span>
                      </a>
                    </li>
                  ) : '' }
                </ul>
              </nav>
            ) : ''}
          </div>
        </div>
      </header>
      <Outlet />
      {pathname as AppRoute === AppRoute.Favorites && <Footer />}
    </div>
  );
}

export default Layout;

