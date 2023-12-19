import React from "react";
import { useParams } from 'react-router-dom'


function User(){
    const {userid} = useParams()
    console.log(userid);
    
    return(
        <>
         <div className=" max-w-2xl bg-slate-700 text-center p-4">
            <h1 className=" text-4xl font-bold text-white"> User : {userid}</h1>
         </div>
        </>
    );
}

export default User