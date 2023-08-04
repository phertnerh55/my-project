import{AiFillEye} from "react-icons/ai";
import{AiFillEyeInvisible} from "react-icons/ai";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {dp, app} from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useState , useEffect, useRef} from "react";
import { Link , useNavigate} from "react-router-dom";
 function LogHero() { 
  useEffect(()=>{
    email.Ref.current.focus()
  },[])

  const auth=getAuth(app);

  const [show,setShow]=useState(false);
  const [loginError ,setloginError]=useState("");
  const [formData,setFormData]=useState({});
  const [formErrors,setFormErrors]=useState({});
  const navigate=useNavigate();
  const emailRef=useRef()
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  };
  async function handleLogIn(e){
    e.preventDefault();
    const errors={};
    (formData.emailAddress===undefined||formData.emailAddress==="")&&
    (errors.emailAddress="Please Enter Your Email Address");
    (formData.password===undefined||formData.password==="")&&
    (errors.password="Please Enter Your Password");
    setFormErrors(errors);
    console.log(formData);
    createUserWithEmailAndPassword (auth, formData.emailAddress, formData.password)
  .then((userCredential) => {

    const user=userCredential.user;
    console.log(user.email);
    setFormData({
      emailAddress:"",
      password:"",
    })
    setloginError("")
    navigate("/")
  })

  .catch ((error) =>{
    const errorMessage = error.message.substring(22,error.message.length -2)
    setloginError(errorMessage);
  });
  console.log(errors);


  await addDoc(collection(db, "user"), formData);
}
  return (
    <>
      
      <div className="flex">
        <div className=" flex-1 bg-[url('assets/images/bg-login.jpg')] bg-no-repeat bg-center  bg-cover h-[100vh] ">
          <div className="flex-1 mx-5">
            <h1 className="text-6xl font-bold container mx-40 my-[2em]">
              Log in to your recipe account.
            </h1>
            <div className="my-[2em]">
              {formErrors.emailAddress&&(
              <p className="text-red-500 text-center">{formErrors.emailAddress}</p>
            )}
            {/* <form> */}
              <div className="rounded-full shadow border-black border-2 w-[40%] my-[2em]  container mx-40">
                <input
                  type="email"
                  placeholder="EmailAddress"
                  className="outline-0 p-7 bg-transparent w-[40%]"
                  name="emailAddress"
                  onChange={(e)=>handleChange(e)}
                />
              </div>
              </div>
              <div className="my-[2em]">
                {formErrors.password &&(
                  <p className="text-red-500 text-center">{formErrors.password}</p>
                  )}
                
              <div className="rounded-full flex it shadow border-black border-2 w-[40%] container mx-40 my-[2em] px-4  ">
                <input
                  type="password"
                  placeholder="password"
                  className="outline-0 p-7 bg-transparent w-[40%]"
                  name="password"
                  onChange={(e)=>handleChange(e)}
                />
                <div
                onClick={()=>setShow((prev)=>!prev)}>
                { show ?<AiFillEye size={20}/>:<AiFillEyeInvisible size={20}/>}</div>
                </div>
              
                </div>
              
            {/* </form> */}
            <div className="rounded-full shadow text-white p-7 bg-green-500 my-[3em] text-center container mx-40 w-[40%]  text-4xl font-bold"
            onClick={(e)=>handleLogIn(e)}>
              <button>log in</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
 
export default LogHero;
