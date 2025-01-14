import { Outlet } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";

export const MainLayout = () => {

  
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
