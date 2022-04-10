import React from 'react';
import './Main.css';
const Main = () => {
  return (
    <main className="main">
      <div className="flex col align-center jst-center full-height gap-1">
        <h3 className="flex col align-center jst-center text-xl text-dark gap-sm">
          <p>Find your relief with</p>
          <p className="text-bold">Herbal ReLeaf</p>
        </h3>
        <button className="btn btn-primary btn-round">Take Quiz</button>
      </div>
    </main>
  );
};

export default Main;
