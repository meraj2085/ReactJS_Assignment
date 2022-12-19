import React, { useState } from "react";

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(Date.now());

  const GetCurrentTime = () => {
    const time = Date.now();
    setCurrentTime(time);
  };
  setInterval(GetCurrentTime, 1);

  return (
    <div className="max-w-4xl mx-auto mb-20 px-5">
      <p className="px-8 py-3 w-full font-semibold text-center rounded bg-gray-600 text-gray-100">
        {currentTime}
      </p>
    </div>
  );
};

export default CurrentTime;
