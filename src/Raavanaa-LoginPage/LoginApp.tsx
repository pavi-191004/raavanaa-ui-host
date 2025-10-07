import { AuthKitProvider } from '@workos-inc/authkit-react';
import  { LoginPage} from '../Raavanaa-LoginPage/LoginPage';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import { LogoutPage } from './LogoutPage';

export const LoginApp =()=> {
  return (
     <div>
        <AuthKitProvider clientId="client_01K54E5FHK9CE850VVJ3X864X7">
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path='/logoutPage' element={<LogoutPage/>}/>
        </Routes>
        </BrowserRouter>
        </AuthKitProvider>
      </div>
  );
};

