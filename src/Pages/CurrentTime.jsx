import React, { useEffect, useState } from "react";

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(Date.now());
  useEffect(() => {
    const time = Date.now();
    setCurrentTime(time);
  }, [currentTime]);

  return (
    <div className="max-w-4xl mx-auto mb-20">
      <button
        type="button"
        className="px-8 py-3 w-full font-semibold rounded bg-gray-800 text-gray-100"
      >
        {currentTime}
      </button>
    </div>
  );
};

export default CurrentTime;
