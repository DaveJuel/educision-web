import React from "react";

const steps = [
  {
    number: "01",
    title: "Tell us about yourself",
    description: "Answer a few prompts about your interests.",
  },
  {
    number: "02",
    title: "Choose Options",
    description: "Choose a school or subject that matches your interests.",
  },
  {
    number: "03",
    title: "Setup and apply",
    description:
      "Almost ready! Set up your account and register to the school.",
  },
];

const AppHowItWorks = () => {
  return (
    <div
      style={{
        padding: "50px 20px",
        backgroundColor: "#eaf4f3",
        textAlign: "center",
      }}
    >
      <h2 style={{ marginBottom: "30px", fontWeight: "bold" }}>How it Works</h2>
      <div className="row justify-content-center">
        {steps.map((step, index) => (
          <div className="col-12 col-sm-6 col-md-4 mb-4" key={index}>
            <div
              style={{
                backgroundColor: "#173d36",
                color: "#ffffff",
                borderRadius: "8px",
                padding: "30px 20px",
                textAlign: "center",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
              }}
            >
              <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
                {step.number}
              </div>
              <h5 style={{ fontWeight: "bold", marginBottom: "10px" }}>
                {step.title}
              </h5>
              <p style={{ fontSize: "0.9rem", color: "#cbd5d1" }}>
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppHowItWorks;
