import React from "react";

const AppContactUs = () => {
  return (
    <div
      style={{
        backgroundColor: "#e6f0ed", // Light green background
        padding: "60px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          display: "flex",
          gap: "40px",
        }}
      >
        {/* Contact Information Section */}
        <div style={{ flex: 1 }}>
          <h2 style={{ color: "#000", marginBottom: "20px" }}>
            Get in touch with us
          </h2>
          <p style={{ margin: "10px 0" }}>1 KN 78 Street, Kigali, Rwanda</p>
          <p style={{ margin: "10px 0" }}>732-223-4271</p>
          <p style={{ margin: "10px 0" }}>educision1@gmail.com</p>
          <h3 style={{ marginTop: "30px", marginBottom: "10px" }}>Get Social</h3>
          <div style={{ display: "flex", gap: "15px" }}>
            <a
              href="#"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                backgroundColor: "#2d7b6f",
                borderRadius: "50%",
                color: "#fff",
                textDecoration: "none",
                fontSize: "20px",
              }}
            >
                <span className="btn-inner--icon">
                    <i className="fa fa-facebook-square" />
                  </span>
            </a>
            <a
              href="#"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                backgroundColor: "#2d7b6f",
                borderRadius: "50%",
                color: "#fff",
                textDecoration: "none",
                fontSize: "20px",
              }}
            >
               <span className="btn-inner--icon">
                    <i className="fa fa-dribbble" />
                  </span>
            </a>
          </div>
        </div>

        {/* Contact Form Section */}
        <div style={{ flex: 1 }}>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <input
              type="text"
              placeholder="Name"
              style={{
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                fontSize: "16px",
              }}
            />
            <input
              type="email"
              placeholder="Email"
              style={{
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                fontSize: "16px",
              }}
            />
            <textarea
              placeholder="Type your message here..."
              rows="5"
              style={{
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                fontSize: "16px",
                resize: "none",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                backgroundColor: "#2d7b6f",
                color: "#fff",
                fontWeight: "bold",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
              }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = "#3c8f7e")
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "#2d7b6f")
              }
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppContactUs;
