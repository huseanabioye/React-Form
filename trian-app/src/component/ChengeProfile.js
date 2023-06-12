import { useState } from "react";
import { useContext } from "react";
import AppContext from "../App"
const ChengeProfile = () => {
    // const {setUsername} = useContext(AppContext);
    // const [newUsername, setNewUsername] = useState("")
    return <div>
      <input onChange={(event)=> {
        // setNewUsername(event.target.value);
      }}/>
      <button onClick={() => {
        // setNewUsername(newUsername)
      }}>change user</button>
    </div>
}
export default ChengeProfile;