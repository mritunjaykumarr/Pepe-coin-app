import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error messages to an error reporting service
    console.error("Error caught by Error Boundary:", error);
    console.error("Error info:", errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={styles.container}>
          <div style={styles.iconContainer}>
            <span role="img" aria-label="error-icon" style={styles.icon}>
              ⚠️
            </span>
          </div>
          <h1 style={styles.title}>Oops! Something went wrong.</h1>
          <p style={styles.message}>
            We apologize for the inconvenience. Please try refreshing the page
            or come back later.
          </p>
          <button
            style={styles.button}
            onClick={() => window.location.reload()}
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f8f9fa",
    textAlign: "center",
    padding: "20px",
  },
  iconContainer: {
    fontSize: "80px",
    marginBottom: "20px",
  },
  icon: {
    fontSize: "80px",
    color: "#dc3545",
  },
  title: {
    fontSize: "32px",
    color: "#343a40",
    marginBottom: "10px",
  },
  message: {
    fontSize: "18px",
    color: "#6c757d",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
};

export default ErrorBoundary;
