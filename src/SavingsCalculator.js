// SavingsCalculator.js
import React, { useState } from "react";

function SavingsCalculator() {
  const [amount, setAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [duration, setDuration] = useState("");

  const isValid = amount && interestRate && duration;

  const handleSubmit = () => {
    const payload = {
      amount: Math.round(parseFloat(amount) * 100), // convert to cents
      interestRate,
      duration
    };
    console.log("Savings payload:", payload);
    // fetch("http://localhost:8080/savings", { method: "POST", body: JSON.stringify(payload) })
  };

  return (
    <div>
      <h2>Savings Calculator</h2>
      <input type="number" step="0.01" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <input type="text" placeholder="Interest Rate" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
      <input type="number" placeholder="Duration (months)" value={duration} onChange={(e) => setDuration(e.target.value)} />
      <button disabled={!isValid} onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default SavingsCalculator;