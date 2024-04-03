import { Link, useNavigate } from 'react-router-dom';
import { useRef, FormEvent, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from '../../hooks/index.ts';
import { loginAction } from '../../store/api-action.ts';
import { setError, clearError } from '../../store/action.ts';
import { AppRoute, PASSWORD_REGEXP, TIMEOUT_SHOW_ERROR } from '../../const.ts';
import { selectCity } from '../../store/selectors.ts';

function LoginPage(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const dispatch = useAppDispatch();
  const currentCity = useAppSelector(selectCity);
  const navigate = useNavigate();

  const handleFormSubmitLogin = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const loginUser = async () => {
      if (loginRef.current !== null && passwordRef.current !== null) {
        const password = passwordRef.current.value;
        if (!PASSWORD_REGEXP.test(password)) {
          dispatch(setError('The password must contain a minimum of one letter and one number.'));
          setTimeout(() => {
            dispatch(clearError());
          }, TIMEOUT_SHOW_ERROR);
          return;
        }

        setIsSubmitting(true);
        try {
          await dispatch(loginAction({
            login: loginRef.current.value,
            password,
          })).unwrap();
          navigate(AppRoute.Root);
        } catch {
          dispatch(setError('Something went wrong. Please check your connection and try again.'));
          setTimeout(() => {
            dispatch(clearError());
          }, TIMEOUT_SHOW_ERROR);
        }
        setIsSubmitting(true);
      }
    };

    loginUser();
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
                disabled={isSubmitting}
                style={{ backgroundColor: isSubmitting ? 'grey' : '' }}
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={ AppRoute.Root }>
                <span>{currentCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>

  );
}

export default LoginPage;

