import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthKitProvider } from "@workos-inc/authkit-react";
import { StudentStaffSelectionCardPage } from "./StudentStaffSelectionCardPage";
import { StudentPortal } from "./StudentPortal";
import { StaffPortal } from "./StaffPortal";
import { SignInToStaffStudentPortal } from "./SignInToStaffStudentPortal";

export const RoutingPages = () => {
  return (
    <div>
      <AuthKitProvider clientId="client_01K54E5FHK9CE850VVJ3X864X7">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StudentStaffSelectionCardPage />} />
            <Route path="/studentportal" element={<StudentPortal />} />
            <Route path="/staffportal" element={<StaffPortal />} />
            <Route path="/signin" element={<SignInToStaffStudentPortal/>} />
          </Routes>
        </BrowserRouter>
      </AuthKitProvider>
    </div>
  );
};
