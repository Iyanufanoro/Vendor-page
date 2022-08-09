//import ReactCSSTransitionGroup from "react-transition-group";
import "./signup.css";
import { useState } from "react";

export const Signup = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setvalue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const [value6, setValue6] = useState("");

  const event1 = (x) => {
    setValue1(x.target.value);
  };
  const event2 = (x) => {
    setValue2(x.target.value);
  };
  const event3 = (x) => {
    setvalue3(x.target.value);
  };
  const event4 = (x) => {
    setValue4(x.target.value);
  };
  const event5 = (x) => {
    setValue5(x.target.value);
  };
  const event6 = (x) => {
    setValue6(x.target.value);
  };

  console.log(value1, value2, value3, value4, value5, value6);

  const event7 = (x) => {
    if (value5 !== value6) {
      x.preventDefault();
      alert("given passwords are different");
    } else {
      alert("REGISTRATION SUCCESFUL!");
    }
  };

  // function event8 (x) { if(event7 === false ){

  //     x.preventDefault()
  //     }
  // }

  return (
    <div>
      <div className="user">
        <header className="user__header">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3219/logo.svg"
            alt=""
          />
          <h1 className="user__title">SignUp as a Food Vendor</h1>
        </header>

        <form className="form" onSubmit={event7}>
          <div className="form__group">
            <input
              type="text"
              placeholder="Vendor Name"
              className="form__input"
              value={value1}
              onChange={event1}
            />
          </div>

          <div className="form__group">
            <input
              type="time"
              placeholder="Opening Time"
              className="form__input"
              value={value2}
              onChange={event2}
            />
          </div>
          <div className="form__group">
            <input
              type="time"
              placeholder="Closing Time"
              className="form__input"
              value={value3}
              onChange={event3}
            />
          </div>

          <div className="form__group">
            <input
              type="email"
              placeholder="Email/Phone Number"
              className="form__input"
              value={value4}
              onChange={event4}
            />
          </div>

          <div className="form__group">
            <input
              type="password"
              placeholder="Password"
              className="form__input"
              value={value5}
              onChange={event5}
            />
          </div>

          <div className="form__group">
            <input
              type="password"
              placeholder="Confirm Password"
              className="form__input"
              value={value6}
              onChange={event6}
            />
          </div>

          <div className="form__box6">
            <h3>Upload Vendor Logo</h3>
            {/* <label htmlFor='logo' >Upload Your Logo</label> */}
            <input
              type="file"
              id="logo"
              placeholder="Vendor Logo"
              className="btn__upload" /*value={value#s} onChange={event#}*/
            />
          </div>

          <button className="btn" type="submit">
            <strong>Register</strong>
          </button>
        </form>
      </div>
    </div>
  );
};
