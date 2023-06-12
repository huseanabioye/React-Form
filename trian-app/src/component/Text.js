import React from "react";
import ChengeProfile from "./ChengeProfile";
import { useContext } from "react";
// import useContext from "react"
import { AppContext } from "../App";
// import { useState, useEffect } from "react";
import { useState } from "react";
function Text() {
   // const [username, setNewUsername] = useContext(AppContext);
   return (
      <>
         <div>
            This is profile user: 
            <ChengeProfile />
         </div>
      </>
   );
}

export default Text;
