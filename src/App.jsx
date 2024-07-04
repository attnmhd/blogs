import { useState } from "react";
import Navbar from "./components/Page/Navbar";
import Hero from "./components/Page/Hero";
import Articles from "./components/Page/Artikel";
import Footer from "./components/Page/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" mx-auto p-4">
      <Navbar />
      <Hero />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
