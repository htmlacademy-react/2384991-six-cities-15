import Header from '../header/header.tsx';
import MainPage from '../../../pages/main-page/main-page.tsx';

type PageWrapperProps = {
  rentalsCount: number;
}

function PageWrapper({rentalsCount}: PageWrapperProps): JSX.Element {
  return(
    <div className="page page--gray page--main">
      <Header />
      <MainPage rentalsCount={rentalsCount}/>
    </div>
  );
}

export default PageWrapper;
