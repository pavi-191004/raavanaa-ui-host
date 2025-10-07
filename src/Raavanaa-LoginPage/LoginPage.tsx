import * as React from "react";
import { useAuth } from "@workos-inc/authkit-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const LoginPage = () => {
  const { user, isLoading, signIn } = useAuth();
  const navigate = useNavigate();

  
  useEffect(() => {
    if (!isLoading && user) {
      navigate("/LogoutPage");
    }
  }, [user, isLoading, navigate]);

  const handleLogin = () => {
    signIn();
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div style={{display: "flex", justifyContent: "center",  alignItems: "center", height: "100vh",width: "100vw"}}>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
