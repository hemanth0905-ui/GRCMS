import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaTasks,
  FaChartLine,
  FaClipboardCheck,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home() {
  const features = [
    {
      icon: <FaShieldAlt size={40} />,
      title: "Governance",
      desc: "Manage enterprise compliance rules efficiently.",
    },
    {
      icon: <FaTasks size={40} />,
      title: "Task Assignment",
      desc: "Assign compliance tasks to departments and users.",
    },
    {
      icon: <FaChartLine size={40} />,
      title: "Analytics",
      desc: "Monitor compliance with interactive dashboards.",
    },
    {
      icon: <FaClipboardCheck size={40} />,
      title: "Audit Logs",
      desc: "Track every activity performed inside the system.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Navbar */}

      <nav className="flex justify-between items-center px-10 py-5 bg-white shadow">

        <h1 className="text-3xl font-bold text-blue-700">
          GRCMS
        </h1>

        <div className="space-x-8 font-medium">

          <a href="#features">Features</a>

          <a href="#about">About</a>

          <Link
            to="/login"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="border px-5 py-2 rounded-lg"
          >
            Register
          </Link>

        </div>

      </nav>

      {/* Hero */}

      <section className="max-w-7xl mx-auto px-10 py-24 flex items-center justify-between">

        <motion.div

          initial={{ opacity:0,x:-80 }}

          animate={{ opacity:1,x:0 }}

          transition={{ duration:1 }}

        >

          <h1 className="text-6xl font-bold leading-tight">

            Governance &

            <br />

            Compliance

            <span className="text-blue-700">

              {" "}Management

            </span>

          </h1>

          <p className="mt-6 text-xl text-gray-600">

            Enterprise-grade Governance, Risk and Compliance

            platform for organizations.

          </p>

          <div className="mt-8 flex gap-5">

            <Link

              to="/register"

              className="bg-blue-600 text-white px-7 py-4 rounded-xl"

            >

              Get Started

            </Link>

            <Link

              to="/login"

              className="border border-blue-600 px-7 py-4 rounded-xl"

            >

              Login

            </Link>

          </div>

        </motion.div>

        <motion.img

          initial={{ opacity:0,x:80 }}

          animate={{ opacity:1,x:0 }}

          transition={{ duration:1 }}

          src="https://undraw.co/api/illustrations/security.svg"

          className="w-[500px]"

        />

      </section>

      {/* Features */}

      <section

        id="features"

        className="max-w-7xl mx-auto py-16"

      >

        <h2 className="text-4xl font-bold text-center mb-14">

          Platform Features

        </h2>

        <div className="grid grid-cols-4 gap-8">

          {features.map((item,index)=>(

            <motion.div

              key={index}

              whileHover={{ scale:1.05 }}

              className="bg-white p-8 rounded-3xl shadow-lg"

            >

              <div className="text-blue-700">

                {item.icon}

              </div>

              <h3 className="text-2xl font-bold mt-5">

                {item.title}

              </h3>

              <p className="mt-3 text-gray-600">

                {item.desc}

              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* Footer */}

      <footer className="bg-blue-700 text-white mt-20">

        <div className="max-w-7xl mx-auto py-10 flex justify-between">

          <h2 className="text-3xl font-bold">

            GRCMS

          </h2>

          <div>

            <p>Privacy Policy</p>

            <p>Terms</p>

            <p>Help Center</p>

          </div>

        </div>

      </footer>

    </div>
  );
}