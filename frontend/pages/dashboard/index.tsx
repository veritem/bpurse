
// import AdminLayout from "../../layout/AdminLayout";

// const AdminDashboardPage=()=>{
//     return(
//         <>
        
//         </>
//     )
// }


import { useState } from "react";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
    <div className="bg-blue-400 min-h-screen flex items-center jsutify-center">

    <div className="grid grid-cols-4 gap-4 ">
       <div className="bg-white p-3 rounded">1</div>
       <div className="bg-white p-3 rounded">1</div>
       <div className="bg-white p-3 rounded">1</div>
       <div className="bg-white p-3 rounded">1</div>
     </div>
     
    </div>

    </>
  );
};

export default Sidebar;

// export default AdminDashboardPage;