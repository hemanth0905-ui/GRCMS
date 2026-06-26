import Sidebar from "../components/Sidebar";

export default function Reports(){

return(

<>

<Sidebar/>

<div className="ml-64 p-8 bg-slate-100 min-h-screen">

<h1 className="text-4xl font-bold mb-8">

Reports & Analytics

</h1>

<div className="grid grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-xl shadow">

Department Report

</div>

<div className="bg-white p-8 rounded-xl shadow">

Monthly Report

</div>

<div className="bg-white p-8 rounded-xl shadow">

Compliance Report

</div>

</div>

</div>

</>

);

}