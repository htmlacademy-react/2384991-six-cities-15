import MainPage from '../../pages/main-page/main-page.tsx';

type AppScreenProps = {
  rentalsCount: number;
}

function App({rentalsCount}: AppScreenProps): JSX.Element {
  return(
    <MainPage rentalsCount={rentalsCount}/>
  );
}

export default App;
