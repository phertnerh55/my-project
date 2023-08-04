import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db, app } from "../firebase";
import { collection, addDoc } from "firebase/firestore"; 
import { useState,useEffect,useRef } from "react";
import {Link, useNavigate} from "react-router-dom";


function SignHero() {
useEffect(()=>{
  emailRef.current.focus()
},[])

    const auth = getAuth(app);

  const [show, setShow] = useState(false);
  const[signupError,setSignupError]=useState("")
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const navigate=useNavigate();
  const emailRef=useRef()
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 async function handleSignUp(e) {
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
    // (formData.confirmPassword === undefined ||
    //   formData.confirmPassword === "") &&
    //   (errors.confirmPassword = "Please Confirm Your Password");

    setFormErrors(errors);
    console.log(formData)
    createUserWithEmailAndPassword (auth, formData.emailAddress, formData.password)
  .then((userCredential) => {
    
    const user = userCredential.user;
    console.log(user.email);
    setFormData({
     firstName:"",
     lastName:"",
     emailAddress:"",
     phoneNumber:"",
     password:"",
    })
    setSignupError("")
    navigate("/login")
    
  })
  .catch((error) => {
    
    const errorMessage = error.message.substring(22,error.message.length -2)
    setSignupError(errorMessage);
    
  });
    console.log(errors);
    
    await addDoc(collection(db, "user"), formData);
  }
  

 
  return (
    <div>
      <div className="flex justify-end bg-[url(assets/images/bg-signup.jpg)] bg-center bg-origin-border bg-cover h-[145vh]">
        <div className="mx-7 w-[40%]">
          <h1 className="font-bold text-6xl container my-[1em] text-green-800">
            Create an account
          </h1>
          
{signupError!==""&&(
    <p className="text-red-500 text-center">{signupError}</p>
    
)}
          <div className="justify-between my-[2em] gap-2">
            <div className="w=[100%]">
              {formErrors.firstName && (
                <p className="text-red-500 text-center ">
                  {formErrors.firstName}
                </p>
              )}
              <div className="rounded-full shadow border-gray-300 border-2 my-[2em]">
                <input
                  type="text"
                  placeholder="First Name"
                  className="outline-0 p-7 bg-transparent rounded-full w-[100%]"
                  name="firstName"
                  onChange={(e) => handleChange(e)}
                  value={formData.firstName}

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
                  className="outline-0 p-7 bg-transparent rounded-full w-[100%]"
                  name="lastName"
                  onChange={(e) => handleChange(e)}
                  value={formData.lastName}

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
                  className="outline-0 p-7 bg-transparent rounded-full w-[100%]"
                  name="emailAddress"
                  onChange={(e)=>handleChange(e)}
                  value={formData.emailAddress}
                  ref={emailRef}
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
                className="outline-0 p-7 bg-transparent rounded-full w-[100%]"
                name="phoneNumber"
                onChange={(e)=>handleChange(e)}
                value={formData.phoneNumber}

              />
            </div>
            </div>
            <div className="my-[2em]">
                {formData.password &&(
                   <p className="text-red-500 text-center">
                   {formErrors.password}
                 </p>  
                )}
            <div className="rounded-full shadow border-gray-300 border-2 my-[2em] flex items-center justify-between">
              <input
                type={show?"password":"text"}
                placeholder="Password"
                className="outline-0 p-7 bg-transparent rounded-full w-[100%]"
                name="password"
                onChange={(e)=>handleChange(e)}
                value={formData.password}

              />
              <div className="flex justify-end mx-2"
              onClick={()=>setShow((prev)=>!prev)}>
                { show?<AiFillEye size={25} />:<AiFillEyeInvisible size={25} />}
              </div>
            </div>
            </div>
            {/* <div className="my-[2em]">
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
                value={formData.confirmPassword}

              />
              <div className="flex justify-end"
              onClick={()=>setShow((prev)=>!prev)}>
                { show?<AiFillEye size={25} />:<AiFillEyeInvisible size={25} />}
              </div>
            </div>
            </div> */}
          </div>
          <div>
          <Link to={"/login"}>  <button className="p-7 bg-green-500 text-white rounded-full shadow font-bold text-center text-2xl my-[1em] w-[100%] mx-auto"
            onClick={(e)=>handleSignUp(e)}>
              Create Account
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignHero;
