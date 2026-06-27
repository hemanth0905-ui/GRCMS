import { Link } from "react-router-dom";

export default function Sidebar() {

  return (

    <div className="fixed left-0 top-0 w-64 h-screen bg-slate-900 text-white">

      <h1 className="text-3xl font-bold p-6 border-b border-slate-700">
        GRCMS
      </h1>

      <nav className="mt-6 flex flex-col">

        <Link className="px-6 py-4 hover:bg-slate-700" to="/admin">
          Dashboard
        </Link>

        <Link className="px-6 py-4 hover:bg-slate-700" to="/rules">
          Rules
        </Link>

        <Link className="px-6 py-4 hover:bg-slate-700" to="/users">
          Users
        </Link>

        <Link className="px-6 py-4 hover:bg-slate-700" to="/assignments">
          Assignments
        </Link>

        <Link className="px-6 py-4 hover:bg-slate-700" to="/analytics">
          Analytics
        </Link>

        <Link className="px-6 py-4 hover:bg-slate-700" to="/reports">
          Reports
        </Link>

        <Link className="px-6 py-4 hover:bg-slate-700" to="/notifications">
          Notifications
        </Link>

        <Link className="px-6 py-4 hover:bg-slate-700" to="/audit">
          Audit Logs
        </Link>

        <Link className="px-6 py-4 hover:bg-slate-700" to="/settings">
          Profile
        </Link>

      </nav>

    </div>

  );

}
<Link to="/upload">
  📤 Upload Evidence
</Link>