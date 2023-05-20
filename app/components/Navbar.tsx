"use client";
import Link from "next/link";
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiFillInfoCircle,
  AiFillHome,
  AiOutlineCalendar,
  AiFillCalendar,
} from "react-icons/ai";

import { useReducer } from "react";

const navbarStates = {
  home: true,
  info: false,
  calendar: false,
};

const Navbar = () => {
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
        if (state.calendar === false) {
          return { home: false, info: false, calendar: true };
        } else {
          return { home: false, info: false, calendar: false };
        }

      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, navbarStates);

  return (
    <div className="fixed inset-x-0 bottom-0 flex w-full mx-auto text-primary">
      <ul className="flex justify-center w-full gap-5 py-3 text-3xl bg-white/80 backdrop-blur-xl menu-horizontal">
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
          } absolute w-full bg-secondary/90 flex justify-between p-3  bottom-[100%] duration-500 font-bold  divide-black/20 text-xl `}
        >
          <li>
            <Link href="/day1">Day1</Link>
          </li>
          <li>
            <Link href="/day2">Day2</Link>
          </li>
          <li>
            <Link href="/day3">Day3</Link>
          </li>
          <li>
            <Link href="/day4">Day4</Link>
          </li>
          <li>
            <Link href="/day5">Day5</Link>
          </li>
        </ul>
      </ul>
    </div>
  );
};
export default Navbar;
