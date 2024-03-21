import classNames from 'classnames';
import { AppRoute } from '../const.ts';

const getLayoutState = (pathname: AppRoute) => {
  const isRoot = pathname === AppRoute.Root;
  const isLogin = pathname === AppRoute.Login;
  const isKnownRoute = Object.values(AppRoute).some((route) =>
    route === pathname ||
    (route.includes(':id') && pathname.startsWith(route.split('/:id')[0]))
  );

  const rootClassName = classNames('page', {
    'page--main': isRoot || !isKnownRoute,
    'page--gray': isRoot || isLogin,
    'page--login': isLogin,
  });

  const linkClassName = classNames('header__logo-link', {
    'header__logo-link--active': isRoot || !isKnownRoute,
  });

  const shouldRenderUser = !isLogin;

  return {rootClassName, linkClassName, shouldRenderUser };
};

export { getLayoutState };
