import "../style/cookie.css"; // Ensure to create this CSS file
import { useEffect, useMemo, useState } from "react";
import { useCookies } from "react-cookie";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [cookieToken, setCookieToken] = useState("");
  const [cookies, setCookie] = useCookies(["cookieConsent", "referralCode"]); // Add other cookies as needed

  // extract url from refer link

  useMemo(() => {
    const path = window.location.pathname;
    const regex = /\/refer\/([a-f0-9\-]+)/;
    const match = path.match(regex);

    if (match) {
      const uniqueId = match[1];
      // console.log(uniqueId); // "dfff80-53b6-4507-9ced-76b2f18bb29f"
      setCookieToken(() => uniqueId);
    }
    console.log(cookieToken);
  }, [cookieToken]);

  useEffect(() => {
    // Check if the cookieConsent cookie is set

    if (!cookies.cookieConsent) {
      setShowBanner(true); // Show banner if cookieConsent is not found
    }
  }, [cookies]);

  const handleAcceptAllCookies = () => {
    const referralCode = cookieToken; // Replace with the actual referral code
    const expires = new Date();
    expires.setDate(expires.getDate() + 1); // Set expiration to 1 day

    setCookie("cookieConsent", "accepted", { path: "/", maxAge: 31536000 }); // Set cookie for 1 year
    setCookie("referralCode", referralCode, { path: "/", expires }); // Set referral code cookie

    console.log("Cookie set successfully with referralCode:", referralCode);

    setShowBanner(false); // Hide the banner
  };

  const handleDeclineCookies = () => {
    setCookie("cookieConsent", "declined", { path: "/", maxAge: 31536000 }); // Set cookie for 1 year
    setShowBanner(false); // Hide the banner
  };

  const handleManageCookies = () => {
    // Optionally redirect or open a modal for cookie management
    window.location.href = "/cookie-policy"; // Example redirection to a cookie management page
  };

  if (!showBanner) {
    return null; // Don't render the banner if cookieConsent is set
  }

  return (
    <div className="cookie-banner">
      <p>
        We use cookies to improve Pepe Layer2’s site. Some cookies are necessary
        for our website and services to function properly. Other cookies are
        optional and help personalize your experience, including advertising and
        analytics. You can consent to all cookies, decline all optional cookies,
        or manage optional cookies. Without a selection, our default cookie
        settings will apply. You can change your preferences at any time. To
        learn more, check out our{" "}
        <a href="#" target="_blank">
          Cookie Policy
        </a>
        .
      </p>
      <div className="cookie-buttons">
        <button onClick={handleAcceptAllCookies}>Accept All Cookies</button>
        <button onClick={handleDeclineCookies}>Decline Optional Cookies</button>
        <button onClick={handleManageCookies}>Manage Cookies</button>
      </div>
    </div>
  );
};

export default CookieConsent;
