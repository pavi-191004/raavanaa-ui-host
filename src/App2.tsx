import { AuthKitProvider } from '@workos-inc/authkit-react';
import RegisterPage from './Raavana-RegisterPage/RegisterPage';


export const App2 = () => {

    return(
        <div>
             <AuthKitProvider
      clientId="client_01K54E5FHK9CE850VVJ3X864X7"
     >
      <RegisterPage />
    </AuthKitProvider>
        </div>
    )
}