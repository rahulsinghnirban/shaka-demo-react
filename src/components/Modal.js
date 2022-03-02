import React from "react";
import './Modal.css'
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ setIsOpen }) => {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Customize</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="modalContent">
          <label for="cars">Choose a color:</label>

<select name="colors" id="color">
  <option value="red">Red</option>
  <option value="blue">blue</option>
  <option value="yellow">Yellow</option>
  <option value="white">White</option>
</select>
<br/>
<label for="cars">Choose a background:</label>

<select name="colors" id="color">
  <option value="red">Red</option>
  <option value="blue">blue</option>
  <option value="yellow">Yellow</option>
  <option value="white">White</option>
</select>
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button className="deleteBtn" onClick={() => setIsOpen(false)}>
                Customize
              </button>
              <button
                className="cancelBtn"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;