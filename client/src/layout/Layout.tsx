import Navbar from "../components/navbar/Navbar";
import Footer from "../footer/Footer";
import { useAppSelector } from "../hooks/useAppSelector";

type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const { theme } = useAppSelector((state) => state.theme);
  return (
    <div className={`flex flex-col min-h-screen ${theme}`}>
      <header className="bg-white">
        <Navbar />
      </header>

      <main className="bg-white grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
