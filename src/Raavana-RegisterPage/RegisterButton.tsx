import * as React from "react";
import { useAuth } from "@workos-inc/authkit-react";


type AuthUser = {
  email: string;
  firstName?: string;
  lastName?: string;
  id: string;
};


const saveUserToLocalStorage = (user: AuthUser | null) => {
  if (!user || !user.email || !user.id) {
    console.warn("Invalid user data");
    return;
  }

  const signupData = {
    email: user.email,
    firstName: user.firstName ?? "",
    lastName: user.lastName ?? "",
    id: user.id,
    time: new Date().toISOString(),
  };

  localStorage.setItem("Auth_data", JSON.stringify(signupData));
  console.log("User stored in localStorage:", signupData);
};

export const RegisterButton: React.FC = () => {
  const { isLoading, user, signUp, signOut } = useAuth();

  
  React.useEffect(() => {
    if (user) {
      
      saveUserToLocalStorage(user as AuthUser);
    }
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
