import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ForgotPasswordButton=()=>{

const redirectPage=()=>{
    window.location.href="https://shining-palm-12-staging.authkit.app/reset-password";
}
return(
        <div className="d-flex justify-content-center align-items-center ">
          <Button variant="dark" onClick={redirectPage}>Submit</Button>
    </div>
)
};
