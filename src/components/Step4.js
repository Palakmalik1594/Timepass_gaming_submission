// src/components/Step4.js
export default function Step4({ formData, nextStep, prevStep }) {
  // Prices for plans
  const planPrices = {
    Arcade: { monthly: 9, yearly: 90 },    // yearly = monthly * 10
    Advanced: { monthly: 12, yearly: 120 },
    Pro: { monthly: 15, yearly: 150 },
  };

  // Prices for add-ons
  const addonPrices = { 
    "Online service": { monthly: 1, yearly: 10 },
    "Larger storage": { monthly: 2, yearly: 20 },
    "Customizable Profile": { monthly: 2, yearly: 20 }
  };

  const billing = formData.billing; // 'monthly' or 'yearly'

  const planPrice = planPrices[formData.plan]?.[billing] || 0;

  const addonsTotal = formData.addons.reduce(
    (sum, a) => sum + (addonPrices[a]?.[billing] || 0),
    0
  );

  const total = planPrice + addonsTotal;

  return (
    <div className="step4-container">
      <h2 className="step-title">Finishing up</h2>
      <p className="step-subtitle">Double-check everything looks OK before confirming.</p>

      <div className="summary-box">
        {/* Plan Section */}
        <div className="summary-plan">
          <div>
            <h4 className="plan-name">
              {formData.plan} ({billing})
            </h4>
            <button className="change-btn" onClick={prevStep}>Change</button>
          </div>
          <span className="plan-price">
            ${planPrice}/{billing === "monthly" ? "mo" : "yr"}
          </span>
        </div>

        <hr className="divider" />

        {/* Add-ons Section */}
        <div className="addons-summary">
          {formData.addons.length > 0 ? (
            formData.addons.map((a) => (
              <div key={a} className="addon-row">
                <span className="addon-name">{a}</span>
                <span className="addon-price">
                  +${addonPrices[a][billing]}/{billing === "monthly" ? "mo" : "yr"}
                </span>
              </div>
            ))
          ) : (
            <p className="no-addon">No add-ons selected</p>
          )}
        </div>
      </div>

      {/* Total */}
      <div className="total-box">
        <span>Total (per {billing === "monthly" ? "month" : "year"})</span>
        <strong className="total-price">
          ${total}/{billing === "monthly" ? "mo" : "yr"}
        </strong>
      </div>

      {/* Navigation */}
      <div className="step-navigation">
        <button className="back-btn" onClick={prevStep}>Go Back</button>
        <button className="confirm-btn" onClick={nextStep}>Confirm</button>
      </div>
    </div>
  );
}
