import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Destinations from "./components/Destinations";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-inter text-zinc-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <Destinations />
      </main>
      <Footer />
    </div>
  );
}

export default App;
