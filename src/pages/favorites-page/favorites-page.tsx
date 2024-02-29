import Header from '../../components/layout/header/header.tsx';
import Footer from '../../components/layout/footer/footer.tsx';
import FavoritePlacesList from '../../components/blocks/favorite-places-list/favorite-places-list.tsx';

function FavoritesPage(): JSX.Element {
  return(
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritePlacesList />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesPage;
