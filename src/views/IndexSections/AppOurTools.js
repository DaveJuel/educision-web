import React from "react";

const tools = [
  {
    title: "COMPARE SCHOOLS",
    description: "Easily compare schools side by side across multiple criteria.",
    icon: "icon icon-sm ni ni-app",
  },
  {
    title: "SCHOOL INSIGHTS",
    description: "Know school metrics that matter for better decision making.",
    icon:  "icon icon-sm ni ni-app",
  },
  {
    title: "SEARCH BY DISTRICT",
    description: "Search for schools by location. See schools in your district.",
    icon:  "icon icon-sm ni ni-app",
  },
  {
    title: "FIND PROGRAMMES FASTER",
    description:
      "Explore what to study that's tailored to your interests with our programme finder.",
    icon:  "icon icon-sm ni ni-app",
  },
  {
    title: "SCHOOL RATING",
    description:
      "Use our school rating to tell the world your thoughts, experiences, and stories that makes your school stand out.",
    icon:  "icon icon-sm ni ni-app",
  },
  {
    title: "SURVEYS",
    description: "Quickly get answers to your questions about education in Rwanda.",
    icon:  "icon icon-sm ni ni-app",
  },
];

const AppOurTools = () => {
  return (
    <div style={{ padding: "40px 20px", backgroundColor: "#eaf4f3", textAlign: "center" }}>
      <h2 style={{ marginBottom: "20px", fontWeight: "bold" }}>Our Tools</h2>
      <div className="row">
        {tools.map((tool, index) => (
          <div className="col-12 col-sm-6 col-md-4" key={index}>
            <div
              style={{
                backgroundColor: "#2aa381",
                color: "#ffffff",
                borderRadius: "8px",
                padding: "20px",
                height: "200px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                marginBottom: "20px",
              }}
            >
              <i
                className={`${tool.icon}`}
                style={{ fontSize: "2rem", marginBottom: "10px" }}
              ></i>
              <h5 style={{ fontWeight: "bold", marginBottom: "10px" }}>{tool.title}</h5>
              <p style={{ textAlign: "center", fontSize: "0.9rem" }}>{tool.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppOurTools;
