import React from "react";
// import "./Modal.css";
import "../styles/styles.css"

type ModalProps={
    setOpenModal:(value:boolean)=>void;
}
function Modal({ setOpenModal}:ModalProps) {
  return (
    <div>
    
      <div className="modalContainer ">
      {/* <div className="flex items-center justify-center"> */}
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
            Enquiry Submitted Successfully
        </div>
        <div className="body">
          <p>We will reach you soon</p>
        </div>
        <div className="footer flex align-center">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            continue
          </button>
          {/* <button>Continue</button> */}
        </div>
      {/* </div> */}
     </div>


           
     
      {/* <div className="modalContainer_mobile">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
            Enquiry Submitted Successfully...
        </div>
        <div className="body">
          <p>We will reach you soon</p>
        </div>
        <div className="footer flex align-center">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
        </div>
     </div> */}
     </div>
  );
}

export default Modal;