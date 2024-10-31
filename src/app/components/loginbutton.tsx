


const LoginButton = () => {
  return (
    <a
      href="/login"
      style={{ 
        width: "149px",
        height: "63px",
        borderRadius: "19px 19px 19px 19px", // Updated border radius
        border: "1px solid #2C2C2C",        // Border color
        color: "#2C2C2C",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        fontFamily: "Mada, sans-serif",
        fontSize: "18px",
        fontWeight: 600,
        lineHeight: "23.4px",
        opacity: 1,                        // Opacity set to 1 for visibility
      }}
    >
      Login
    </a>
  );
};

export default LoginButton;
