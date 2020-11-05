import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { router } from "./router";

function App() {
  const token = false;
  const adminID = false;
  const routing = router(token, adminID);
  return (
    <>
      <Header token={token} adminID={adminID} />
      {routing}
      <Footer />
    </>
  );
}

export default App;
