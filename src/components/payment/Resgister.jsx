import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [paymentVerified, setPaymentVerified] = useState(false);

  useEffect(() => {
    const paymentSuccess = sessionStorage.getItem("paymentSuccess");

    if (paymentSuccess === "true") {
      setPaymentVerified(true);
    } else {
      navigate("/"); // Redirect if no payment detected
    }
  }, [navigate]);

  return paymentVerified ? (
    <div>
      <h2>Complete Your Registration</h2>
      
    </div>
  ) : (
    <div>Redirecting...</div>
  );
};

export default Register;
