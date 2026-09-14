import { Outlet } from "react-router";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      {/* Place holder  */}
      <Outlet />
      {/* <footer>All rights reserved!</footer> */}
    </>
  );
};

export default MainLayout;
