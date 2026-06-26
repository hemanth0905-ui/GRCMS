import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

export default function Login() {

    const navigate = useNavigate();

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    async function login(e){

        e.preventDefault();

        try{

            const res = await API.post("/auth/login",{

                email,

                password

            });

            localStorage.setItem(
                "token",
                res.data.access_token
            );

            localStorage.setItem(
                "role",
                res.data.role
            );

            if(res.data.role==="admin"){

                navigate("/admin");

            }else{

                navigate("/dashboard");

            }

        }catch{

            alert("Invalid Credentials");

        }

    }

    return(

        <div className="flex justify-center items-center h-screen bg-slate-100">

            <form

            onSubmit={login}

            className="bg-white p-10 rounded-3xl shadow-xl w-[420px]">

                <h1 className="text-3xl font-bold mb-8">

                    Login

                </h1>

                <input

                className="w-full border p-3 rounded-xl mb-4"

                placeholder="Email"

                onChange={(e)=>setEmail(e.target.value)}

                />

                <input

                type="password"

                className="w-full border p-3 rounded-xl mb-6"

                placeholder="Password"

                onChange={(e)=>setPassword(e.target.value)}

                />

                <button

                className="w-full bg-blue-600 text-white py-3 rounded-xl">

                    Login

                </button>

            </form>

        </div>

    );

}