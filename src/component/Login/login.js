import React from 'react'
import "./login.scss"
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Login() {
    const handleText = ()=>{
         }
         const formik = useFormik({
           initialValues: {
             email: "",
             name: "",
             phone: "",
             password: "",
             confirmedPassword: "",
           },
           validationSchema: Yup.object({
             name: Yup.string()
               .required(handleText)
               .min(4, "Must be 4 characters or more"),
             email: Yup.string()
               .required("Vui Lòng Nhập Email Của Bạn")
               .matches(
                 /^[\w-\]+@([\w-]+\)+[\w-]{2,4}$/,
                 "Vui lòng nhập một địa chỉ email hợp lệ"
               ),
             password: Yup.string()
               .required("Vui Lòng Nhập Mật Khẩu Của Bạn")
               .matches(
                 /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
                 "Mật khẩu phải có 7-19 ký tự và chứa ít nhất một chữ cái, một số và một ký tự đặc biệt"
               ),
             confirmedPassword: Yup.string()
               .required("Vui Lòng Nhập Lại Mật Khẩu Của Bạn")
               .oneOf([Yup.ref("password"), null], "Mật khẩu phải phù hợp"),
             phone: Yup.string()
               .required("Vui Lòng Nhập Sdt Của Bạn")
               .matches(
                 /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                 "Must be a valid phone number"
               ),
           }),
           onSubmit: (values) => {
             window.alert("Form submitted");
             console.log(values);
           },
         });
       
         return (
           <div className="container">
           <div className="row">
           <section className="container-form  ">
             <form className="infoform " onSubmit={formik.handleSubmit}>
             <h2 className="mt-5 text-center">ĐĂNG NHẬP</h2>
              <label for="email"><b></b></label>
               <input
                 type="email"
                 id="email"
                 name="email"
                 value={formik.values.email}
                 onChange={formik.handleChange}
                 placeholder="EmaiL"
               />
               {formik.errors.email && (
                 <p className="errorMsg"> {formik.errors.email} </p>
               )}
               <label  for="password" > </label>
               <input
                 type="text"
                 id="password"
                 name="password"
                 value={formik.values.password}
                 onChange={formik.handleChange}
                 placeholder="Mật khẩu"
               />
               {formik.errors.password && (
                 <p className="errorMsg"> {formik.errors.password} </p>
               )}
               <label  for="confirmedPassword"> </label>
               <input
                 type="text"
                 id="confirmedPassword"
                 name="confirmedPassword"
                 value={formik.values.confirmedPassword}
                 onChange={formik.handleChange}
                 placeholder="xác nhận mật khẩu"
               />
               {formik.errors.confirmedPassword && (
                 <p className="errorMsg"> {formik.errors.confirmedPassword} </p>
               )}
               
               
               <button className="btn btn-primary" type="submit"> Continue </button>
             </form>
           </section>
           </div>
           </div>
         );
}
