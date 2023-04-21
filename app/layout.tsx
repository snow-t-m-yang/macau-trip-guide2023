"use client";

import "./globals.css";
import Link from "next/link";
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiFillInfoCircle,
  AiFillHome,
  AiOutlineCalendar,
  AiFillCalendar,
} from "react-icons/ai";

import { useState, useReducer } from "react";

const navbarStates = {
  home: true,
  info: false,
  calendar: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  type NavbarState = {
    home: boolean;
    info: boolean;
    calendar: boolean;
  };

  type NavbarAction = {
    type: string;
  };

  const reducer = (state: NavbarState, action: NavbarAction) => {
    switch (action.type) {
      case "home":
        return { home: true, info: false, calendar: false };
      case "info":
        return { home: false, info: true, calendar: false };
      case "calendar":
        return { home: false, info: false, calendar: true };
      default:
        throw new Error();
    }
  };

  const [active, setActive] = useState(false);
  const [state, dispatch] = useReducer(reducer, navbarStates);

  return (
    <html lang="en" className="bg-primary">
      <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />
      <body className="max-w-3xl mx-auto text-white">
        {children}
        <div className="fixed inset-x-0 bottom-0 flex w-full mx-auto">
          <ul className="flex justify-center w-full gap-5 py-3 text-2xl bg-white/20 backdrop-blur-3xl menu-horizontal">
            <li onClick={() => dispatch({ type: "info" })}>
              <Link href="/info">
                {state.info ? <AiFillInfoCircle /> : <AiOutlineInfoCircle />}
              </Link>
            </li>

            <li onClick={() => dispatch({ type: "home" })}>
              <Link href="/">
                {state.home ? <AiFillHome /> : <AiOutlineHome />}
              </Link>
            </li>

            <li onClick={() => dispatch({ type: "calendar" })}>
              {state.calendar ? <AiFillCalendar /> : <AiOutlineCalendar />}
            </li>
            <ul
              className={`${
                state.calendar ? "right-0" : "right-[-100%]"
              } group absolute w-full bg-success text-base-100 grid grid-cols-5 p-3  bottom-[100%] duration-500 divide-x divide-black/20`}
            >
              <li>
                <a href="/day1">Day1</a>
              </li>
              <li>
                <a href="/day2">Day2</a>
              </li>
              <li>
                <a href="/day3">Day3</a>
              </li>
              <li>
                <a href="/day4">Day4</a>
              </li>
              <li>
                <a href="/day5">Day5</a>
              </li>
            </ul>
          </ul>
        </div>

        <footer className="p-10 bg-primary footer footer-center text-base-content">
          <div className="grid grid-flow-col gap-4">
            <a className="link link-hover">需帶物品</a>
            <a className="link link-hover">飯店資訊</a>
            <a className="link link-hover">航班資訊</a>
            <a className="link link-hover">聯繫方式</a>
          </div>

          <div>
            <p>Copyright © 2023 - All right reserved by Snow Yang</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
