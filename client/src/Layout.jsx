import React from "react";
import { Outlet } from "react-router-dom";
import CookieConsent from "./components/CookieConsent.jsx"; // Import the CookieConsent component

const Layout = () => {
  return (
    <>
      <CookieConsent />
      <Outlet /> {/* This will render the nested routes */}
    </>
  );
};

export default Layout;
