import React from "react";

const AppAboutUs = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#eaf4f3",
        padding: "50px",
        borderRadius: "8px",
      }}
    >
      {/* Placeholder for Image */}
      <div
        style={{
          flex: "1",
          backgroundColor: "#c9e3e0",
          height: "300px",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p style={{ color: "#173d36", fontWeight: "bold" }}>
          Image Placeholder
        </p>
      </div>

      {/* Text Content */}
      <div
        style={{
          flex: "2",
          marginLeft: "30px",
          color: "#173d36",
        }}
      >
        <h2 style={{ fontWeight: "bold", marginBottom: "20px" }}>
          About ShakiShuli
        </h2>
        <p>
          <strong>ShakiShuli</strong>, is a product of <strong>Educision</strong>, and exists to
          transform the educational landscape in Rwanda by providing an easy-to-use platform that
          connects students and teachers with educational institutions.
        </p>
        <p>
          Our mission is to revolutionize the traditional school search and simplify the process for
          quality education, ensuring that every student and teacher has the resources they need to
          thrive.
        </p>
        <p>
          Whether you're a Rwandan student seeking the best schools near you or an international
          learner looking to explore educational options in Rwanda, or a teacher looking for
          potential places of employment, ShakiShuli is designed to facilitate your journey.
        </p>
        <p>
          We are committed to making the educational search process efficient and hassle-free,
          guiding you every step of the way.
        </p>
      </div>
    </div>
  );
};

export default AppAboutUs;
