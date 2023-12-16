import React from "react";
const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl">Contact Us</h1>
      <input
        type="text"
        className="border border-black m-2 p-2"
        placeholder="name"
      />
      <input
        type="text"
        className="border border-black m-2 p-2"
        placeholder="message"
      />
      <button className="bg-gray-100 rounded-lg m-2 p-2 border border-black">
        Submit
      </button>
    </div>
  );
};

export default Contact;
