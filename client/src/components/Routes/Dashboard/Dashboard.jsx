import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../../shared/contexts/auth.context";
import "./Dashboard.css";
import { Header } from "./Header";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      {user && (
        <div className="Dashboard Container">
          <div className="Dashboard-Inner">
            <Header />
          </div>
        </div>
      )}
      {!user && <Navigate replace to="/login" />}
    </>
  );
};

export default Dashboard;
