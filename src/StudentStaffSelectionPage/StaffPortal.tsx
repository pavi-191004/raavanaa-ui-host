import { useAuth } from "@workos-inc/authkit-react";
import { useNavigate } from "react-router-dom";

export const StaffPortal = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate("/", { replace: true });
  };

  return (
    <div>
      <h1>Welcome Staff</h1>
      <p>You are logged in as a staff member.</p>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};
