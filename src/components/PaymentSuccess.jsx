import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const sessionId = searchParams.get("session_id");

    if (sessionId) {
      sessionStorage.setItem("paymentSuccess", "true"); // Store payment flag
      navigate("/register"); // Redirect to registration page
    }
  }, [searchParams, navigate]);

  return <div>Processing payment...</div>;
};

export default PaymentSuccess;
