import React, {useEffect, useState} from "react";

export const Text = () => {
    const [text, setText] = useState("");

    useEffect(() => {
       console.log('Component Mount') // mounting

        return () => {   //unmounting
           console.log('Component Mount');
        }
    },[]);


    return (
        <div>
            <input onChange={(event ) => {
               setText(event.target.value)
            }
            }/>
            <h1>{text}</h1>
        </div>
    )
}