import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import {Link} from "react-router-dom";
// import {googleAuth} from "../auth";

function SignHero() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const handleChange = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };
  function handleSignUp(e) {
    e.preventDefault();
    const errors = {};
    (formData.firstName === undefined || formData.firstName === "") &&
      (errors.firstName = "Please Enter Your First Name");
    (formData.lastName === undefined || formData.lastName === "") &&
      (errors.lastName = "Please Enter Your Last Name");
    (formData.emailAddress === undefined || formData.emailAddress === "") &&
      (errors.emailAddress = "Please Enter Your Email Address");
    (formData.phoneNumber === undefined || formData.phoneNumber === "") &&
      (errors.phoneNumber = "Please Enter Your Phone Number");
    (formData.password === undefined || formData.password === "") &&
      (errors.password = "Please Enter Your Password");
    (formData.confirmPassword === undefined ||
      formData.confirmPassword === "") &&
      (errors.confirmPassword = "Please Confirm Your Password");

    setFormErrors(errors);
    console.log(errors);
    console.log(formData);
  }
//   function handleGoogleAuth(){
//   googleAuth();
//   }
  return (
    <div>
      <div className="flex justify-end bg-[url(assets/images/bg-signup.jpg)] bg-center bg-origin-border bg-cover h-[145vh]">
        <div className="mx-7 w-[40%]">
          <h1 className="font-bold text-6xl container my-[1em]">
            Create an account
          </h1>

          <div className="justify-between my-[2em] gap-2">
            <div className="w=[100%]">
              {formErrors.firstName && (
                <p className="text-red-500 text-center">
                  {formErrors.firstName}
                </p>
              )}
              <div className="rounded-full shadow border-gray-300 border-2 my-[2em]">
                <input
                  type="text"
                  placeholder="First Name"
                  className="outline-0 p-7 bg-transparent"
                  name="firstName"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <div className="w-[100%]">
              {formErrors.lastName && (
                <p className="text-red-500 text-center">
                  {formErrors.lastName}
                </p>
              )}
              <div className="rounded-full shadow border-gray-300 border-2 my-[2em]">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="outline-0 p-7 bg-transparent"
                  name="lastName"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <div className="my-[2em]">
              {formErrors.emailAddress && (
                <p className="text-red-500 text-center">
                  {formErrors.emailAddress}
                </p>
              )}
              <div className="rounded-full shadow border-gray-300 border-2 my-[2em]">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="outline-0 p-7 bg-transparent"
                  name="emailaddress"
                  onChange={(e)=>handleChange(e)}
                />
              </div>
            </div>
            <div className="my-[2em]">
                {formErrors.phoneNumber &&(
                 <p className="text-red-500 text-center">
                 {formErrors.phoneNumber}
               </p>   
                )}
            <div className="rounded-full shadow border-gray-300 border-2 my-[2em]">
              <input
                type="text"
                placeholder="Phone Number"
                className="outline-0 p-7 bg-transparent"
                name="phoneNumber"
                onChange={(e)=>handleChange(e)}
              />
            </div>
            </div>
            <div className="my-[2em]">
                {formData.password &&(
                   <p className="text-red-500 text-center">
                   {formErrors.password}
                 </p>  
                )}
            <div className="rounded-full shadow border-gray-300 border-2 my-[2em]">
              <input
                type="text"
                placeholder="Password"
                className="outline-0 p-7 bg-transparent"
                name="password"
                onChange={(e)=>handleChange(e)}
              />
              <div className="flex justify-end"
              onClick={()=>setShow((prev)=>!prev)}>
                { show?<AiFillEye size={25} />:<AiFillEyeInvisible size={25} />}
              </div>
            </div>
            </div>
            <div className="my-[2em]">
                {formData.confirmPassword &&(
                     <p className="text-red-500 text-center">
                     {formErrors.confirmPassword}
                   </p> 
                )}
            <div className="rounded-full shadow border-gray-300 border-2 my-[2em]">
              <input
                type="text"
                placeholder=" Confirm Password"
                className="outline-0 p-7 bg-transparent"
                name="confirmPassword"
                onChange={(e)=>handleChange(e)}
              />
              <div className="flex justify-end"
              onClick={()=>setShow((prev)=>!prev)}>
                { show?<AiFillEye size={25} />:<AiFillEyeInvisible size={25} />}
              </div>
            </div>
            </div>
          </div>
          <div>
            <button className="p-7 bg-green-500 text-white rounded-full shadow font-bold text-center text-2xl my-[1em] w-[100%] mx-auto"
            onClick={(e)=>handleSignUp(e)}>
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignHero;
