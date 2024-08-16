import "./App.css";
import { Navbar, Hero, Services, Transactions, Footer } from "./components";
const App = () => {
  return (
    <div className="min-h-screen">
      <div>
        <Navbar />
        <Hero />
      </div>

      <Services />
      <Transactions />
      <Footer />
    </div>
  );
};

export default App;
