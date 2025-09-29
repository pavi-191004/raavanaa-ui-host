import * as React from "react";
import { useAuth } from "@workos-inc/authkit-react";

export const RegisterButton = () => {
  const { isLoading, user, signUp, signOut } = useAuth();

  
  const saveUserToLocalStorage = (user: any) => {
    if (!user) return;

    const signupData = {
      email: user.email,
      firstName: user.firstName,
      lastName:user.lastName,
      id: user.id,
      time: new Date().toISOString(), 
    };

    localStorage.setItem("Auth_data", JSON.stringify(signupData));
    console.log("User stored in localStorage:", signupData);
  };

  
  React.useEffect(() => {
    saveUserToLocalStorage(user);
  }, [user]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return (
      <div>
        <button onClick={() => signUp()}>
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
        onClick={() => {
          signOut();
          localStorage.removeItem("Auth_data"); 
        }}
      >
        Sign Out
      </button>
    </div>
  );
};
