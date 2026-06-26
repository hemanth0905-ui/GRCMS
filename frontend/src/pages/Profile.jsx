import { useEffect, useState } from "react";
import API from "../api/axios";
import Sidebar from "../components/Sidebar";

export default function Profile(){

const[user,setUser]=useState({

name:"",

email:"",

department:""

});

const id=1;

useEffect(()=>{

loadProfile();

},[]);

async function loadProfile(){

const res=await API.get(`/profile/${id}`);

setUser(res.data);

}

async function save(){

await API.put(`/profile/${id}`,{

name:user.name,

department:user.department

});

alert("Profile Updated");

}

return(

<>

<Sidebar/>

<div className="ml-64 p-10 bg-slate-100 min-h-screen">

<h1 className="text-4xl font-bold mb-8">

Profile Settings

</h1>

<div className="bg-white shadow rounded-xl p-8 w-[600px]">

<label>Name</label>

<input

className="w-full border p-3 rounded mt-2 mb-5"

value={user.name}

onChange={(e)=>setUser({...user,name:e.target.value})}

/>

<label>Email</label>

<input

className="w-full border p-3 rounded mt-2 mb-5"

value={user.email}

disabled

/>

<label>Department</label>

<input

className="w-full border p-3 rounded mt-2 mb-5"

value={user.department}

onChange={(e)=>setUser({...user,department:e.target.value})}

/>

<button

onClick={save}

className="bg-blue-700 text-white px-8 py-3 rounded"

>

Save Changes

</button>

</div>

</div>

</>

);

}