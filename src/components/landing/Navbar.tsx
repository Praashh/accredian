import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../icons/logo.svg";
import ProfileHeader from "../ui/ProfileHeader";
import { NavigationMenu } from "../ui/NavMenu";
import { Button } from "@mui/material";

export default function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleClickOutside = (event: { target: any; }) => {
        // @ts-ignore
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="inset-x-0 sticky top-0 z-50 bg-white shadow-sm">
            <div className="w-full max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-14 items-center">
                    <div className="flex items-center md:gap-10 ">
                        <Link className="flex items-center" to={"/"}>
                            <img src={logo} alt="@logo" />
                        </Link>
                        <div className="relative hidden md:block gap-10 ">
                            <Button
                                variant="contained"
                                onClick={toggleDropdown}
                            >
                                Courses
                                <svg
                                    className="w-2.5 h-2.5 ms-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </Button>
                            <div
                                ref={dropdownRef}
                                id="dropdown"
                                className={`absolute z-10 mt-2 ${dropdownOpen ? "" : "hidden"} bg-[#eee8e8] divide-y divide-gray-100 rounded-lg shadow w-44 `}
                            >
                                <ul
                                    className="py-2 text-sm text-gray-200 dark:text-gray-700"
                                    aria-labelledby="dropdownDefaultButton"
                                >
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            Dashboard
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            Settings
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            Earnings
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            Sign out
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <nav className="hidden md:flex gap-7">
                            <NavigationMenu title="Refer & Earn" link="/refer-and-earn" />
                            <NavigationMenu title="Resources" link="/resources" />
                            <NavigationMenu title="About us" link="/about-us" />
                        </nav>
                    </div>
                    <div className="flex gap-3 items-center">
                        <ProfileHeader />
                    </div>
                </div>
            </div>
        </nav>
    );
}
