// src/components/Sidebar.js

import React from "react";
import "../App.css";

export default function Sidebar({ step }) {
  const steps = [
    { label: "Your Info", number: 1 },
    { label: "Select Plan", number: 2 },
    { label: "Add-ons", number: 3 },
    { label: "Summary", number: 4 },
  ];

  return (
    <aside className="sidebar">
      {steps.map(({ label, number }) => {
        const isActive = step === number;
        return (
          <div
            key={number}
            className={`sidebar-step ${isActive ? "active" : ""}`}
          >
            <div className={`step-number ${isActive ? "active-number" : ""}`}>
              {number}
            </div>
            <div className="step-text">
              <div className="step-title">Step {number}</div>
              <div className="step-label">{label}</div>
            </div>
          </div>
        );
      })}
    </aside>
  );
}
