import Navbar from "../components/Navigation/Navbar";
import Footer from "../components/Navigation/Footer";
import ServiceBar from "../components/Navigation/ServiceBar";

const Services = () => {
  return (
    <>
      <nav>
        <Navbar />
        <ServiceBar />
      </nav>
      <div>Services</div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Services;
