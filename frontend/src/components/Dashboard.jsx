import { useLocation, useNavigate } from "react-router-dom";
import UserDash from "./UserDash";
import AdminDash from "./AdminDash";

const Dashboard = () => {
  const location = useLocation();
  const role = location.state?.role;
  const navigate = useNavigate();

  if (role === "") navigate("/");
  if (role === "user") return <UserDash />;
  if (role === "vendor") return <VendorDash />;
  if (role === "admin") return <AdminDash />;
};

export default Dashboard;
