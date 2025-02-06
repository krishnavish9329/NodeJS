import React, { useEffect, useMemo, useState } from "react"
import style from "./socket.module.css"
import {io} from 'socket.io-client'
const Socket = ()=>
{
    const socket =useMemo(()=>  io("http://localhost:3000"),[]);
    const [mess,setmess] =useState("");
    const [ID,setID] =useState("");


    const handleSubmit = (e)=>
    {
        e.preventDefault();
        // console.log(mess)
        socket.emit("message", mess)
        
        setmess("")
    }

    useEffect(()=>{
        socket.on("connect", () => {
            setID(socket.id)
            console.log("Connected to server: ", ID);
        });
        
        socket.on("welcome",(data)=>{
            console.log(data)
        });
        
        const text = document.getElementById("text");

        socket.on("message", (e)=>{
            console.log(e + " -1-1")
            const p = document.createElement("p");
            p.innerHTML = e;
            add.appendChild(p);
        })



        return () => {
            socket.disconnect();  
        };
    },[]);

    return(
        <div className={`${style.div}`}>
            <form  onSubmit={handleSubmit}> 

            <label htmlFor="Name">
                <input type="text" placeholder="Enter the Name"  id={`${style.name}`}  className={`${style.input}`} value={ID}/>
            </label>

            <label htmlFor="text">
                <input type="text" placeholder="Enter the text" id={`${style.text}`}  className={`${style.input}`}
                onChange={(e)=>setmess(e.target.value)}
                value={mess}
                />
            </label>
            <button type="submit" id={`${style.subbut}`}>Submit</button>

            </form>
            <div id="add"></div>
        </div>
    )
}

export default Socket;