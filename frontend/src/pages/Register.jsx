import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Register(){

const navigate=useNavigate();

const [form,setForm]=useState({

name:"",

email:"",

department:"",

password:""

});

async function register(e){

e.preventDefault();

await API.post("/auth/register",form);

alert("Registration Successful");

navigate("/login");

}

return(

<div className="flex justify-center items-center h-screen bg-slate-100">

<form

onSubmit={register}

className="bg-white p-10 rounded-3xl shadow-xl w-[450px]">

<h1 className="text-3xl font-bold mb-6">

Register

</h1>

<input

className="w-full border p-3 rounded-xl mb-4"

placeholder="Name"

onChange={(e)=>setForm({...form,name:e.target.value})}

/>

<input

className="w-full border p-3 rounded-xl mb-4"

placeholder="Email"

onChange={(e)=>setForm({...form,email:e.target.value})}

/>

<input

className="w-full border p-3 rounded-xl mb-4"

placeholder="Department"

onChange={(e)=>setForm({...form,department:e.target.value})}

/>

<input

type="password"

className="w-full border p-3 rounded-xl mb-5"

placeholder="Password"

onChange={(e)=>setForm({...form,password:e.target.value})}

/>

<button

className="w-full bg-blue-700 text-white py-3 rounded-xl">

Register

</button>

</form>

</div>

);

}