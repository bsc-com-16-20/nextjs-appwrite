"use client";
import appwriteService from "@/appwrite/config";
import useAuth from "@/context/userAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React,{FormEvent,useState} from "react";


const Signup = () => {
    const [formData,setFormData] = useState({
        email:"",
        password:"",
        name: "",
    })
    
  return (
    <div>
        <h1>Signup</h1>
    </div>
  )
}

export default Signup;
