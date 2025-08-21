import React from "react";
import "./App.css";
const RemoteApp = React.lazy(() => import("UIComponents/App"));

const Button = React.lazy(() => import("UIComponents/Button"));

const AdminApp = React.lazy(()=> import ("admin_fe/App"));

const StudentApp = React.lazy(()=> import("ui_student/App"));

const RecruiterApp = React.lazy(()=> import("raavana_ui_recruiter/App"));

function App() {
  return (
    <div>
      <h1>Welcome to Host Module</h1>
      <React.Suspense fallback={<div>Loading...</div>}>
        <RemoteApp />
        <Button />
        <AdminApp />
        <StudentApp />
        <RecruiterApp />
      </React.Suspense>
    </div>
  );
}

export default App;
