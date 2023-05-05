import { useState } from "react";
import drawers from "./assets/drawers.jpg";
import Profile from "./components/Profile";

function App() {
  return (
    <div>
      <main className="wrapper">
        <section className="image-section">
          <img src={drawers} alt="" />
        </section>
        <section className="content-section">
          <h2>
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h2>
          <p>
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
          <Profile></Profile>
        </section>
      </main>
    </div>
  );
}

export default App;
