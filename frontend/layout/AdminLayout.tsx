import Sidebar from "../../components/dashboards/Sidebar";
import AdminNavbar from "../../components/dashboards/AdminNavbar";
import { adminLinks, quickCreateActions } from "../../utils/sidebar-links";
import RouteProtector from "../../middlewares/RouteProtector";
import { system_users } from "../../utils/constants";
import React, { useEffect, useState } from "react";
import Link from "next/link"


const QuickActions = () => {
    return (
        <div className="dropdown">
            <button className="btn btn-sm d-none d-sm-block pr-3" type="button" id="dropdownMenuButton"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{
                    color: '#ff5555',
                    borderColor: '#ff5555'
                }}>
                <div className="d-flex">
                    <div className="d-inline-block" style={{ marginTop: -1 }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="17"
                            height="17" fill={'rgb(255, 85, 85)'}>
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
                        </svg>
                    </div>
                    <div><span className="pl-2">Create New</span></div>
                </div>
            </button>
            <div className="dropdown-menu shadow-lg" aria-labelledby="dropdownMenuButton">
                {
                    quickCreateActions.map((action, i) => (
                        <Link href={"/admin/" + action.href} passHref key={i}>
                            <a className="dropdown-item" href={"/admin/" + action.href} key={i}>{action.name}</a>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default function AdminDashboard({ children }) {
    const [showSidebar, setShowSidebar] = useState(true)

    useEffect(() => {
        if (window.innerWidth < 776) {
            setShowSidebar(false)
        }
    }, [])

    return (
        <RouteProtector only={[system_users.ADMIN]}>
            <div className="row mx-0 page min-vh-100">
                <div
                    className={
                        "px-0 " + (showSidebar ? "col-12 col-md-3 col-lg-2" : "d-none")
                    }
                >
                    <div style={{ position: "sticky", top: 0 }}>
                        <div
                            className="d-md-none bg-danger p-2 rounded-circle position-fixed shadow"
                            onClick={() => setShowSidebar(false)}
                            style={{ zIndex: 12, top: 5, right: 5 }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                            >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                    fill="white"
                                    d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z"
                                />
                            </svg>
                        </div>
                        <Sidebar navList={adminLinks} />
                    </div>
                </div>
                <div
                    className={
                        "px-0 " + (showSidebar ? "col-12 col-md-9 col-lg-10" : "col-12")
                    }
                >
                    <div className="min-vh-100 d-flex flex-column justify-content-between">
                        <div>
                            <div style={{ position: "sticky", top: 0, zIndex: 10 }}>
                                <AdminNavbar
                                    setShowSidebar={setShowSidebar}
                                    sidebarState={showSidebar}
                                    quickActions={<QuickActions />}
                                />
                            </div>
                            <div className="main my-5 px-3">{children}</div>
                        </div>

                        {/* <Footer/> */}
                    </div>
                </div>
            </div>
        </RouteProtector>
    );
}