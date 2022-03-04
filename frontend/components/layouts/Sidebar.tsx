import Logo from "../Logo";
import styles from "../../styles/components/sidebar.module.css"
import Link from "next/link"
import { useSelector } from "react-redux";
import { getDashboardLink } from "../../utils/sidebar-links";
import Router from "next/router";

export default function Sidebar({ navList = [] }) {
    const authUser = useSelector(state => state.authUser)

    return (
        <div className="bg-white vh-100 border-right py-3 pl-4">
            <Logo />
            <hr />
            <div className="dashboard my-3">
                <Link href={getDashboardLink(authUser) + "/dashboard"} passHref>
                    <div
                        style={{ color: '#707070' }} className={"d-flex px-3 py-2 rounded-sm align-items-center mr-3 " + styles.sidebarLink}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"
                                    fill="rgba(108,117,125,1)" />
                            </svg>
                        </div>
                        <div className="pl-4">
                            <span style={{ fontSize: '15px' }}>Dashboard</span>
                        </div>
                    </div>
                </Link>
            </div>
            <h6 style={{ fontSize: 14 }} className="font-weight-light text-secondary mr-4">MAIN MENU</h6>
            <div className={"main-menu " + styles.mainMenu}>
                {
                    navList.map((list, i) => (
                        <Link href={list.href} key={i} passHref>
                            <div
                                className={"d-flex px-3 py-2 rounded-sm align-items-center mb-2 text-secondary mr-3 " + (styles.sidebarLink)}>
                                <div style={{ marginTop: '-5px' }}>
                                    {list.icon}
                                </div>
                                <div className="pl-4" style={{ fontSize: 15 }}>
                                    {list.name}
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}