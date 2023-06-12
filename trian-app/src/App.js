import "./App.css";
// import { useState, useEffect } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Menu from "./component/Menu";
import Text from "./component/Text";
import Navbar from "./component/Navbar";
import { Nopage } from "./component/Nopage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import Axios from "axios";
// export const AppContext = createContext();  // globa content //
function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <div>
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route index element={<Home />} />
            {/* <h1>seee</h1> */}
            <Route path="/menu" element={<Menu />} />
            <Route path="/text" element={<Text />}></Route>
            <Route path="*" element={<Nopage />}></Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;

/////////NAME PREDICT FROM API /////
// const [name, setName] = useState("");
//   const [predictAge, setPredictAge] = useState(null);
//   const fecthData = () => {
//     Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
//       setPredictAge(res.data);
//     });
//   };

///////////// SECOD PATH /////////
{
  /* <input
placeholder="Ex.Husain..."
onChange={(e) => {
  setName(e.target.value);
}}
></input>
<button onClick={fecthData}> name age</button>
<h1>Name : {predictAge?.name}</h1>
<h1>predictAge : {predictAge?.age}</h1>
<h1>count : {predictAge?.count}</h1> */
}

// ////////////TODO LIST /////
// const [todoList, setTodoList] = useState([]);
// const [newTask, setNewTask] = useState("");
// const handleChange = (e) =>{
//  setNewTask(e.target.value)
// };
// const addTask = () =>{
//  const task ={
//    id: todoList.length === 0 ? 1 : todoList[todoList.length - 1] .id + 1,
//    taskName : newTask,
//    }
//  // const newTodoList = [...todoList, newTask];
//  setTodoList([...todoList, task])
//  console.log(setTodoList);
// }
// const deleteTask=(id)=>{
//  setTodoList(todoList.filter((task)=> task.id !== id));
// }
//////////////// path  ////////////

//
{
  /* <div className="addTask">
<input type="text" onChange={handleChange} placeholder="Study Exam Timetable"/>
<button onClick={addTask}>Add Task</button>
</div>
<div className="list">
{todoList.map((task)=>{
  return <>
  <div className="task">
  <h1>{task.taskName}</h1>
 
  { <button onClick={()=>deleteTask(task.id)}> x </button> }
  </div>
   </>
 })}
</div>  */
}

// ////SHOW / HIDE METHOD
//  <button
//         onClick={() => {
//           setcount(!count);
//         }}
//       >
//         {count ? "hide" : "show"}
//       </button>
//       {count && <h1>Hi my name is Husain</h1>}

////////// COLOR CHANGE ///////
// <button onClick={()=> {setTextColor (textColor === "black" ? "red" : "black")}}>COLOR CHANGE TO {textColor}</button>
// <h1 style={{color: textColor}}>HAY CHANGE TO {textColor}</h1>
// https://restcountries.com/v3.1/name/{nigeria}.
