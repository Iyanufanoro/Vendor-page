import "./App.css";
import React from "react";
// import Button from "react-bootstrap/Button";

import "bootstrap/dist/css/bootstrap.min.css";

// import { Popup } from "./components/popup";
import { VendorPage } from "./components/vendorPage";
function App() {
  // const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      {/* <Button variant="primary" onClick={() => setModalShow(true)}>
        modal
      </Button>

      <Popup show={modalShow} onHide={() => setModalShow(false)} /> */}
      <VendorPage></VendorPage>
    </>
  );
}

export default App;
