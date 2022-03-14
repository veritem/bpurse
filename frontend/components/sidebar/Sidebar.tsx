import React from "react";
import si_dashboard from '../../public/icon/si-dashboard.svg'

const Sidebar = ()=>{
    const location = window.location.pathname;
  console.log(location);
  const links = [
    {
      title: "Dashboard",
      icon: si_dashboard,
      href: "/dashboard",
    },
    {
      title: "Budget",
      icon: si_dashboard,
      href: "/budget",
    },
    {
      title: "Transactions",
      icon: si_dashboard,
      href: "/transactions",
    },
    {
      title: "Reports",
      icon: si_dashboard,
      href: "/report",
    },
    {
      title: "Notifications",
      icon: si_dashboard,
      href: "/notifications",
    },
    {
      title: "Messages",
      icon: si_dashboard,
      href: "/messages",
    },
  ];

  return (
    <div className="py-2 text-white dark:text-white">
      <a className="ml-6 text-lg font-bold text-white dark:text-white" href="#">
        K-ENGINE
      </a>

      {links.map((link) => (
        <ul
          className={`mt-6 border-l-2 ${
            location === link.href
              ? "bg-gray-500 bg-opacity-25 border-gray-500"
              : "border-transparent"
          }`}
        >
          <li className="relative px-6 py-2">
            <a
              className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-red-500"
              href={link.href}
            >
              <img src={link.icon} alt="" className="w-5 h-5" />
              <span className="ml-4">{link.title}</span>
            </a>
          </li>
        </ul>
      ))}
    </div>
  );
}