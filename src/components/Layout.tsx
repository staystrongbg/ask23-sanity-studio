import { Topnav, Footer, Topbar, Breadcrumbs } from '.';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col ">
      <Topbar />
      <Topnav />
      <Breadcrumbs />
      <div className="m-auto w-full  min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
