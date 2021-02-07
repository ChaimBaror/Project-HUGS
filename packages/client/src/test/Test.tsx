import React from "react";
import Button from '../components/Button'
import Login from '../components/Login'
function App() {
  return (
    <>
      <div
        style={{
          background: "red",
          height: "50px",
          textAlign: "center",
          fontSize: 20,
        }}
      >
        Test Component
      </div>

      <div style={{ height: "100%", background: "blue", width: "100%" }}>

        {/* example to test button component */}
        {/* <Button ></Button> */}

        {/* example to test login component */}
        <Login></Login>
        </div>
    </>
  );
}

export default App;
