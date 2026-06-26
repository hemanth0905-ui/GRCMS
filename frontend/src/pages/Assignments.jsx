import { useEffect, useState } from "react";
import API from "../api/axios";
import Sidebar from "../components/Sidebar";

export default function Assignments() {

  const [assignments,setAssignments]=useState([]);

  async function loadAssignments(){

    try{

      const res=await API.get("/assignments");

      setAssignments(res.data);

    }catch(err){

      console.log(err);

    }

  }

  useEffect(()=>{

    loadAssignments();

  },[]);

  return(

    <>

      <Sidebar/>

      <div className="ml-64 min-h-screen bg-slate-100 p-8">

        <h1 className="text-4xl font-bold mb-8">
          Assignment Management
        </h1>

        <div className="bg-white rounded-xl shadow">

          <table className="w-full">

            <thead className="bg-slate-200">

              <tr>

                <th className="p-3">Rule ID</th>

                <th>User ID</th>

                <th>Status</th>

                <th>Proof</th>

              </tr>

            </thead>

            <tbody>

              {assignments.map((item)=>(

                <tr key={item.id} className="border-b">

                  <td className="p-3">{item.rule_id}</td>

                  <td>{item.user_id}</td>

                  <td>{item.status}</td>

                  <td>{item.proof_file || "Not Uploaded"}</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </>

  );

}