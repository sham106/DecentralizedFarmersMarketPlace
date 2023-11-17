import "./App.css";
import Navbar from "./components/Navigation/Navbar";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Footer from "./components/Navigation/Footer";

function App() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>

      <main>
        <section>
          <Hero />
          <Main />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
