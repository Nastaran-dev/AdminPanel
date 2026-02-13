"use client"
import { useContext } from "react";
import { myTheme } from "../store/Store";

export default function GroupAvatars() {
  const{dark}=useContext(myTheme)
  return (
    <>
    <h1  className={`${dark ? "text-red-700" : "text-black"}`}>nasraean</h1>
    </>
  );
}
