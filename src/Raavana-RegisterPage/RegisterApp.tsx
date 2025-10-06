import { AuthKitProvider } from "@workos-inc/authkit-react";
import { RegisterButton } from "./RegisterButton";

export const RegisterApp = () => {
  return (
    <div>
      <AuthKitProvider clientId="client_01K54E5FHK9CE850VVJ3X864X7">
        <RegisterButton />
      </AuthKitProvider>
    </div>
  );
};
