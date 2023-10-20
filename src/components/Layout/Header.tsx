"use client";

import React, { useState, useEffect } from "react";
// Import react scroll
import { Link as LinkScroll } from "react-scroll";
import ButtonOutline from "../misc/ButtonOutline";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "flowbite-react";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
    const { data: user, status } = useSession();

    const router = useRouter();
    // usestate type set null | string
    const [activeLink, setActiveLink] = useState<null | string>(null);
    const [scrollActive, setScrollActive] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScrollActive(window.scrollY > 20);
        });
    }, []);
    const backHome = () => {
        router.push("/");
    };

    return (
        <>
            <header
                className={
                    "fixed top-0 w-full  z-30  transition-all " +
                    (scrollActive || router.pathname !== "/"
                        ? " shadow-md pt-0 bg-black"
                        : " pt-4")
                }
            >
                <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
                    <div className="col-start-1 col-end-2 flex items-center">
                        <Link href="/">
                            <Image
                                className="cursor-pointer"
                                src="https://websitedemos.net/bike-modification-04/wp-content/uploads/sites/736/2020/11/custom-bike-builder-logo-white.svg"
                                width={140}
                                height={100}
                                alt="Logo"
                            ></Image>
                        </Link>
                    </div>
                    <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">
                        {router.pathname !== "/" ? (
                            <button
                                onClick={backHome}
                                className={
                                    "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative text-white hover:text-lime-500 "
                                }
                            >
                                Home
                            </button>
                        ) : (
                            <>
                                <LinkScroll
                                    activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    duration={1000}
                                    onSetActive={() => {
                                        setActiveLink("about");
                                    }}
                                    className={
                                        "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                                        (activeLink === "home"
                                            ? " text-lime-500 animation-active "
                                            : " text-white hover:text-lime-500 ")
                                    }
                                >
                                    About
                                </LinkScroll>

                                <LinkScroll
                                    activeClass="active"
                                    to="services"
                                    spy={true}
                                    smooth={true}
                                    duration={1000}
                                    onSetActive={() => {
                                        setActiveLink("services");
                                    }}
                                    className={
                                        "px-4 py-2  mx-2 cursor-pointer animation-hover inline-block relative" +
                                        (activeLink === "services"
                                            ? " text-lime-500 animation-active "
                                            : " text-white hover:text-lime-500 ")
                                    }
                                >
                                    Services
                                </LinkScroll>
                                <LinkScroll
                                    activeClass="active"
                                    to="speaker"
                                    spy={true}
                                    smooth={true}
                                    duration={1000}
                                    onSetActive={() => {
                                        setActiveLink("speaker");
                                    }}
                                    className={
                                        "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative " +
                                        (activeLink === "speaker"
                                            ? " text-primary animation-active "
                                            : " text-white hover:text-lime-500 ")
                                    }
                                >
                                    Speaker
                                </LinkScroll>
                            </>
                        )}
                    </ul>
                    <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
                        {user ? (
                            <>
                                <Link href="/dashboard">
                                    <Button
                                        gradientDuoTone="cyanToBlue"
                                        outline
                                        className="mr-2"
                                    >
                                        <p>Dashboard</p>
                                    </Button>
                                </Link>{" "}
                                <Button
                                    onClick={() => signOut()}
                                    gradientDuoTone="cyanToBlue"
                                    outline
                                >
                                    <p>Logout</p>
                                </Button>
                            </>
                        ) : (
                            <>
                                <Link href="/login">
                                    <Button
                                        gradientDuoTone="cyanToBlue"
                                        outline
                                        className="mr-2"
                                    >
                                        <p>Login</p>
                                    </Button>
                                </Link>
                                <Link href="/signup">
                                    <Button
                                        gradientDuoTone="cyanToBlue"
                                        outline
                                    >
                                        <p>Sign Up</p>
                                    </Button>
                                </Link>
                            </>
                        )}
                    </div>
                </nav>
            </header>
            {/* Mobile Navigation */}

            <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t ">
                <div className="bg-white-500 sm:px-3">
                    {router.pathname === "/" ? (
                        <ul className="flex w-full justify-between items-center text-black-500">
                            <LinkScroll
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                duration={1000}
                                onSetActive={() => {
                                    setActiveLink("about");
                                }}
                                className={
                                    "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                                    (activeLink === "about"
                                        ? "  border-orange-500 text-lime-500"
                                        : " border-transparent")
                                }
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                About
                            </LinkScroll>
                            <LinkScroll
                                activeClass="active"
                                to="schedule"
                                spy={true}
                                smooth={true}
                                duration={1000}
                                onSetActive={() => {
                                    setActiveLink("schedule");
                                }}
                                className={
                                    "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                                    (activeLink === "schedule"
                                        ? "  border-orange-500 text-lime-500"
                                        : " border-transparent ")
                                }
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                    />
                                </svg>
                                schedule
                            </LinkScroll>
                            <LinkScroll
                                activeClass="active"
                                to="speaker"
                                spy={true}
                                smooth={true}
                                duration={1000}
                                onSetActive={() => {
                                    setActiveLink("speaker");
                                }}
                                className={
                                    "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                                    (activeLink === "speaker"
                                        ? "  border-orange-500 text-lime-500"
                                        : " border-transparent ")
                                }
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                Speaker
                            </LinkScroll>
                        </ul>
                    ) : (
                        <ul className="flex w-full justify-center items-center text-black-500">
                            <LinkScroll
                                activeClass="active"
                                onClick={backHome}
                                to="schedule"
                                spy={true}
                                smooth={true}
                                duration={1000}
                                onSetActive={() => {
                                    setActiveLink("schedule");
                                }}
                                className={
                                    "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                                    (activeLink === "schedule"
                                        ? "  border-orange-500 text-lime-500"
                                        : " border-transparent ")
                                }
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                    />
                                </svg>
                                Home
                            </LinkScroll>
                        </ul>
                    )}
                </div>
            </nav>
            {/* End Mobile Navigation */}
        </>
    );
};

export default Header;
