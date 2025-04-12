
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  isRTL: boolean;
  setIsRTL: (value: boolean) => void;
}

const Layout = ({ isRTL, setIsRTL }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isRTL={isRTL} setIsRTL={setIsRTL} />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
