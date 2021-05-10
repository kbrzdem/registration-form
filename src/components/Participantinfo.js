import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "./Button";

const Participantinfo = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");

  const history = useHistory();

  const handleSubmitForm = (event) => {
    event.preventDefault();
    if (name !== "" && lastname !== "") {
      const data = { name, lastname };
      setName("");
      setLastname("");
      history.push({
        pathname: "/summary",
        state: { ...data },
      });
      console.log(data);
      console.log("lastname: " + lastname);
    } else {
      console.log("error");
    }
  };

  return (
    <>
      <h3 className="row choosetitle">Participant Info</h3>
      <form onSubmit={handleSubmitForm}>
        <div className="row typecard  typecard--info">
          <div className="col-12 info-wrap">
            <div className="first-wrap">
              <div className="row">
                <div className="col-12 col-lg-6">
                  <p className="info-text info-text--mb ">First Name</p>
                  <input
                    type="text"
                    className="input"
                    placeholder="Placeholder"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className="col-12 col-lg-6">
                  <p className="info-text info-text--mb">Last Name</p>
                  <input
                    type="text"
                    className="input"
                    placeholder="Placeholder"
                    value={lastname}
                    onChange={(e) => {
                      setLastname(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-lg-12">
                  <p className="info-text info-text--mb info-text--mailmt ">
                    Email Adres
                  </p>
                  <input
                    type="text"
                    className="input"
                    placeholder="Placeholder"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-12">
                <p className="info-text info-text--mb info-text--companymt">
                  Institution or company
                </p>
                <input
                  type="text"
                  className="input"
                  placeholder="Placeholder"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-6">
                <p className="info-text info-text--mb info-text--companymt">
                  Postal code
                </p>
                <input
                  type="text"
                  className="input"
                  placeholder="Placeholder"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-6">
                <p className="info-text info-text--mb info-text--mailmt">
                  Country
                </p>
                <input
                  type="text"
                  className="input"
                  placeholder="Placeholder"
                />
              </div>
              <div className="col-12 col-lg-6">
                <p className="info-text">City</p>
                <input
                  type="text"
                  className="input"
                  placeholder="Placeholder"
                />
              </div>
            </div>
            <div>
              <div>
                <p className="info-text">
                  Operating system of the PC, laptop that you will use for the
                  hands-on:
                </p>
                <div className="m-b">
                  <input type="checkbox" id="Windows" name="Windows" />
                  <label for="Windows" className="info-text info-text--weight ">
                    Windows
                  </label>
                </div>

                <div className="m-b">
                  <input type="checkbox" id="Linux" name="Linux" />
                  <label for="Linux" className="info-text info-text--weight ">
                    Linux
                  </label>
                </div>
                <div className="m-b">
                  <input type="checkbox" id="Mac" name="Mac" />
                  <label for="Mac" className="info-text info-text--weight ">
                    Mac
                  </label>
                </div>

                <div className="m-b">
                  <input type="checkbox" id="Other" name="Other" />
                  <label for="Other" className="info-text info-text--weight ">
                    Other
                  </label>
                </div>
              </div>
              <div>
                <p className="info-text">
                  Do you want to get a gift delivered at home for the network
                  reception?
                </p>
                <div className="">
                  <div className="radio">
                    <label
                      className="info-text info-text--weight "
                      //style={radio === "regular" ? { border: "1px solid blue" } : {}}
                    >
                      <div className="typeradio-title--info ">
                        <div className="typeradio-title m-b">
                          <input
                            type="radio"
                            value="regular"
                            className="typeform-radio"
                          />
                          Yes,Please
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="">
                  <div className="radio">
                    <label
                      className="info-text info-text--weight"
                      //style={radio === "regular" ? { border: "1px solid blue" } : {}}
                    >
                      <div className=" typeradio-title--info">
                        <div className="typeradio-title m-b">
                          <input
                            type="radio"
                            value="regular"
                            className="typeform-radio"
                          />
                          No,Thanks
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div>
        <Button handleSubmitForm={handleSubmitForm} />
      </div>
    </>
  );
};

export default Participantinfo;
