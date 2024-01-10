import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/shipping.scss";

function Shipping() {
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
    <>
      <div className="section123">
        <h1>#readmore</h1>
        <p>Read all case studies about aur product! </p>
      </div>

      <div className="form">
        <form onSubmit={handleSubmit}>
          <p>SHIPPING ADDRESS</p>
          <br />
          <input
            type="text"
            required
            name="fullname"
            placeholder="Adress..."
            onChange={handleInputChange}
          />
          <br />
          <br />
          <input
            type="email"
            required
            name="email"
            placeholder="City..."
            onChange={handleInputChange}
          />
          <br />
          <br />
          <input
            type="text"
            name="subject"
            placeholder="State..."
            onChange={handleInputChange}
          />
          <br />
          <br />
          <input
            type="text"
            required
            name="message"
            placeholder="Country..."
            onChange={handleInputChange}
          />
          <br />
          <br />
          <input
            type="text"
            required
            name="message"
            placeholder="Pincode..."
            onChange={handleInputChange}
          />
          <br />
          <br />
          <button>Submit</button>
        </form>
      </div>
      <div className="section6">
        <div className="describe">
          <h2>Sing Up For Newsletters</h2>
          <p>Get E-mail updates about aur latest shop and special offers</p>
        </div>
        <div className="inp">
          <input type="text" placeholder="Your E-mail address" />
          <button>Sign Up</button>
        </div>
      </div>
    </>
  );
}

export default Shipping;
