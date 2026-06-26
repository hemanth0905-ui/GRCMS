import { useEffect, useState } from "react";
import API from "../api/axios";
import Sidebar from "../components/Sidebar";

export default function AuditLogs() {

    const [logs, setLogs] = useState([]);

    useEffect(() => {
        loadLogs();
    }, []);

    async function loadLogs() {

        try {

            const res = await API.get("/audit");

            setLogs(res.data);

        } catch (err) {

            console.log(err);

        }

    }

    return (

        <>
            <Sidebar />

            <div className="ml-64 min-h-screen bg-slate-100 p-8">

                <h1 className="text-4xl font-bold mb-8">
                    Audit Logs
                </h1>

                <div className="bg-white rounded-xl shadow overflow-hidden">

                    <table className="w-full">

                        <thead className="bg-slate-200">

                            <tr>

                                <th className="p-4 text-left">ID</th>

                                <th>Action</th>

                                <th>User</th>

                                <th>Timestamp</th>

                            </tr>

                        </thead>

                        <tbody>

                            {logs.length === 0 ? (

                                <tr>

                                    <td
                                        colSpan="4"
                                        className="text-center py-8"
                                    >
                                        No Audit Logs Found
                                    </td>

                                </tr>

                            ) : (

                                logs.map((log) => (

                                    <tr
                                        key={log.id}
                                        className="border-b hover:bg-slate-50"
                                    >

                                        <td className="p-4">
                                            {log.id}
                                        </td>

                                        <td>
                                            {log.action}
                                        </td>

                                        <td>
                                            {log.performed_by}
                                        </td>

                                        <td>
                                            {log.timestamp}
                                        </td>

                                    </tr>

                                ))

                            )}

                        </tbody>

                    </table>

                </div>

            </div>

        </>

    );

}