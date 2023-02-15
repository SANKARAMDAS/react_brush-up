import {ChangeProfile} from "../component/ChangeProfile";
import {useContext} from "react";
import { AppContext} from "../App";
export const Profile = () => {
    const {username,setUsername} = useContext(AppContext);
    return (
        <h1>This is the Profile page and user is: {username}
            <ChangeProfile setUsername={setUsername}/>
        </h1>
    )
}