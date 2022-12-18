import React from "react";
import { GetTime } from "../Utilities/GetTime";
import Buttons from "./Buttons";

const Home = () => {
  GetTime()
  .then(data => console.log(data))
  .catch(err => console.log(err.message))
  
  return (
    <div className="max-w-4xl mx-auto mb-10">
      <div className="grid grid-cols-2 gap-10 mt-20 mb-10">
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body text-lg">
            <p>Start: </p>
            <p>End: </p>
            <p>Start Save: </p>
            <p>End Save: </p>
          </div>
        </div>
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body text-lg">
            <p>Start: </p>
            <p>End: </p>
            <p>Start Save: </p>
            <p>End Save: </p>
          </div>
        </div>
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body text-lg">
            <p>Start: </p>
            <p>End: </p>
            <p>Start Save: </p>
            <p>End Save: </p>
          </div>
        </div>
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body text-lg">
            <p>Start: </p>
            <p>End: </p>
            <p>Start Save: </p>
            <p>End Save: </p>
          </div>
        </div>
      </div>
      <Buttons></Buttons>
    </div>
  );
};

export default Home;
