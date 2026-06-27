import Upload from "./pages/Upload";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import Rules from "./pages/Rules";
import Users from "./pages/Users";
import Assignments from "./pages/Assignments";
import Notifications from "./pages/Notifications";
import Reports from "./pages/Reports";
import Analytics from "./pages/Analytics";
import AuditLogs from "./pages/AuditLogs";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/dashboard" element={<UserDashboard />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="/users" element={<Users />} />
      <Route path="/assignments" element={<Assignments/>}/>
      <Route path="/notifications" element={<Notifications/>}/>
      <Route path="/reports" element={<Reports/>}/>
      <Route path="/upload" element={<Upload />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/audit" element={<AuditLogs />} />
      <Route path="/settings" element={<Profile/>}/>
    
    </Routes>
  );
}

export default App;