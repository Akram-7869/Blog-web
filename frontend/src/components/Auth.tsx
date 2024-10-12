import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { SignUPInput } from "@akramsulthan/common";
import axios from "axios";
import { BACKEND_URL } from "../config";


export const Auth=({type}:{type:"signup" | "signin"})=>{
    const navigate=useNavigate();
    const [postInputs,setPostInputs]=useState<SignUPInput>({
        name:"",
        username:"",
        password:""
    })
    
   async function sendRequest(){
    console.log(postInputs.name);
    try{
        const res=await axios.post(`${BACKEND_URL}/api/v1/user/${type==="signup"?"signup":"signin"}`,postInputs)
        const jwt=res.data.jwt;
        localStorage.setItem("token",jwt);
        navigate("/blogs");
    }catch(e){
        alert("Error while signing up")
        console.log(e);
    }
    }
    

    return (
    <div className="h-screen flex justify-center flex-col ">
        <div className="flex justify-center flex-col px-10">
            <div className="text-center">
                <div className="text-3xl font-extrabold">
                create an account
                </div>
                <div className="text-slate-400">
                    {type==="signin"?"Don't have an account":"Already have an account?"}
                    <Link to={type=="signin"?"/signup":"/signin"} className="pl-2 underline">
                     {type=="signup"?"signin":"signup"}
                    </Link>
                </div>
            </div>
            <div className="px-10">
               {type==="signup" && <LabeledInput label="Name" placeholder="enter the name" 
            onChange={(e)=>{
                setPostInputs({
                    ...postInputs,
                    name:e.target.value
                })
            }}></LabeledInput>}
            <LabeledInput label="Username" placeholder="enter the email" 
            onChange={(e)=>{
                setPostInputs({
                    ...postInputs,
                    username:e.target.value
                })
            }}></LabeledInput>
            <LabeledInput label="password" type="password" placeholder="enter the password" 
            onChange={(e)=>{
                setPostInputs({
                    ...postInputs,
                    password:e.target.value
                })
            }}></LabeledInput>
            </div>
            
        </div>
        <div className="flex justify-center mt-10 mr-10 ">
        <button
            onClick={sendRequest}
            type="button"
            className="inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] 
            focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)]
            dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]
             dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] px-11">
            {type=="signup" ? "Signup":"Signin"}
            </button>
        </div>
           
        
    </div>
    )
}

interface LabeledInput{
   label:string;
   placeholder:string;
   onChange:(e:ChangeEvent<HTMLInputElement>)=>void
   type?:string
}
function LabeledInput({label,placeholder,onChange,type}:LabeledInput){
    return (
    <div>
       <div className="flex justify-center flex-col ml-40 mt-5 ">
            <label 
            className="block mb-2 text-sm font-medium text-gray-900 ">
            {label}
            </label>
            <input 
            onChange={onChange}
            type={type || "text"} 
            id="first_name"
            className="bg-gray-50 border
             border-gray-300 text-gray-900 text-sm 
             rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
             dark:focus:border-blue-500
             max-w-fit px-12"

            placeholder={placeholder} required />
        </div>
    </div>
)
}