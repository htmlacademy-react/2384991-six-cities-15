import { Outlet } from 'react-router-dom';

function Layout(): JSX.Element {
  return(
    <>
      <p>I&apos;m the Layout</p>
      <Outlet />
    </>
  );
}

export default Layout;

