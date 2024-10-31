const SignupButton = () => {
    return (
      <a
        href="/signup"
        style={{
          width: "149px",
          height: "63px",
          borderRadius: "19px 19px 19px 19px",
          backgroundColor: "#21D0B3", // Updated background color
          color: "#263238",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none",
          fontFamily: "Mada, sans-serif", // Font family
          fontSize: "18px",               // Font size
          fontWeight: 600,                // Font weight
          lineHeight: "23.4px",           // Line height
          textAlign: "left",              // Text alignment
        }}
      >
        Sign Up
      </a>
    );
  };
  
  export default SignupButton;
  