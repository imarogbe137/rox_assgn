import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import UserDash from "./components/UserDash";
import AdminDash from "./components/AdminDash";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/user" element={<UserDash />} />
        <Route path="/admin" element={<AdminDash />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
