import React from "react";
import Toast from "react-bootstrap/Toast";
import "../App.css";

const CustomToastMessage = ({
  show,
  setShow,
  successMessage,
  errorMessage
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        marginBottom: "50px"
      }}
    >
      <Toast onClose={() => setShow(false)} show={show} delay={1000} autohide>
        {successMessage && (
          <Toast.Body className="successMessageAlert">
            {successMessage}
          </Toast.Body>
        )}
        {errorMessage && (
          <Toast.Body className="errorMessageAlert">{errorMessage}</Toast.Body>
        )}
      </Toast>
    </div>
  );
};

export default CustomToastMessage;
