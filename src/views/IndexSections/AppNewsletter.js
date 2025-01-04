import React from "react";

const AppNewsletter = () => {
  return (
    <div
      style={{
        backgroundColor: "#1e6157", // Dark green background
        padding: "40px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Title */}
        <h2 style={{ color: "#fff", fontWeight: "bold", margin: 0 }}>
          Subscribe to our newsletter
        </h2>

        {/* Input and Button */}
        <div style={{ display: "flex", gap: "10px" }}>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              padding: "10px 15px",
              borderRadius: "5px",
              border: "1px solid #ddd",
              outline: "none",
              flex: "1",
              fontSize: "16px",
            }}
          />
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#2d7b6f",
              borderRadius: "5px",
              border: "none",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor = "#3c8f7e")
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "#2d7b6f")
            }
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppNewsletter;
