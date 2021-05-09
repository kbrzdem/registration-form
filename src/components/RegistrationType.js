import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const RegistrationType = () => {
  //const [regular, setRegular] = useState("");
  //const [student, setStudent] = useState("");
  const [radio, setRadio] = useState("regular");
  const history = useHistory();

  const handleSubmitForm = (event) => {
    event.preventDefault();
    history.push({ pathname: "/" });
    console.log("başarılı");
  };

  return (
    <>
      <h1 className="choosetitle"> Choose Registration Types </h1>
      <form onSubmit={handleSubmitForm} className="global-form">
        <div className="row">
          <div className="col-12">
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="regular"
                  className="formradio"
                  checked={radio === "regular"}
                  onChange={(e) => {
                    setRadio(e.target.value);
                  }}
                />
                Regular
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="student"
                  className="formradio"
                  checked={radio === "student"}
                  onChange={(e) => {
                    setRadio(e.target.value);
                  }}
                />
                Student
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="industry"
                  className="formradio"
                  checked={radio === "industry"}
                  onChange={(e) => {
                    setRadio(e.target.value);
                  }}
                />
                Industry
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="I’ve a Verification Code"
                  className="formradio"
                  checked={radio === "I’ve a Verification Code"}
                  onChange={(e) => {
                    setRadio(e.target.value);
                  }}
                />
                I’ve a Verification Code
              </label>
            </div>
          </div>
        </div>
        <button type="submit"> Next</button>
      </form>
    </>
  );
};

export default RegistrationType;
