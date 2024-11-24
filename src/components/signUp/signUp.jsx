import { useEffect, useState } from "react";
import "./style.css"
export const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confrimPassword, setConfrimPassword] = useState("");

  const [firstNameErr, setFirstNameErr] = useState(false);
  const [lastNameErr, setLastNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [confrimErr, setConfrimErr] = useState(false);

  const formValidation = (event) => {
    event.preventDefault();
    if (firstName === "") {
      setFirstNameErr(true);
    }
    if (lastName === "") {
      setLastNameErr(true);
    }
    if (email === "") {
      setEmailErr(true);
    }
    if (password === "") {
      setPasswordErr(true);
    }
    if (confrimPassword === "") {
      setConfrimErr(true);
    }
    console.log(firstName, lastName, email, password, confrimPassword);
  };

  useEffect(() => {
    if (firstName !== "") {
      setFirstNameErr(false);
    }
    if (lastName !== "") {
      setLastNameErr(false);
    }
    if (email !== "") {
      setEmailErr(false);
    }
    if (password !== "") {
      setPasswordErr(false);
    }
    if (confrimPassword !== "") {
      setConfrimErr(false);
    }
  }, [firstName, lastName, email, password, confrimPassword]);
  return (
    <>
      <div
        style={{ height: "100vh" }}
        className="d-flex justify-content-center align-items-center "
      >
        <form className="d-flex flex-column  align-items-center w-50 border border-black p-5 bg-light" onSubmit={formValidation}>
          <h3 className="text-center text-secondary">Sign Up</h3>
          <div className="my-2">
            <input
                className="p-2 rounded-pill input-w"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              type="text"
              placeholder="Enter First Name"
            />{" "}
            {firstNameErr && (
              <p className="text-danger">First name is required!</p>
            )}
          </div>
          <div className="my-2">
            <input
             className="p-2 rounded-pill input-w"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              type="text"
              placeholder="Enter Last Name"
            />
            {lastNameErr && (
              <p className="text-danger">Second Name is required!</p>
            )}
          </div>
          <div className="my-2">
            <input
             className="p-2 rounded-pill input-w"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Enter Email"
            />
            {emailErr && <p className="text-danger">Email is required!</p>}
          </div>
          <div className="my-2">
            <input
             className="p-2 rounded-pill input-w"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
            />
            {passwordErr && (
              <p className="text-danger">Password is required!</p>
            )}
          </div>
          <div className="my-2">
            <input
             className="p-2 rounded-pill input-w"
              onChange={(e) => setConfrimPassword(e.target.value)}
              value={confrimPassword}
              type="password"
              placeholder="Confrim Password"
            />
            {confrimErr && <p className="text-danger">Password is required!</p>}
          </div>
                
         <div className=" d-flex justify-content-center">
         <button className="btn btn-secondary mt-3" type="submit">
            Register
          </button>
         </div>
        </form>
      </div>
    </>
  );
};


