// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   useLocation,
// } from "react-router-dom";
// import "./App.css";
// import { Index, Refer } from "./components/exportFile";
// import Navbar from "./components/Navbar.jsx";
// import Hero from "./components/Hero.jsx";
// import Services from "./components/Services.jsx";

// const Layout = ({ children }) => {
//   const location = useLocation();
//   const pepe = location.pathname === "/pepe"; // Check if current route is `/pepe`

//   return (
//     <div>
//       {pepe && (
//         <>
//           <Navbar />
//           <Hero />
//           <Services />
//         </>
//       )}
//       {children}
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <Layout>
//               <Index />
//             </Layout>
//           }
//         />
//         <Route
//           path="/refer"
//           element={
//             <Layout>
//               <Refer />
//             </Layout>
//           }
//         />
//         <Route
//           path="/pepe"
//           element={
//             <Layout>
             
//             </Layout>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
// import { Index, Refer } from "./components/exportFile";
import Index from "./components/Index.jsx"
import Refer from "./components/Refer.jsx"
import  Navbar  from "./components/Navbar.jsx";
import Hero  from "./components/Hero.jsx";

const App = () => {
  return (
    <Router>
      {/* <Navbar />
      <Hero /> */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/refer" element={<Refer />} />
        <Route path="/pepe" element= {<><Navbar /><Hero /></>} />
      </Routes>
      {/* <Services />
      <Transactions />
      <Footer /> */}
    </Router>
  );
};

export default App;

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "./App.css";
// import {
//   Navbar,
//   Hero,
//   Services,
//   Transactions,
//   Footer,
//   Index,
//   Refer,
// } from "./components/exportFile";
// import {Index} from "./components/Index"
// const App = () => {
//   return (
//     // <div className="min-h-screen">
//     //   {/* <Index /> */}
//     //   <Refer />
//     //   {/* <div>
//     //     <Navbar />
//     //     <Hero />
//     //   </div> */}

//     //   {/* <Services />
//     //   <Transactions />
//     //   <Footer /> */}
//     // </div>

//     <Router>
//       <Routes>
//         <Route path="/" element={Index} />
//         <Route path="/about" element={Refer} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
