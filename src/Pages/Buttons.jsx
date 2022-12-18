import React from "react";

const Buttons = () => {
  const ButtonGroup = [
    {
      name: "Button 1",
      api: "https://jsonplaceholder.typicode.com/comments",
    },
    {
      name: "Button 2",
      api: "https://jsonplaceholder.typicode.com/photos",
    },
    {
      name: "Button 3",
      api: "https://jsonplaceholder.typicode.com/todos",
    },
    {
      name: "Button 4",
      api: "https://jsonplaceholder.typicode.com/posts",
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-5">
      {ButtonGroup.map((singleBtn, i) => (
        <button
          key={i}
          type="button"
          className="px-8 py-3 font-semibold border rounded border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-gray-100"
        >
          {singleBtn?.name}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
