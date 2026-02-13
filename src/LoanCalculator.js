// LoanCalculator.js
import React, { useState } from "react";

function LoanCalculator() {
  const [startingPrincipal, setStartingPrincipal] = useState("");
  const [yearlyInterestRate, setYearlyInterestRate] = useState("");
  const [monthlyPayment, setMOnthlyPayment] = useState("");
  const [escrowPayment, setEscrowPayment] = useState("");
  const [startDate, setStartDate] = useState("");

  const isValid = startingPrincipal && yearlyInterestRate && monthlyPayment && escrowPayment && startDate;

  const handleSubmit = () => {
    const payload = {
      startingPrincipal: Math.round(parseFloat(startingPrincipal) * 100), // convert to cents
      yearlyInterestRate, // keep as string
      monthlyPayment: Math.round(parseFloat(monthlyPayment) * 100),
      escrowPayment: Math.round(parseFloat(escrowPayment) * 100),
      startDate: startDate
    };
    console.log("Loan payload:", payload);
    fetch("/app/loans/calculate", { method: "POST", body: JSON.stringify(payload) })
  };

  return (
    <div>
      <h2>Loan Calculator</h2>
      <div>
        <input type="number" step="1000" placeholder="Starting Principal" value={startingPrincipal} onChange={(e) => setStartingPrincipal(e.target.value)} />
      </div>
      <div>
        <input type="text" placeholder="Interest Rate (APR)" value={yearlyInterestRate} onChange={(e) => setYearlyInterestRate(e.target.value)} />
      </div>
      <div>
        <input type="number" placeholder="Monthly Payment" value={monthlyPayment} onChange={(e) => setMOnthlyPayment(e.target.value)} />
      </div>
      <div>
        <input type="number" placeholder="Other Payments" value={escrowPayment} onChange={(e) => setEscrowPayment(e.target.value)} />
      </div>
      <div>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      </div>
      
      <button disabled={!isValid} onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default LoanCalculator;