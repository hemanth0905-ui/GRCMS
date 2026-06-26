import { useEffect, useState } from "react";
import API from "../api/axios";
import Sidebar from "../components/Sidebar";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function Analytics() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    loadAnalytics();
  }, []);

  async function loadAnalytics() {
    try {
      const res = await API.get("/analytics/dashboard");
      setStats(res.data);
    } catch {
      // Demo data if backend is empty
      setStats([
        { department: "IT", compliance: 90 },
        { department: "HR", compliance: 80 },
        { department: "Finance", compliance: 70 },
        { department: "Legal", compliance: 95 },
      ]);
    }
  }

  return (
    <>
      <Sidebar />

      <div className="ml-64 p-8 bg-slate-100 min-h-screen">

        <h1 className="text-4xl font-bold mb-8">
          Analytics Dashboard
        </h1>

        <div className="grid md:grid-cols-4 gap-6 mb-8">

          <div className="bg-white rounded-xl shadow p-6">
            <h2>Total Compliance</h2>
            <p className="text-4xl font-bold text-blue-600">87%</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2>Pending</h2>
            <p className="text-4xl font-bold text-orange-600">12</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2>Completed</h2>
            <p className="text-4xl font-bold text-green-600">48</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2>Departments</h2>
            <p className="text-4xl font-bold">4</p>
          </div>

        </div>

        <div className="bg-white rounded-xl shadow p-6">

          <h2 className="text-2xl font-bold mb-5">
            Department Compliance
          </h2>

          <ResponsiveContainer width="100%" height={400}>

            <BarChart data={stats}>

              <CartesianGrid strokeDasharray="3 3"/>

              <XAxis dataKey="department"/>

              <YAxis/>

              <Tooltip/>

              <Bar
                dataKey="compliance"
                fill="#2563eb"
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>

    </>
  );
}