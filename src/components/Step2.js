// Step2.js
import React from "react";
import arcadeImg from "../assets/icon-arcade.svg";
import advancedImg from "../assets/icon-advanced.svg";
import proImg from "../assets/icon-pro.svg";

export default function Step2({ formData, setFormData, nextStep, prevStep }) {
  const plans = [
    { name: "Arcade", price: 9, image: arcadeImg },
    { name: "Advanced", price: 12, image: advancedImg },
    { name: "Pro", price: 15, image: proImg },
  ];

  const handlePlanSelect = (plan) => {
    setFormData({ ...formData, plan });
  };

  return (
    <div className="step2-container">
      <h2 className="step-title">Select your plan</h2>
      <p className="step-subtitle">You have the option of monthly or yearly billing.</p>

      {/* Plans grid */}
      <div className="plans-grid">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`plan-card ${formData.plan === p.name ? "selected" : ""}`}
            onClick={() => handlePlanSelect(p.name)}
          >
            <div className="plan-icon">
              <img src={p.image} alt={p.name} />
            </div>
            <div className="plan-info">
              <h3>{p.name}</h3>
              <p>
                ${formData.billing === "monthly" ? p.price : p.price * 10}/
                {formData.billing === "monthly" ? "mo" : "yr"}
              </p>
              {formData.billing === "yearly" && (
                <span className="free-months">2 months free</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Billing toggle */}
      <div className="billing-toggle">
        <span className={formData.billing === "monthly" ? "active" : ""}>Monthly</span>
        <label className="switch">
          <input
            type="checkbox"
            checked={formData.billing === "yearly"}
            onChange={() =>
              setFormData({
                ...formData,
                billing: formData.billing === "monthly" ? "yearly" : "monthly",
              })
            }
          />
          <span className="slider round"></span>
        </label>
        <span className={formData.billing === "yearly" ? "active" : ""}>Yearly</span>
      </div>

      {/* Navigation buttons */}
      <div className="step-navigation">
        <button className="back-btn" onClick={prevStep}>
          Go Back
        </button>
        <button className="next-btn" onClick={nextStep}>
          Next Step
        </button>
      </div>
    </div>
  );
}
