import React from 'react';


const Footer: React.FC = () => {
  return (
    <footer
      style={{
        width: "100%",
        padding: "1.5rem 0",
        backgroundColor: "#0D0E10",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "1rem",
        position:"relative",
        top:"25vh"
      
       
      }}
    >
      <div style={{ display: "flex", gap: "1.5rem" }}>
        <a
          href="https://twitter.com/your_profile"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#fff",
            fontSize: "1.2rem",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            transition: "color 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#1DA1F2")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
        >
          X
        </a>

        <a
          href="/blog"
          style={{
            color: "#fff",
            fontSize: "1.2rem",
            textDecoration: "none",
            transition: "color 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#1DA1F2")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
        >
          Blog
        </a>

        <a
          href="/whitepaper.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#fff",
            fontSize: "1.2rem",
            textDecoration: "none",
            transition: "color 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#1DA1F2")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
        >
          Whitepaper
        </a>
      </div>
      <p style={{ fontSize: "0.9rem", color: "#7f7f7f" }}>
        &copy; {new Date().getFullYear()} Strion. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
