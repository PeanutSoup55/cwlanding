import React from "react";

const PaymentButton = () => {
  const handleCheckout = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      const { url } = await response.json(); // Get Stripe Checkout URL
      window.location.href = url; // Redirect to Stripe
    } catch (error) {
      console.error("Error redirecting to Stripe:", error);
    }
  };

  return <button onClick={handleCheckout}>Pay Now</button>;
};

export default PaymentButton;
