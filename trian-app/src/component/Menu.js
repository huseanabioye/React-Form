// import React from "react";
// import Navbar from "./Navbar";
// import Input from "../component/Input"
// import "./App.css";
import "../component/Loggin.css"
import {useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
  const Menu = () => {
  
    const schema = yup.object().shape({
      fullName: yup.string().required("Your Full Name is Required").lowercase(),
      email: yup.string().email().required().lowercase(),
      age: yup.number().positive().integer().min(18).required(),
      password: yup.string().min(4).max(20).required(),
      confirmpassword: yup.string().oneOf([yup.ref("password"),null],"password not match").required(),
    });
    const {register, handleSubmit, formState:{errors}} = useForm({
      resolver:yupResolver(schema),
    });
    const onSubmit = (data) =>{
      console.log(data);
    }
   return (
    <div className="login">
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Full Name... " {...register("fullName")}/>
      <p>{errors.fullName?.message}</p>
      <input type="text" placeholder="Email..." {...register("email")}/>
      <p>{errors.email?.message}</p>
      <input type="number" placeholder="Age..."{...register("age")}/>
      <p>{errors.age?.message}</p>
      <input type="password" placeholder="Password..." {...register("password")}/>
      <p>{errors.password?.message}</p>
      <input type="password" placeholder="Confirm Password..." {...register("confirmpassword")}/>
      <p>{errors.confirmpassword?.message}</p>
      <input type="submit" onClick={onSubmit}/>
    </form>
    </div>
   
   );
};
export default Menu;


