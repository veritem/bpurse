import { useSelector } from "react-redux";
import Link from "next/link";
import { getDashboardLink } from "../../utils/sidebar-links";
import React from "react";
import { SystemUser } from "../../interfaces/SystemUser";

export default function AdminNavbar({
  quickActions,
  setShowSidebar,
  sidebarState,
  setShowNotifications,
  showNotifications,
}:any) {
  // const authUser = useSelector((state:SystemUser) => state.authUser);
  const authUser ={
        fullNames:"DUSH SAM",
        username:"dushsam",
        imageUrl:""
  }
  const logOut = (e:any) => {

  };

  const notifications = 10;
  return (
    <div
      style={{ height: 50 }}
      className="shadow-sm d-flex justify-content-between align-items-center px-3 bg-white"
    >
      <div className="d-flex align-items-center">
        <div
          className="mr-4 cursor-pointer"
          onClick={() => setShowSidebar(!sidebarState)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="25"
            fill={"#707070"}
            height="25"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z" />
          </svg>
        </div>
        {quickActions}
      </div>
      <div className="d-flex align-items-center">
        <div
          className="notifications cursor-pointer dropdown"
          style={{ cursor: "pointer" }}
          onClick={() => setShowNotifications(!showNotifications)}
        >
          <div
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill={"none"}
              stroke="#707070"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-bell"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </div>
        </div>
        <div className="dropdown">
          <div
            className="account d-flex pl-4 align-items-center cursor-pointer"
            style={{ fontSize: "14px", color: "#707070", cursor: "pointer" }}
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img
              width={30}
              height={30}
              className={"rounded-circle shadow-sm"}
              src={authUser.imageUrl}
              onError={(e:any) => {
                e.target.onerror = null;
                e.target.src =
                  "https://ui-avatars.com/api/?name=" + authUser.username;
              }}
              alt={authUser.username}
            />
            <span className="pl-3" style={{ letterSpacing: "0.6px" }}>
              {authUser.fullNames}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                style={{ marginTop: "-1px" }}
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="gray"
                  d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
                />
              </svg>
            </span>
          </div>
          <div
            className="dropdown-menu dropdown-menu-right cursor-pointer"
            aria-labelledby="dropdownMenuButton"
          >
            <Link
              href={getDashboardLink(authUser) + "/account/settings"}
              passHref
            >
              <a className="dropdown-item" href="#">
                Account settings
              </a>
            </Link>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="#" onClick={logOut}>
              Log out
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
