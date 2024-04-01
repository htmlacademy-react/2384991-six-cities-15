import { Link, useNavigate } from 'react-router-dom';
import { useRef, FormEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import { useAppDispatch } from '../../hooks/index.ts';
import { loginAction } from '../../store/api-action.ts';
import { AppRoute, PASSWORD_REGEXP } from '../../const.ts';

function LoginPage(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleFormSubmitLogin = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null
      && passwordRef.current !== null
      && PASSWORD_REGEXP.test(passwordRef.current.value)) {
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value
      }));
      navigate(AppRoute.Root);
    }
  };

  return(
    <>
      <Helmet>
        <title>6 cities. Sign ing</title>
      </Helmet>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleFormSubmitLogin}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  ref={loginRef}
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  ref={passwordRef}
                  type="password"
                  name="password"
                  placeholder="Password"
                  minLength={2}
                  required
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={ AppRoute.Root }>
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>

  );
}

export default LoginPage;

