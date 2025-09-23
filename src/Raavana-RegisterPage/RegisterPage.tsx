import * as React from "react";
import { useAuth } from "@workos-inc/authkit-react";

export const RegisterPage = () => {
  const { isLoading, user, signUp, signOut } = useAuth();

 
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (!user) {
    return (
      <div>
       
        <button
          onClick={() => {
            signUp();
          }}
        >
          Register
        </button>
      </div>
    );
  }

 
  return (
    <div>
      <h2>Welcome, {user.firstName || user.email}</h2>
      <p>You have successfully signed up.</p>
      <button
        onClick={() => signOut()}
  >
        Sign Out
      </button>
    </div>
  );
}
