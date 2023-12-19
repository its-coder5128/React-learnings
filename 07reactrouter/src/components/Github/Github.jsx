import React from "react";
import {useLoaderData} from "react-router-dom";

function Github(){
    const data = useLoaderData()
    return(
        <div className="flex flex-wrap gap-2 justify-center items-center max-w-screen-xl mx-auto">
            <div className=" p-4 bg-slate-600 w-full text-center">
                <h1 className=" text-white font-bold text-2xl"> Github Followers : {data.followers}</h1>
            </div>
            <div className="mb-2">
                <img src={data.avatar_url} alt="Git picture" width={300}/>
            </div>
        </div>
    )
}

export default Github

export const useGitUserInfo = async ()=>{
    const res = await fetch("https://api.github.com/users/hiteshchoudhary")
    return res.json()
}