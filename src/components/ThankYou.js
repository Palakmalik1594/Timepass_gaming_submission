// src/components/ThankYou.js
import tick from '../assets/icon-thank-you.svg'; // make sure this path is correct
import '../App.css';

export default function ThankYou() {
  return (
    <div className="thank-you-container">
      <img src={tick} alt="Thank You Tick" className="thank-you-tick" />
      <h2 className="thank-you-heading">Thank You!</h2>
      <p className="thank-you-subtext">
        Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
      </p>
    </div>
  );
}
