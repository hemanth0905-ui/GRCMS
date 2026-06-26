import { useEffect, useState } from "react";
import API from "../api/axios";
import Sidebar from "../components/Sidebar";

export default function Rules() {
  const [rules, setRules] = useState([]);

  const [form, setForm] = useState({
    title: "",
    description: "",
    department: "",
    priority: "",
    deadline: "",
  });

  useEffect(() => {
    loadRules();
  }, []);

  async function loadRules() {
    try {
      const res = await API.get("/rules");
      setRules(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  async function createRule(e) {
    e.preventDefault();

    try {
      await API.post("/rules/create", form);

      alert("Rule Created");

      setForm({
        title: "",
        description: "",
        department: "",
        priority: "",
        deadline: "",
      });

      loadRules();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <Sidebar />

      <div className="ml-64 p-8 bg-slate-100 min-h-screen">

        <h1 className="text-4xl font-bold mb-6">
          Rule Management
        </h1>

        <form
          onSubmit={createRule}
          className="bg-white p-6 rounded-xl shadow mb-8"
        >

          <div className="grid grid-cols-2 gap-4">

            <input
              className="border p-3 rounded"
              placeholder="Title"
              value={form.title}
              onChange={(e) =>
                setForm({ ...form, title: e.target.value })
              }
            />

            <input
              className="border p-3 rounded"
              placeholder="Department"
              value={form.department}
              onChange={(e) =>
                setForm({ ...form, department: e.target.value })
              }
            />

            <input
              className="border p-3 rounded"
              placeholder="Priority"
              value={form.priority}
              onChange={(e) =>
                setForm({ ...form, priority: e.target.value })
              }
            />

            <input
              type="date"
              className="border p-3 rounded"
              value={form.deadline}
              onChange={(e) =>
                setForm({ ...form, deadline: e.target.value })
              }
            />

          </div>

          <textarea
            className="border p-3 rounded w-full mt-4"
            placeholder="Description"
            value={form.description}
            onChange={(e) =>
              setForm({
                ...form,
                description: e.target.value,
              })
            }
          />

          <button
            className="bg-blue-600 text-white px-6 py-3 rounded mt-4"
          >
            Create Rule
          </button>

        </form>

        <div className="bg-white rounded-xl shadow">

          <table className="w-full">

            <thead className="bg-slate-200">

              <tr>

                <th className="p-3">Title</th>

                <th>Department</th>

                <th>Priority</th>

                <th>Deadline</th>

              </tr>

            </thead>

            <tbody>

              {rules.map((rule) => (

                <tr key={rule.id} className="border-b">

                  <td className="p-3">{rule.title}</td>

                  <td>{rule.department}</td>

                  <td>{rule.priority}</td>

                  <td>{rule.deadline}</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>
    </>
  );
}