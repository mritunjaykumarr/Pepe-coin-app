import {useState,useEffect}from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from './ErrorBoundary'; // Adjust path as necessary
import Layout from "./Layout.jsx"; // Import the Layout component
import Index from "./components/Index.jsx"; // Import the Index component
import Refer from "./components/Refer.jsx"; // Import the Refer component
import Navbar from "./components/Navbar.jsx"; // Import the Navbar component
import Hero from "./components/Hero.jsx"; // Import the Hero component
import Spinner from './components/Spinner.jsx'; // Import the Spinner component

const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process, e.g., fetching data or initializing
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 3 seconds
    }, 1000);

    return () => clearTimeout(timer); // Clean up timer on component unmount
  }, []);
  return (
    <Router>
      <ErrorBoundary>
        {loading ? (
          <Spinner />
        ) : (
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route
                path="/refer"
                element={
                  <>
                    <Navbar />
                    <Refer />
                  </>
                }
              />
              <Route
                path="/pepe"
                element={
                  <>
                    <Navbar />
                    <Hero />
                  </>
                }
              />
            </Route>
          </Routes>
        )}
      </ErrorBoundary>
    </Router>
  );
};

export default App;
