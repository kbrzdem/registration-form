import React, { useState } from "react";
import Button from "./Button";
import Participantinfo from "./Participantinfo";

const RegistrationType = () => {
  const [radio, setRadio] = useState("regular");

  const [nextClicked, setNextClicked] = useState(false);

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const data = { radio };
    console.log(data);
    setNextClicked(true);
    console.log("form-successful");
  };

  if (!nextClicked) {
    return (
      <>
        <h1 className="row choosetitle"> Choose Registration Types </h1>
        <form onSubmit={handleSubmitForm} className="global-form">
          <div className="row typecard">
            <div className="col-12">
              <div className="radio">
                <label
                  className="radio-label "
                  //style={radio === "regular" ? { border: "1px solid blue" } : {}}
                >
                  <div className="typeradio-title-wrap">
                    <div className="typeradio-title">
                      <input
                        type="radio"
                        value="regular"
                        className="typeform-radio"
                        checked={radio === "regular"}
                        onChange={(e) => {
                          setRadio(e.target.value);
                        }}
                      />

                      <h3 className="type-radio-title">Regular</h3>
                    </div>
                    <p className="type-radio-number">$65,00</p>
                  </div>
                  <p className="typeradio-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </label>
              </div>
            </div>
          </div>
          <div className="row typecard">
            <div className="col-12">
              <div className="radio">
                <label className="radio-label">
                  <div className="typeradio-title-wrap">
                    <div className="typeradio-title">
                      <input
                        type="radio"
                        value="student"
                        className="formradio"
                        checked={radio === "student"}
                        onChange={(e) => {
                          setRadio(e.target.value);
                        }}
                      />
                      <h3 className="type-radio-title">Student</h3>
                    </div>
                    <p className="type-radio-number">$65,00</p>
                  </div>
                  <p className="typeradio-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </label>
              </div>
            </div>
          </div>
          <div className="row typecard">
            <div className="col-12 ">
              <div className="radio">
                <label className="radio-label">
                  <div className="typeradio-title-wrap">
                    <div className="typeradio-title">
                      <input
                        type="radio"
                        value="industry"
                        className="formradio"
                        checked={radio === "industry"}
                        onChange={(e) => {
                          setRadio(e.target.value);
                        }}
                      />
                      <h3 className="type-radio-title">Industry</h3>
                    </div>
                    <p className="type-radio-number">$65,00</p>
                  </div>
                  <p className="typeradio-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </label>
              </div>
            </div>
          </div>
          <div className="row typecard">
            <div className="col-12">
              <div className="radio">
                <label className="radio-label">
                  <div className="typeradio-title-wrap">
                    <div className="typeradio-title">
                      <input
                        type="radio"
                        value="I’ve a Verification Code"
                        className="formradio"
                        checked={radio === "I’ve a Verification Code"}
                        onChange={(e) => {
                          setRadio(e.target.value);
                        }}
                      />
                      <h3>I’ve a Verification Code</h3>
                    </div>
                    <p className="type-radio-number">$65,00</p>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </form>
        <Button handleSubmitForm={handleSubmitForm} />
      </>
    );
  } else return <Participantinfo />;
};

export default RegistrationType;
