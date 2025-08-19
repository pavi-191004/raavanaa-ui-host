import React from "react";
import "./App.css";
const RemoteApp = React.lazy(() => import("UIComponents/App"));

const Button = React.lazy(() => import("UIComponents/Button"));

function App() {
  return (
    <div>
      <h1>Welcome to Host Module</h1>
      <React.Suspense fallback={<div>Loading...</div>}>
        <RemoteApp />
        <Button />
      </React.Suspense>
    </div>
  );
}

export default App;
