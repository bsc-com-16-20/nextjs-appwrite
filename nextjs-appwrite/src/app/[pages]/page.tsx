"use client"
import useAuth from "@/context/userAuth";
import React from "react";
import ProfileCard from "@/components/ProfileCard";
import Login from "@/components/Login";


const Home = () => {
    const {authStatus} = useAuth();

     return (
        <h1>Home page</h1>
     )
   }