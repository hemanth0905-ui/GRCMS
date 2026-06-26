import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import API from "../api/axios";

export default function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    async function loadUsers() {
        const res = await API.get("/users");
        setUsers(res.data);
    }

    async function deleteUser(id) {

        if (!window.confirm("Delete this user?"))
            return;

        await API.delete(`/users/${id}`);

        loadUsers();
    }

    return (

        <>
            <Sidebar />

            <div className="ml-64 p-8 bg-slate-100 min-h-screen">

                <h1 className="text-4xl font-bold mb-8">
                    Users
                </h1>

                <table className="w-full bg-white rounded-xl shadow">

                    <thead>

                        <tr className="bg-slate-200">

                            <th className="p-4">Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>

                        </tr>

                    </thead>

                    <tbody>

                        {users.map(user => (

                            <tr
                                key={user.id}
                                className="border-b"
                            >

                                <td className="p-4">
                                    {user.name}
                                </td>

                                <td>
                                    {user.email}
                                </td>

                                <td>
                                    {user.role}
                                </td>

                                <td>

                                    <button
                                        onClick={() => deleteUser(user.id)}
                                        className="bg-red-600 text-white px-4 py-2 rounded"
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </>

    );

}