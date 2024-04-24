import { Outlet } from "react-router-dom";
import Footer from "../Router/Shared/Footer";
import Navbar from "../Router/Shared/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
