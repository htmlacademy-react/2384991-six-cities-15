import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../const.ts';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
  isReverse?: boolean;
}

function PrivateRoute({ authorizationStatus, children, isReverse }: PrivateRouteProps): JSX.Element {
  return (
    authorizationStatus === (isReverse ? AuthorizationStatus.NoAuth : AuthorizationStatus.Auth)
      ? children
      : <Navigate to={ isReverse ? AppRoute.Root : AppRoute.Login } />
  );
}

export default PrivateRoute;
