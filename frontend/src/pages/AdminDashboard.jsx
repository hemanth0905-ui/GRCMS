import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import API from "../api/axios";

export default function AdminDashboard() {

  const [stats, setStats] = useState({
    total_rules: 0,
    total_users: 0,
    pending: 0,
    completed: 0,
    violations: 0,
  });

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    try {

      const dashboard = await API.get("/analytics/dashboard");
      setStats(dashboard.data);

      try {
        const audit = await API.get("/audit");
        setActivities(audit.data.slice(0, 5));
      } catch {
        setActivities([]);
      }

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Sidebar />

      <div className="ml-64 min-h-screen bg-slate-100 p-8">

        <h1 className="text-4xl font-bold mb-8">
          Admin Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-gray-500">Total Rules</h2>
            <p className="text-4xl font-bold mt-2">
              {stats.total_rules}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-gray-500">Users</h2>
            <p className="text-4xl font-bold mt-2">
              {stats.total_users}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-gray-500">Pending</h2>
            <p className="text-4xl font-bold text-orange-600 mt-2">
              {stats.pending}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-gray-500">Completed</h2>
            <p className="text-4xl font-bold text-green-600 mt-2">
              {stats.completed}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-gray-500">Violations</h2>
            <p className="text-4xl font-bold text-red-600 mt-2">
              {stats.violations}
            </p>
          </div>

        </div>

        <div className="mt-10 bg-white rounded-xl shadow p-6">

          <h2 className="text-2xl font-semibold mb-5">
            Recent Activities
          </h2>

          <table className="w-full">

            <thead>
              <tr className="bg-slate-200">
                <th className="p-3 text-left">Activity</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>

              {activities.length > 0 ? (
                activities.map((activity) => (
                  <tr key={activity.id} className="border-b">

                    <td className="p-3">
                      {activity.action || activity.activity || "Activity"}
                    </td>

                    <td>
                      {activity.created_at
                        ? new Date(activity.created_at).toLocaleDateString()
                        : "-"}
                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2" className="text-center p-5 text-gray-500">
                    No recent activities
                  </td>
                </tr>
              )}

            </tbody>

          </table>

        </div>

      </div>
    </>
  );
}