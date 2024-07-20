import { Link } from "react-router-dom";
import logo from "../icons/logo.svg";
import { useEffect, useRef, useState } from "react";
import { Button } from "@mui/material";

const LeftNav = () => {
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
  )
}

export default LeftNav
