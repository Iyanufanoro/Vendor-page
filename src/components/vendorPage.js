import "./vendorPage.css";
import "./toggle.css";
import React from "react";
// import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Popup } from "./popup";

export const VendorPage = () => {
  const [modalShow, setModalShow] = React.useState(false);

  const [value1, setValue1] = useState(false);
  const [value2, setValue2] = useState(false);
  const [value3, setValue3] = useState(false);
  const [value4, setValue4] = useState(false);

  const event1 = (x) => {
    console.log("value recieved from food1", x.target.checked);
    setValue1(x.target.checked);
  };
  const event2 = (x) => {
    console.log("value recieved from food2", x.target.checked);
    setValue2(x.target.checked);
  };
  const event3 = (x) => {
    console.log("value recieved from food3", x.target.checked);
    setValue3(x.target.checked);
  };
  const event4 = (x) => {
    console.log("value recieved from food4", x.target.checked);
    setValue4(x.target.checked);
  };

  return (
    <>
      {" "}
      <div className="kkk">
        <div className="head">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3219/logo.svg"
            alt=""
          />
          <h1> Vendor-Page </h1>
        </div>
        <div className="container">
          <div id="add-new-item">
            {" "}
            <button
              className="modalbutton"
              variant="primary"
              onClick={() => setModalShow(true)}
            >
              <strong>ADD</strong>
            </button>
            <Popup show={modalShow} onHide={() => setModalShow(false)} />
          </div>

          <div className="container1">
            <div className="container1a">
              <div className="food-item">
                <div className="food-item-image"></div>{" "}
                <div className="food-item_NTPr">
                  <div className="food-item-name"> Jollof Rice</div>
                  <div className="food-item-toggle">
                    <div>
                      <form>
                        {/* <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label> */}

                        <label className="switch">
                          <input
                            type="checkbox"
                            checked={value1}
                            onChange={(x) => {
                              event1(x);
                            }}
                          />
                          <span className="slider round"></span>
                        </label>
                      </form>
                    </div>{" "}
                  </div>
                  <div className="food-item-price">N999</div>{" "}
                </div>
              </div>

              <div className="food-item">
                <div className="food-item-image"></div>{" "}
                <div className="food-item_NTPr">
                  <div className="food-item-name"> Jollof Rice</div>
                  <div className="food-item-toggle">
                    <div>
                      <form>
                        {/* <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label> */}

                        <label className="switch">
                          <input
                            type="checkbox"
                            checked={value2}
                            onChange={(x) => {
                              event2(x);
                            }}
                          />
                          <span className="slider round"></span>
                        </label>
                      </form>
                    </div>{" "}
                  </div>
                  <div className="food-item-price">N999</div>{" "}
                </div>
              </div>

              <div className="food-item">
                <div className="food-item-image"></div>{" "}
                <div className="food-item_NTPr">
                  <div className="food-item-name"> Jollof Rice</div>
                  <div className="food-item-toggle">
                    <div>
                      <form>
                        {/* <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label> */}

                        <label className="switch">
                          <input
                            type="checkbox"
                            checked={value3}
                            onChange={(x) => {
                              event3(x);
                            }}
                          />
                          <span className="slider round"></span>
                        </label>
                      </form>
                    </div>{" "}
                  </div>
                  <div className="food-item-price">N999</div>{" "}
                </div>
              </div>
            </div>
            <div className="container1a">
              <div className="food-item">
                <div className="food-item-image"></div>{" "}
                <div className="food-item_NTPr">
                  <div className="food-item-name"> Jollof Rice</div>
                  <div className="food-item-toggle">
                    <div>
                      <form>
                        {/* <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label> */}

                        <label className="switch">
                          <input
                            type="checkbox"
                            checked={value4}
                            onChange={(x) => {
                              event4(x);
                            }}
                          />
                          <span className="slider round"></span>
                        </label>
                      </form>
                    </div>{" "}
                  </div>
                  <div className="food-item-price">N999</div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
};
