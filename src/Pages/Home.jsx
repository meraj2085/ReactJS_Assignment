import React, { useState } from "react";
import { GetTime } from "../Utilities/GetTime";
import Buttons from "./Buttons";

const Home = () => {
  const [btn1Data, setBtn1Data] = useState(null);
  const [btn2Data, setBtn2Data] = useState(null);
  const [btn3Data, setBtn3Data] = useState(null);
  const [btn4Data, setBtn4Data] = useState(null);

  const selectedBtn = (btn) => {
    const api = btn.api;
    GetTime(api)
      .then((data) => {
        if (btn.name === "Button 1") {
          setBtn1Data(data);
        } else if (btn.name === "Button 2") {
          setBtn2Data(data);
        } else if (btn.name === "Button 3") {
          setBtn3Data(data);
        } else {
          setBtn4Data(data);
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="max-w-4xl mx-auto mb-10">
      <div className="grid grid-cols-2 gap-10 mt-20 mb-10">
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body text-lg">
            <p>Start: {btn1Data?.start}</p>
            <p>End: {btn1Data?.end}</p>
            <p>Start Save: {btn1Data?.startSave}</p>
            <p>End Save: {btn1Data?.endSave}</p>
          </div>
        </div>
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body text-lg">
            <p>Start: {btn2Data?.start}</p>
            <p>End: {btn2Data?.end}</p>
            <p>Start Save: {btn2Data?.startSave}</p>
            <p>End Save: {btn2Data?.endSave}</p>
          </div>
        </div>
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body text-lg">
            <p>Start: {btn3Data?.start}</p>
            <p>End: {btn3Data?.end}</p>
            <p>Start Save: {btn3Data?.startSave}</p>
            <p>End Save: {btn3Data?.endSave}</p>
          </div>
        </div>
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body text-lg">
            <p>Start: {btn4Data?.start}</p>
            <p>End: {btn4Data?.end}</p>
            <p>Start Save: {btn4Data?.startSave}</p>
            <p>End Save: {btn4Data?.endSave}</p>
          </div>
        </div>
      </div>
      <Buttons selectedBtn={selectedBtn}></Buttons>
    </div>
  );
};

export default Home;
