import Header from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";






const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Header at the Top */}
      <Header />
  
      {/* Main Content (Grows to push footer down) */}
      <main className="flex-grow py-2">{children}</main>

      {/* Footer at the Bottom */}
      <Footer />
    </div>
  );
};

export default Layout;
