import "./AddNewItem.css";
import { useState } from "react";

import React from "react";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const Popup = (props) => {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemDesc, setItemDesc] = useState("");
  const [itemPic, setItemPic] = useState([]);

  const event1 = (x) => {
    setItemName(x.target.value);
  };
  const event2 = (x) => {
    setItemPrice(x.target.value);
  };
  const event3 = (x) => {
    setItemDesc(x.target.value);
  };

  const event4 = (x) => {
    setItemPic(x.target.files[0]);
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName=""
    >
      <Modal.Body>
        {" "}
        <div id="newfooditem">
          <h2> Add a new food item</h2>
          <form id="newitemform" className="newitemform">
            <div className="group1">
              <label className="inputarea">
                {" "}
                Name <br />
                <input type="text" value={itemName} onChange={event1} />
              </label>
              <label className="inputarea">
                {" "}
                Price <br />
                <input
                  type="number"
                  placeholder="In Naira"
                  value={itemPrice}
                  onChange={event2}
                />{" "}
              </label>
            </div>
            <div className="group1">
              <label className="inputareaD">
                {" "}
                Item Description <br />
                <input type="text" value={itemDesc} onChange={event3} />
              </label>
              <label>
                {" "}
                Item Image <br />
                <input
                  type="file"
                  value={(itemPic, [])}
                  accept="image/png, image/jpeg"
                  onChange={event4}
                />
              </label>
            </div>{" "}
            <br />
            <button htmlFor="newitemform" type="submit">
              {" "}
              Submit
            </button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};
