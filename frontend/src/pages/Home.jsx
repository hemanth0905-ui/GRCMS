import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaClipboardCheck,
  FaTasks,
  FaChartLine,
} from "react-icons/fa";

export default function Home() {
  const features = [
    {
      icon: <FaShieldAlt size={40} />,
      title: "Governance",
      description:
        "Create and manage enterprise compliance policies and governance rules.",
    },
    {
      icon: <FaTasks size={40} />,
      title: "Task Assignment",
      description:
        "Assign compliance tasks to departments and employees with deadlines.",
    },
    {
      icon: <FaClipboardCheck size={40} />,
      title: "Audit Logs",
      description:
        "Track every activity performed within the system for accountability.",
    },
    {
      icon: <FaChartLine size={40} />,
      title: "Analytics",
      description:
        "Visualize compliance status with real-time reports and dashboards.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Navbar */}
      <nav className="bg-white shadow-md px-10 py-5 flex justify-between items-center sticky top-0 z-50">

        <h1 className="text-3xl font-bold text-blue-700">
          GRCMS
        </h1>

        <div className="flex gap-8 items-center">

          <a href="#features" className="hover:text-blue-600">
            Features
          </a>

          <a href="#about" className="hover:text-blue-600">
            About
          </a>

          <Link
            to="/login"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="border border-blue-600 text-blue-700 px-5 py-2 rounded-lg hover:bg-blue-50"
          >
            Register
          </Link>

        </div>

      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-10 py-20 flex flex-col lg:flex-row items-center justify-between gap-10">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >

          <h1 className="text-6xl font-bold leading-tight">

            Governance &

            <br />

            Compliance

            <span className="text-blue-700">
              {" "}Management System
            </span>

          </h1>

          <p className="mt-8 text-xl text-gray-600">

            A centralized enterprise platform to manage governance,
            compliance rules, assignments, reports, audit logs,
            notifications and analytics.

          </p>

          <div className="mt-10 flex gap-5">

            <Link
              to="/register"
              className="bg-blue-600 text-white px-7 py-4 rounded-xl hover:bg-blue-700"
            >
              Get Started
            </Link>

            <Link
              to="/login"
              className="border border-blue-600 text-blue-700 px-7 py-4 rounded-xl hover:bg-blue-50"
            >
              Login
            </Link>

          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center"
        >

          <img
            src="https://placehold.co/600x450?text=GRCMS"
            alt="GRCMS"
            className="rounded-3xl shadow-xl"
          />

        </motion.div>

      </section>

      {/* Features */}
      <section
        id="features"
        className="max-w-7xl mx-auto px-10 py-20"
      >

        <h2 className="text-4xl font-bold text-center mb-16">
          Enterprise Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => (

            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-3xl shadow-lg"
            >

              <div className="text-blue-600">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mt-5">
                {feature.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {feature.description}
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* About */}
      <section
        id="about"
        className="bg-white py-20"
      >

        <div className="max-w-6xl mx-auto text-center px-10">

          <h2 className="text-4xl font-bold mb-8">
            About GRCMS
          </h2>

          <p className="text-lg text-gray-600 leading-8">

            Governance & Compliance Management System (GRCMS) helps
            organizations automate compliance management by providing
            centralized rule management, employee assignments,
            compliance tracking, audit logging, reporting,
            analytics, and document uploads.

          </p>

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white py-8 mt-10">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-10">

          <h2 className="text-2xl font-bold">
            GRCMS
          </h2>

          <div className="flex gap-6 mt-4 md:mt-0">

            <span>Privacy Policy</span>

            <span>Terms</span>

            <span>Help Center</span>

          </div>

        </div>

      </footer>

    </div>
  );
}