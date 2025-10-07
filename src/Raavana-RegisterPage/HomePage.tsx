import { useAuth } from "@workos-inc/authkit-react";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <div>
      <h1>Welcome, {user?.firstName || user?.email}</h1>
      <p>You have successfully signed up.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
