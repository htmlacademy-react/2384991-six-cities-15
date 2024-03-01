import { AppRoute } from '../const.ts';

const getLayoutState = (pathname: AppRoute) => {
  let rootClassName = '';
  let linkClassName = '';
  let shouldRenderUser = true;
  const isKnownRoute = Object.values(AppRoute).some((route) =>
    route === pathname ||
    (route.includes(':id') && pathname.startsWith(route.split('/:id')[0]))
  );

  if (pathname === AppRoute.Root) {
    rootClassName = ' page--gray page--main';
    linkClassName = ' header__logo-link--active';
  } else if (pathname === AppRoute.Login) {
    rootClassName = ' page--gray page--login';
    shouldRenderUser = false;
  } else if (!isKnownRoute) {
    rootClassName = ' page--main';
    linkClassName = 'header__logo-link--active';
  }

  return {rootClassName, linkClassName, shouldRenderUser };
};

export { getLayoutState };
