import * as React from "react";
import { useAuth } from "@workos-inc/authkit-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const RegisterButton = () => {
  const { user, isLoading, signUp } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && user) {
      navigate("/homepage");
    }
  }, [user, isLoading, navigate]);

  const handleRegister = () => {
    signUp();
  };

  return (
    <div>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};
