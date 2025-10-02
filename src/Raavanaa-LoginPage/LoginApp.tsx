import { AuthKitProvider } from '@workos-inc/authkit-react';
import { LoginButton } from '../Raavanaa-LoginPage/LoginButton';

export const LoginApp =()=> {
  return (
     <div>
        <AuthKitProvider clientId="client_01K54E5FHK9CE850VVJ3X864X7">
        <LoginButton/>
        </AuthKitProvider>
      </div>
  );
};

