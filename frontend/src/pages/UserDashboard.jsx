import Sidebar from "../components/Sidebar";

export default function UserDashboard() {
  const tasks = [
    {
      id: 1,
      rule: "Security Awareness Training",
      priority: "High",
      deadline: "30-06-2026",
      status: "Pending",
    },
    {
      id: 2,
      rule: "Password Policy",
      priority: "Medium",
      deadline: "05-07-2026",
      status: "Completed",
    },
    {
      id: 3,
      rule: "ISO 27001 Audit",
      priority: "High",
      deadline: "15-07-2026",
      status: "Pending",
    },
  ];

  return (
    <>
      <Sidebar />

      <div className="ml-64 min-h-screen bg-slate-100 p-8">

        <h1 className="text-4xl font-bold mb-8">
          User Dashboard
        </h1>

        <div className="grid md:grid-cols-4 gap-6 mb-10">

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-gray-500">Assigned Rules</h2>
            <p className="text-4xl font-bold mt-2">12</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-gray-500">Completed</h2>
            <p className="text-4xl font-bold text-green-600 mt-2">8</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-gray-500">Pending</h2>
            <p className="text-4xl font-bold text-orange-600 mt-2">4</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-gray-500">Compliance</h2>
            <p className="text-4xl font-bold text-blue-600 mt-2">67%</p>
          </div>

        </div>

        <div className="bg-white rounded-xl shadow p-6">

          <h2 className="text-2xl font-semibold mb-4">
            My Tasks
          </h2>

          <table className="w-full border-collapse">

            <thead>

              <tr className="bg-slate-200">

                <th className="p-3 text-left">Rule</th>

                <th className="p-3">Priority</th>

                <th className="p-3">Deadline</th>

                <th className="p-3">Status</th>

              </tr>

            </thead>

            <tbody>

              {tasks.map((task) => (

                <tr key={task.id} className="border-b">

                  <td className="p-3">{task.rule}</td>

                  <td className="text-center">{task.priority}</td>

                  <td className="text-center">{task.deadline}</td>

                  <td className="text-center">

                    <span
                      className={`px-3 py-1 rounded-full text-white ${
                        task.status === "Completed"
                          ? "bg-green-500"
                          : "bg-orange-500"
                      }`}
                    >
                      {task.status}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>
    </>
  );
}