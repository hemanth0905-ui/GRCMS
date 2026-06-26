import Sidebar from "../components/Sidebar";

export default function Notifications(){

return(

<>

<Sidebar/>

<div className="ml-64 p-8 bg-slate-100 min-h-screen">

<h1 className="text-4xl font-bold mb-8">
Notifications
</h1>

<div className="bg-white rounded-xl shadow p-6">

<ul className="space-y-4">

<li className="border-b pb-3">
New Rule Assigned
</li>

<li className="border-b pb-3">
Compliance Deadline Tomorrow
</li>

<li className="border-b pb-3">
Proof Uploaded Successfully
</li>

</ul>

</div>

</div>

</>

);

}