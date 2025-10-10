import { useAuth } from "@workos-inc/authkit-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const SignInToStaffStudentPortal = () => {
  const { user, signIn, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading) return;

    const stored = JSON.parse(localStorage.getItem("selectedRole") || "[]");
    const latest = stored[stored.length - 1]?.type;

    if (user) {
      if (latest === "student") navigate("/studentportal", { replace: true });
      else if (latest === "staff") navigate("/staffportal", { replace: true });
      else navigate("/", { replace: true });
      return;
    }

    if (!user) {
      const returnTo =
        latest === "student"
          ? "/studentportal"
          : latest === "staff"
          ? "/staffportal"
          : "/";

      signIn({ state: { returnTo } });
    }
  }, [user, isLoading, signIn, navigate]);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <p>Redirecting to WorkOS sign-in…</p>
    </div>
  );
};
