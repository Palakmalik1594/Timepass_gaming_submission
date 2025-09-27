// src/components/Step3.js
export default function Step3({ formData, setFormData, nextStep, prevStep }) {
  const addons = [
    { name: "Online service", desc: "Access to multiplayer games", monthly: 1, yearly: 10 },
    { name: "Larger storage", desc: "Extra 1TB of cloud save", monthly: 2, yearly: 20 },
    { name: "Customizable Profile", desc: "Custom theme on your profile", monthly: 2, yearly: 20 },
  ];

  const toggleAddon = (name) => {
    let newAddons = [...formData.addons];
    if (newAddons.includes(name)) {
      newAddons = newAddons.filter((a) => a !== name);
    } else {
      newAddons.push(name);
    }
    setFormData({ ...formData, addons: newAddons });
  };

  return (
    <div className="step3-container">
      <h2 className="step-title">Pick add-ons</h2>
      <p className="step-subtitle">Add-ons help enhance your gaming experience.</p>

      <div className="addons-list">
        {addons.map((a) => {
          const selected = formData.addons.includes(a.name);
          // Choose price based on billing selection
          const price =
            formData.billing === "monthly" ? a.monthly : a.yearly;
          const period = formData.billing === "monthly" ? "mo" : "yr";

          return (
            <div
              key={a.name}
              className={`addon-card ${selected ? "selected" : ""}`}
              onClick={() => toggleAddon(a.name)}
            >
              <label className="addon-label">
                <input
                  type="checkbox"
                  checked={selected}
                  onChange={() => toggleAddon(a.name)}
                />
                <div className="addon-text">
                  <h4 className="addon-name">{a.name}</h4>
                  <p className="addon-desc">{a.desc}</p>
                </div>
              </label>
              <span className="addon-price">+${price}/{period}</span>
            </div>
          );
        })}
      </div>

      <div className="step-navigation">
        <button className="back-btn" onClick={prevStep}>Go Back</button>
        <button className="next-btn" onClick={nextStep}>Next Step</button>
      </div>
    </div>
  );
}
