import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AppRoute } from '../../const';
import './not-found-page.css';

function NotFoundPage(): JSX.Element {
  return(
    <>
      <Helmet>
        <title>6 cities. Page not found</title>
      </Helmet>
      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Page not found</h1>
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">404. Page not found</b>
                <p className="cities__status-description">
                  Uh oh! Something went wrong. Go back to our <span className="cities__status-link"><Link to={ AppRoute.Root }>main page</Link></span>
                </p>
              </div>
            </section>
            <div className="cities__right-section" />
          </div>
        </div>
      </main>
    </>
  );
}

export default NotFoundPage;
