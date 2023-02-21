import MainNavigation from './TitleBar';

function Layout(props) {
  return (
    <div className="select-none">
      <MainNavigation />
      <main className="">{props.children}</main>
    </div>
  );
}

export default Layout;