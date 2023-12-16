import React from "react";
const Shimmer = () => {
  return (
    <div className="flex flex-wrap m-6 p-6 ">
      {Array(20)
        .fill("")
        .map((e, index) => (
          <div
            key={index}
            className=" p-4 m-4 w-[250px] h-[380px] relative bg-gradient-to-r from-transparent
             via-gray-100 to-transparent before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent
            before:via-gray-100 before:to-transparent isolate overflow-hidden shadow-xl shadow-black/5 before:border-t before:border-gray-100 space-y-5 rounded-2xl bg-white/5 "
          >
            <div className="h-[200px] rounded-lg bg-gray-300"></div>
            <div className="space-y-3">
              <div className="h-3 w-3/5 rounded-lg bg-gray-200"></div>
              <div className="h-3 w-4/5 rounded-lg bg-gray-300"></div>
              <div className="h-3 w-2/5 rounded-lg bg-gray-300"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
