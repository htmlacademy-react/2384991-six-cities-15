import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/index.ts';
import { AppRoute, AuthorizationStatus } from '../../../const.ts';
import { selectAuthorizationStatus } from '../../../store/selectors.ts';

type PrivateRouteProps = {
  children: JSX.Element;
  isReverse?: boolean;
}

function PrivateRoute({ children, isReverse }: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);

  return (
    authorizationStatus === (isReverse ? AuthorizationStatus.NoAuth : AuthorizationStatus.Auth)
      ? children
      : <Navigate to={ isReverse ? AppRoute.Root : AppRoute.Login } />
  );
}

export default PrivateRoute;
