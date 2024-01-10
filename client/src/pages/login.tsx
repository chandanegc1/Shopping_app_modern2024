import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.scss";
import { FcGoogle } from "react-icons/fc";

function Login() {
  // scrollToTop();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    adress: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { fullname, email, subject, message } = formData;
    const fetch = async () => {
      try {
        // const response = await axios.post(postMessageUrl,{fullname , email , subject ,message});
        // alert("successfully send...");
        navigate("/");
      } catch (error) {
        alert("something missing....");
      }
    };
    fetch();
  };
  return (
    <div className="shadow">
      {/* <div className="section123">
        <h1>#readmore</h1>
        <p>Read all case studies about aur product! </p>
      </div> */}

      <div className="login">
        <div className="container">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <br />
          <p>Gender</p>
          <input
            type="text"
            required
            name="fullname"
            placeholder="Gender"
            onChange={handleInputChange}
          />
          <br />
          <p>Date of Birth</p>
          <input
            type="email"
            required
            name="email"
            placeholder="Date of Birth"
            onChange={handleInputChange}
          />
          <br />
          <br />
          <p className="sign">Already Signed in</p> <br />
          <button>Submit</button><br /><br /><br />
        </form>
          <button className="google"><FcGoogle/><span>Sign in with Google</span></button>
        </div>
      </div>
      {/* <div className="section6">
        <div className="describe">
          <h2>Sing Up For Newsletters</h2>
          <p>Get E-mail updates about aur latest shop and special offers</p>
        </div>
        <div className="inp">
          <input type="text" placeholder="Your E-mail address" />
          <button>Sign Up</button>
        </div>
      </div> */}
    </div>
  );
}

export default Login;
