import { useAuth } from "@workos-inc/authkit-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const SignInToStaffStudentPortal = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    signIn().then(() => {
      const role = localStorage.getItem("selectedRole");

      if (role === "student") {
        navigate("/studentportal");
      } else if (role === "staff") {
        navigate("/staffportal");
      } else {
        navigate("/");
      }
    });
  }, [signIn, navigate]);

  return (
    <div>
      <p>Redirecting to sign in...</p>
    </div>
  );
};
