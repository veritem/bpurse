import React from "react"
import AdminNavbar from "../../components/navbar/AdminNavbar"
import Sidebar from "../../pages/dashboard"
const Admin = ({children}:any) =>{
    return (
        <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
        </div>
      </div>
    </>
    )
}