import { useState } from "react";
import API from "../api/axios";
import Sidebar from "../components/Sidebar";

export default function Upload() {
  const [file, setFile] = useState(null);

  async function handleUpload(e) {
    e.preventDefault();

    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await API.post("/uploads", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert(res.data.message);
    } catch (err) {
      console.error(err);
      alert("Upload Failed");
    }
  }

  return (
    <>
      <Sidebar />

      <div className="ml-64 p-8 min-h-screen bg-slate-100">
        <h1 className="text-3xl font-bold mb-8">
          Upload Compliance Evidence
        </h1>

        <div className="bg-white rounded-xl shadow p-8 w-[500px]">

          <form onSubmit={handleUpload}>

            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="mb-6"
            />

            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">
              Upload
            </button>

          </form>

        </div>
      </div>
    </>
  );
}