import { useAuth } from "@workos-inc/authkit-react";
import { useNavigate } from "react-router-dom";

export const LogoutPage = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate("/"); 
  };

  return (
    <div style={{display: "flex", justifyContent: "center",alignItems: "center", height: "100vh",width: "100vw",flexDirection: "column"}}>
      <p>You are successfully logged in.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
