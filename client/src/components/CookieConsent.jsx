import { useState ,useEffect} from "react";
import "../style/cookie.css"; // Ensure to create this CSS file

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if the cookieConsent cookie is set
    const cookies = document.cookie
      .split("; ")
      .find((row) => row.startsWith("cookieConsent="));
    if (!cookies) {
      setShowBanner(true); // Show banner if cookieConsent is not found
    }
  }, []);

  const handleAcceptAllCookies = () => {
    document.cookie = "cookieConsent=accepted; max-age=31536000; path=/"; // Set cookie for 1 year
    setShowBanner(false); // Hide the banner
  };

  const handleDeclineCookies = () => {
    document.cookie = "cookieConsent=declined; max-age=31536000; path=/"; // Set cookie for 1 year
    setShowBanner(false); // Hide the banner
  };

  const handleManageCookies = () => {
    // Optionally redirect or open a modal for cookie management
    window.location.href = "/cookie-policy"; // Example redirection to a cookie management page
  };

  if (!showBanner) {
    return null; // Don't render the banner if cookiesConsent is set
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