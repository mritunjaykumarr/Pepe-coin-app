import "./App.css";
import {
  Navbar,
  Hero,
  Services,
  Transactions,
  Footer,
  Index,
} from "./components/exportFile";
const App = () => {
  return (
    <div className="min-h-screen">
      <Index />

      {/* <div>
        <Navbar />
        <Hero />
      </div> */}

      {/* <Services />
      <Transactions />
      <Footer /> */}
    </div>
  );
};

export default App;
