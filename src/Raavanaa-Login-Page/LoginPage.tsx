import * as React from "react";
import { useAuth } from "@workos-inc/authkit-react";

export const LoginPage = () => {
  const { isLoading, user, signIn, signOut } = useAuth();

 
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (!user) {
    return (
      <div>
       
        <button
          onClick={() => {
            signIn();
          }}
        >
          Login
        </button>
      </div>
    );
  }

 
  return (
    <div>
      <p>You have successfully Logined.</p>
      <button
        onClick={() => signOut()}
  >
        Log Out
      </button>
    </div>
  );
}