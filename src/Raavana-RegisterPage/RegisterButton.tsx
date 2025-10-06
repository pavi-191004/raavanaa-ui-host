import * as React from "react";
import { useAuth } from "@workos-inc/authkit-react";
import { Loading } from "./Loading";  

type AuthUser = {
  email: string;
  firstName?: string;
  lastName?: string;
  id: string;
};

const saveUserToLocalStorage = (user: AuthUser | null) => {
  if (!user || !user.email || !user.id) {
   
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

};

export const RegisterButton: React.FC = () => {
  const { isLoading, user, signUp, signOut } = useAuth();

  React.useEffect(() => {
    if (user) {
      saveUserToLocalStorage(user as AuthUser);
    }
  }, [user]);

 
  const handleSignOut = () => {
    signOut();
    localStorage.removeItem("Auth_data");
  };

  if (isLoading) {
    return <Loading />; 
  }

  if (!user) {
    return (
      <div>
        <button onClick={() => signUp()}>Register</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Welcome, {user.firstName || user.email}</h2>
      <p>You have successfully signed up.</p>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};
