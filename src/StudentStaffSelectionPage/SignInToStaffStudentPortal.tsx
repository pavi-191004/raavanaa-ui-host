import { useAuth } from "@workos-inc/authkit-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const SignInToStaffStudentPortal = () => {
  const {user,signIn, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && user) {
    
      const stored = JSON.parse(localStorage.getItem("selectedRole") || "[]");
      const latest = stored[stored.length - 1]?.type;

      

      if (latest === "student") {
        navigate("/studentportal");
      } else if (latest === "staff") {
        navigate("/staffportal");
      } else {
        navigate("/");
      }
    }

     if (!isLoading && !user) {
      signIn();
      return;
    }
  

    
  }, [signIn, navigate,isLoading]);

  return (
    <div>
      <p>Redirecting to sign in...</p>
    </div>
  );
};
