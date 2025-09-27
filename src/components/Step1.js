import { useState } from "react";

export default function Step1({ formData, setFormData, nextStep }) {
  const [errors, setErrors] = useState({});

  const validate = () => {
    let e = {};
    if (!formData.name) e.name = "Name required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      e.email = "Valid email required";
    if (!formData.phone || !/^\d{10}$/.test(formData.phone))
      e.phone = "Valid 10-digit phone required";
    return e;
  };

  const handleNext = () => {
    const e = validate();
    if (Object.keys(e).length) setErrors(e);
    else nextStep();
  };

  return (
    <div className="step1-wrapper">
      <h2 className="step-title">Personal info</h2>
      <p className="step-subtitle">
        Please provide your name, email address, and phone number.
      </p>

      <form className="step1-form">
        {/* Name */}
        <label>
          Name
          <input
            type="text"
            placeholder="e.g. Stephen King"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={errors.name ? "error-input" : ""}
          />
        </label>
        {errors.name && <p className="error">{errors.name}</p>}

        {/* Email */}
        <label>
          Email Address
          <input
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className={errors.email ? "error-input" : ""}
          />
        </label>
        {errors.email && <p className="error">{errors.email}</p>}

        {/* Phone */}
        <label>
          Phone Number
          <input
            type="tel"
            placeholder="e.g. +1 234 567 890"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className={errors.phone ? "error-input" : ""}
          />
        </label>
        {errors.phone && <p className="error">{errors.phone}</p>}
      </form>

      {/* button OUTSIDE form so it can be placed at bottom */}
      <div className="step-navigation">
        <button type="button" onClick={handleNext} className="next-btn">
          Next Step
        </button>
      </div>
    </div>
  );
}
