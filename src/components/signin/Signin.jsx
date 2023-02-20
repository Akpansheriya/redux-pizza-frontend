import React, { useState } from "react";
import   axios from "axios";
import { useNavigate } from "react-router-dom";
import "./signin.css"

function SignIn() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email:"",
    password:"",
  });

  console.log("login",login)

  const onChangeHandler = (e) => {
    const value = e.target.value;
    setLogin({
      ...login,
      [e.target.name]:value,
    });
  };

  

  const onSubmitForm = (e) => {
    e.preventDefault();
    const dataList = {
      email:login.email,
      password:login.password,
    };
axios.post("http://localhost:4000/api/signin",dataList).then(res => {
  if(res.data){
console.log("data",res.data)
    localStorage.setItem("userId",res.data.user[0]._id)
    // console.log(localStorage.setItem("userId", res.data.user[0]._id))
    navigate("/Screen")
  }else{
    navigate("/")
  }
 
  console.log("data",res.data)
  })
   
  };
  return (
    <div className="login">
      <form className="login-form" onSubmit={onSubmitForm}>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  name="email"
                  value={login.email}
                  onChange={onChangeHandler}
                  id="form1Example13"
                  className="form-control form-control-lg"
                />
                <label className="form-label" htmlFor="form1Example13">
                  Email address
                </label>
              </div>

              <div className="form-outline ">
                <input
                  type="password"
                  name="password"
                  value={login.password}
                  onChange={onChangeHandler}
                  id="form1Example23"
                  className="form-control form-control-lg"
                />
                <label className="form-label" htmlFor="form1Example23">
                  Password
                </label>
              </div>

              <div className="d-flex justify-content-around align-items-center ">
                <div className="form-check">
                  {/* <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="form1Example3"
                    checked
                  /> */}
                  {/* <label className="form-check-label" for="form1Example3">
                    {" "}
                    Remember me{" "}
                  </label> */}
                </div>
                {/* <a href="/">Forgot password?</a> */}
              </div>

              <button
                type="submit"
               
                className="btn btn-primary btn-lg btn-block text-align-center" 
              >
                Sign in
              </button>
            </form>
    </div>
  );
}

export default SignIn;
