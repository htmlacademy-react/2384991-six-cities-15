import PageWrapper from '../layout/page-wrapper/page-wrapper.tsx';

type AppScreenProps = {
  rentalsCount: number;
}

function App({rentalsCount}: AppScreenProps): JSX.Element {
  return(
    <PageWrapper rentalsCount={rentalsCount}/>
  );
}

export default App;
