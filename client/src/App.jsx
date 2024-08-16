import "./App.css";
import { Navbar, Hero, Services, Transactions, Footer } from "./components";
const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <Hero />

      <Services />
      <Transactions />
      <Footer />
    </div>
  );
};

export default App;
