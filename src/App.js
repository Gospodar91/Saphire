import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { router } from "./router";

function App() {
  const routing = router(true, true);
  return (
    <>
      <Header />
      {routing}
      <Footer />
    </>
  );
}

export default App;
